import React, { useRef, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  ModalFooter,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useUserAuthContext } from "@/lib/context/User";
import { PlusCircleFill } from "@/utils/icons";
import { createSite } from "@/lib/firestore";

const AddSiteModal = ({ isOpen, closeModal }) => {
  const websiteNameRef = useRef();
  const toast = useToast();
  const { user } = useUserAuthContext();

  const [createSiteLoading, setCreateSiteLoading] = useState(false);

  // yup schema
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    link: Yup.string()
      .required("Link is required")
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Invalid website link"
      ),
  });

  const addSite = (values, { resetForm }) => {
    setCreateSiteLoading(true);
    createSite({
      ...values,
      link:
        values.link.startsWith("http://") || values.link.startsWith("https://")
          ? values.link
          : `http://${values.link}`,
      createdAt: new Date().toISOString(),
      authorId: user.uid,
    })
      .then((resp) => {
        if (resp) {
          resetForm();
          closeModal();
          toast({
            title: "Website added",
            description: "We've just added your website.",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
        }
        setCreateSiteLoading(false);
      })
      .catch((err) => {
        console.log(err, "err");
        setCreateSiteLoading(false);
        toast({
          title: "An error occurred.",
          description: "Unable to add your website.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  };

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    resetForm,
  } = useFormik({
    initialValues: {
      name: "",
      link: "",
    },
    validationSchema,
    onSubmit: addSite,
  });

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        resetForm();
        closeModal();
      }}
      initialFocusRef={websiteNameRef}
      closeOnOverlayClick={false}
      motionPreset='slideInBottom'
    >
      <ModalOverlay />
      <ModalContent>
        <form onSubmit={handleSubmit}>
          <ModalHeader>Add website</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl isInvalid={errors.name && touched.name} isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                ref={websiteNameRef}
                name='name'
                placeholder='Fast feedback'
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FormErrorMessage>{errors.name}</FormErrorMessage>
            </FormControl>

            <FormControl
              mt={4}
              isInvalid={errors.link && touched.link}
              isRequired
            >
              <FormLabel>URL</FormLabel>
              <Input
                name='link'
                placeholder='https://www.fast-feedback.io'
                value={values.link}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FormErrorMessage>{errors.link}</FormErrorMessage>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={closeModal} mr={4}>
              Cancel
            </Button>
            <Button
              backgroundColor='black'
              colorScheme='white'
              leftIcon={<PlusCircleFill />}
              // type='submit'
              onClick={handleSubmit}
              isLoading={createSiteLoading}
              // spinner={<BeatLoader size={8} color='white' />}
            >
              Add
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default AddSiteModal;
