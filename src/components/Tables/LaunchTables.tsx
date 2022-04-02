import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { TableContainer } from "@mui/material";
import { LaunchTableData } from "../../libs/types";

const LaunchTables = ({ tableData }: { tableData: LaunchTableData[] }) => {
  return (
    <TableContainer>
      <Table
        className="max-w-[250px] md:max-w-full xl:max-w-screen-lg overflow-x-auto"
        aria-label="Space X launch table"
      >
        <TableHead>
          <TableRow>
            {[
              "MISSION NAME",
              "ROCKET NAME",
              "COMPANY",
              "ROCKET MASS (Kg)",
              "LAUNCH SITE",
              "LAUNCH DATE",
            ].map((text, idx) => {
              return <TableCell key={idx}>{text}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row, idx) => (
            <TableRow
              key={idx}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.nameOfMssion}
              </TableCell>
              <TableCell>{row.nameOfRocket}</TableCell>
              <TableCell>{row.nameOfCompany}</TableCell>
              <TableCell>{row.massOfRocket}</TableCell>
              <TableCell>{row.launchSite}</TableCell>
              <TableCell>{row.launchDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LaunchTables;
