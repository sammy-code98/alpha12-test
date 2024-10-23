/* eslint-disable @typescript-eslint/no-explicit-any */
import { SetStateAction, useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import { Chip, Spinner } from "@nextui-org/react";
import { GoDotFill } from "react-icons/go";
import TablePagination from "../TablePagination";
import { tableData } from "./data";

export default function EventTable(): JSX.Element {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [loading, setLoading] = useState(true);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;

  const currentRows = tableData.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(tableData.length / rowsPerPage);

  const handlePageChange = (page: SetStateAction<number>) => {
    setCurrentPage(page);
    setLoading(true);
  };

  const handleRowsPerPageChange = (value: any) => {
    setRowsPerPage(Number(value));
    setCurrentPage(1);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      // Simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="w-full px-2 py-3 overflow-x-auto">
      <Table
        radius="none"
        removeWrapper={true}
        aria-label="event-table"
        bottomContent={
          <div className="flex w-full justify-center">
            <TablePagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
              rowsPerPage={rowsPerPage}
              loading={loading}
            />
          </div>
        }
      >
        <TableHeader className="bg-gray2">
          <TableColumn className="text-gray dark:text-white">
            Event Name
          </TableColumn>
          <TableColumn className="text-gray dark:text-white">Date</TableColumn>
          <TableColumn className="text-gray dark:text-white">
            Speaker
          </TableColumn>
          <TableColumn className="text-gray dark:text-white">
            Status
          </TableColumn>
        </TableHeader>

        <TableBody
          emptyContent={
            loading ? (
              <div className="flex justify-center items-center">
                <Spinner size="sm" />
              </div>
            ) : (
              <p className="tex-xl text-black dark:text-white">
                No Events Found
              </p>
            )
          }
        >
          {currentRows.map((events, index) => (
            <TableRow key={index}>
              <TableCell className="text-gray dark:text-white">
                {events.eventName}
              </TableCell>
              <TableCell className="text-gray dark:text-white">
                {events.date}
              </TableCell>
              <TableCell className="text-gray dark:text-white">
                {events.speaker}
              </TableCell>
              <TableCell className="text-gray dark:text-white">
                <Chip size="md" className={`text-xs font-medium ${events.status === "Completed" ? "text-green bg-greenLight" : "text-blue bg-blueLight"}`} startContent={<GoDotFill/>}>
                  <span> {events.status}</span>
                </Chip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
