import React from "react";
import { Button, Heading, Text } from "@chakra-ui/react";
import { ArrowCircleFill } from "@/utils/icons";

const UpgradeToStarter = () => {
  return (
    <div className='flex items-center justify-center h-full'>
      <div className='text-center'>
        <Heading size='md' className='mb-1 text-gray-700'>
          Get feedback on your site instantly!
        </Heading>
        <Text className='text-gray-400 mb-4'>
          Start today then grow with us.
        </Text>
        <Button leftIcon={<ArrowCircleFill />} colorScheme='blue'>
          Upgrade to Starter
        </Button>
      </div>
    </div>
  );
};

export default UpgradeToStarter;
