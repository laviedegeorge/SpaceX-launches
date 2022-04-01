import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { TableContainer } from "@mui/material";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

interface launchData {
  id: string;
  nameOfMssion: string;
  nameOfRocket: string;
  nameOfCompany: string;
  massOfRocket: number;
  launchSite: string;
  launchDate: string;
}

const LaunchTables = ({ tableData }: { tableData: launchData[] }) => {
  return (
    <TableContainer>
      <Table sx={{ maxWidth: "1240px" }} aria-label="Space X launch table">
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
          {tableData.map((row) => (
            <TableRow
              key={row.id}
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
