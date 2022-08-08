import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Fragment } from 'react';

const DataTable = (props) => {
    const {headers, data} = props;

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {headers.map((header, index) =>
                            <TableCell key={index} align="left"><b>{header}</b></TableCell>
                        )}
                    </TableRow>
                </TableHead>
                <TableBody>   
                    {data?.map(report =>
                        <TableRow
                            key={1}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" align="left">
                                {report.vehicleDetails.vehicleNumber}
                            </TableCell>
                            <TableCell align="left">
                                {report.vehicleDetails.chassisNumber}
                            </TableCell>
                            <TableCell align="left">
                                {report.customerDetails.firstName} {report.customerDetails.lastName}
                            </TableCell>
                            <TableCell align="left">
                                {report.customerDetails.mobileNumber}
                            </TableCell>
                            <TableCell align="left">
                                {report.descriptionAndImage.description}
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default DataTable;