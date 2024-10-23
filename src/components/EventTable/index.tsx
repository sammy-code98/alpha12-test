import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import { tableData } from "./data";
import TablePagination from "../TablePagination";

export default function EventTable(): JSX.Element {
  return (
    <div className="w-full px-2 py-3 overflow-x-auto">
      <Table
        radius="none"
        removeWrapper={true}
        aria-label="event-table"
        bottomContent={
          <div className="flex w-full justify-center">
            <TablePagination />
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
        <TableBody>
          {tableData.map((events, index) => (
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
                {events.status}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
