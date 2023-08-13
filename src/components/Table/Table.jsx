import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.css'

function createData(name, storageNumber, size, balance, payment) {
  return { name, storageNumber, size, balance, payment };
}

const rows = [
  createData("Zain Carpenter", "324B", "5 x 10", "$120.00", "Card"),
  createData("Greta Watson", "11A", "5 x 5", "$40.00", "Check"),
  createData("Gabriela Waters", "47C", "5 x 10", "$15.00", "Cash"),
  createData("Steffan Jarvis", "1132B", "5 x 10", "$145.00", "Card"),
];

export default function BasicTable() {
  return (
    <div className="Table">
      <h3>Current Units</h3>
      <TableContainer className = "mytable" component={Paper}
      style = {{boxShadow: '0px 13px 20px 0px #80808029'}}
      
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Tenant</TableCell>
              <TableCell align="left">Unit Number</TableCell>
              <TableCell align="left">Unit Size</TableCell>
              <TableCell align="left">Current Balance</TableCell>
              <TableCell align="left">Last Payment Method</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.storageNumber}</TableCell>
                <TableCell align="left">{row.size}</TableCell>
                <TableCell align="left">{row.balance}</TableCell>
                <TableCell align="left">{row.payment}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}