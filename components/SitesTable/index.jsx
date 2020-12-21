import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Skeleton } from "@chakra-ui/react";
import { parse, format } from "fecha";

const SitesTable = ({ sites }) => {
  return (
    <Table variant='simple'>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Site Link</Th>
          <Th>Feedback Link</Th>
          <Th>Date Added</Th>
        </Tr>
      </Thead>
      <Tbody>
        {sites.map((site, index) => (
          <Tr key={`empty_tr_${index}`}>
            <Td>{site.name}</Td>
            <Td>{site.link}</Td>
            <Td>View Feedback</Td>
            <Td>
              {format(
                parse(site.createdAt, "isoDateTime"),
                "MMMM DD, YYYY hh:mm A"
              )}
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

SitesTable.defaultProps = {
  sites: [],
};

export default SitesTable;
