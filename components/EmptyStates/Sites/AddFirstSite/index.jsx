import React from "react";
import { Button, Heading, Text } from "@chakra-ui/react";
import { PlusCircleFill } from "@/utils/icons";

const AddFirstSite = ({ openModal }) => {
  return (
    <div className='flex items-center justify-center h-full'>
      <div className='text-center'>
        <Heading size='md' className='mb-1 text-gray-700'>
          You haven&apos;t added any sites
        </Heading>
        <Text className='text-gray-400 mb-4'>
          Let&apos;s add your first website so others can leave a review to it
        </Text>
        <Button
          leftIcon={<PlusCircleFill />}
          backgroundColor='black'
          colorScheme='white'
          onClick={openModal}
        >
          Add Site
        </Button>
      </div>
    </div>
  );
};

export default AddFirstSite;
