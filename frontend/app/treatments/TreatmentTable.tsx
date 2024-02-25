"use client";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
} from "@nextui-org/react";
import { Treatment, columns, renderCell } from "./column";
import { useMemo, useState } from "react";
import { TreatmentModal } from "./TreatmentModal";

export function TreatmentTable({ treatment, updateTreatmentData }: { treatment: Treatment[], updateTreatmentData: () => void }) {


  const topContent = useMemo(() => {
    return (
      <div className="flex justify-between gap-3 ">
        <h2 className="text-2xl font-extrabold dark:text-white">
          Simple Healthcare{" "}
          <mark className="px-2 text-white  rounded dark:bg-green-700">
            Treatment
          </mark>{" "}
          Entry System
        </h2>
        <TreatmentModal updateTreatmentData={updateTreatmentData}/>
        
      </div>
    );
  }, []);

  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const pages = Math.ceil(treatment.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return treatment.slice(start, end);
  }, [page, treatment]);

  return (
    <Table
      aria-label="Example table with dynamic content"
      topContent={topContent}
      bottomContentPlacement="outside"
      bottomContent={
        <div className="flex w-full justify-center">
          <Pagination
            isCompact
            showControls
            showShadow
            color="primary"
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          />
        </div>
      }
      classNames={{
        wrapper: "min-h-[222px]",
      }}
    >
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={items} emptyContent={"No rows to display."}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
