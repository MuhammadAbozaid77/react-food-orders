import React from "react";
import Table from "../../../components/ui/Table";

export default function OrdersTableRow({ row }) {
  return (
    <>
      <Table.Row>
        <Table.Cell> {row.name} </Table.Cell>
        <Table.Cell> {row.history} </Table.Cell>
        <Table.Cell>
          {row.order?.map((el, index) => (
            <>
              {el?.name && (
                <span
                  className="border bg-gray-200 mx-1 rounded p-1"
                  key={index}
                >
                  {el.name}
                </span>
              )}
            </>
          ))}
        </Table.Cell>
        <Table.Cell> {row.company} </Table.Cell>
        <Table.Cell> {row.status} </Table.Cell>
      </Table.Row>
    </>
  );
}
