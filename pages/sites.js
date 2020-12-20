import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import AuthLayout from "@/layouts/AuthLayout";
import UpgradeToStarter from "@/components/EmptyStates/Sites/UpgradeToStarter";
import AddFirstSite from "@/components/EmptyStates/Sites/AddFirstSite";
import AddSiteModal from "@/components/AddSiteModal";

const Sites = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <AuthLayout
      pageTitle='Sites'
      breadCrumbPaths={[
        { path: "/", name: "Home" },
        { path: "/sites", name: "Sites" },
      ]}
    >
      {/* <UpgradeToStarter /> */}
      <AddFirstSite openModal={onOpen} />
      <AddSiteModal isOpen={isOpen} closeModal={onClose} />
    </AuthLayout>
  );
};

export default Sites;
