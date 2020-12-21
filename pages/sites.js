import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import useSWR from "swr";
import AuthLayout from "@/layouts/AuthLayout";
import UpgradeToStarter from "@/components/EmptyStates/Sites/UpgradeToStarter";
import AddFirstSite from "@/components/EmptyStates/Sites/AddFirstSite";
import AddSiteModal from "@/components/AddSiteModal";
import EmptyTable from "@/components/EmptyStates/Sites/Table";
import SitesTable from "@/components/SitesTable";
import { fetcher } from "@/utils/fetcher";

const Sites = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data, error } = useSWR("/api/sites", fetcher);

  return (
    <AuthLayout
      pageTitle='Sites'
      breadCrumbPaths={[
        { path: "/", name: "Home" },
        { path: "/sites", name: "Sites" },
      ]}
    >
      {!data ? (
        <EmptyTable />
      ) : (
        <>
          {data?.sites?.length === 0 && <AddFirstSite openModal={onOpen} />}
          {data?.sites?.length > 0 && <SitesTable sites={data?.sites || []} />}
        </>
      )}

      <AddSiteModal isOpen={isOpen} closeModal={onClose} />
    </AuthLayout>
  );
};

export default Sites;
