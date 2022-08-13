import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import PhotoIcon from '@mui/icons-material/Photo';
import ImageViewer from 'react-simple-image-viewer';
import React from 'react';

const DataTable = (props) => {
    const {headers, data} = props;
    const [images, setImages] = React.useState([]);
    const [openImageView, setOpenImageView] = React.useState(false);

    const viewImage = (image) => {
        setImages([image]);
        setOpenImageView(true);
    }

    const closeImageViewer = () => {
        setOpenImageView(false);
    }

    const renderTableRow = (report, index) => {
        return (
            <TableRow
                key={index}
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
                <TableCell align="left">
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => viewImage(report.descriptionAndImage.image.url)}
                    >
                        <PhotoIcon />
                    </IconButton>
                </TableCell>
            </TableRow>
        );
    }

    const renderDataNotFound = () => {
        return (
            <TableRow
                key={0}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell colSpan={6} align='center'>Data Not Found</TableCell>
            </TableRow>
        );
    }

    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {headers.map((header, index) =>
                            <TableCell key={index} align="left"><b>{header}</b></TableCell>
                        )}
                    </TableRow>
                </TableHead>
                <TableBody>   
                    {data?.map((report, index) =>
                        renderTableRow(report, index)
                    )}
                    {!data.length &&
                        renderDataNotFound()
                    }
                </TableBody>
            </Table>
            {openImageView && (
                <ImageViewer
                    src={ images }
                    currentIndex={ 0 }
                    disableScroll={ false }
                    closeOnClickOutside={ true }
                    onClose={ closeImageViewer }
                />
            )}
        </TableContainer>
    );
}

export default DataTable;