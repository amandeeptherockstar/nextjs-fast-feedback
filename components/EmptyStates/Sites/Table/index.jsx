import { Table, Thead, Tbody, Tr, Th, Td, Skeleton } from "@chakra-ui/react";
import React from "react";

const EmptyTable = ({ rows, cols }) => {
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
        {[...new Array(rows)].map((_, trIndex) => (
          <Tr key={`empty_tr_${trIndex}`}>
            {[...new Array(cols)].map((_, tdIndex) => (
              <Td key={`empty_tr_${trIndex}_empty_td${tdIndex}`}>
                <Skeleton height='10px' />
              </Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

EmptyTable.defaultProps = {
  rows: 5,
  cols: 4,
};

export default EmptyTable;
