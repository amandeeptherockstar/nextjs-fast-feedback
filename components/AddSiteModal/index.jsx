import React, { useRef } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import { PlusCircleFill } from "@/utils/icons";

const AddSiteModal = ({ isOpen, closeModal }) => {
  const websiteNameRef = useRef();
  return (
    <Modal
      isOpen={isOpen}
      onClose={closeModal}
      initialFocusRef={websiteNameRef}
      closeOnOverlayClick={false}
      motionPreset='slideInBottom'
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add website</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input ref={websiteNameRef} placeholder='Fast feedback' />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>URL</FormLabel>
            <Input placeholder='https://www.fast-feedback.io' />
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
          >
            Add
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddSiteModal;
