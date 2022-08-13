import {Box, Card, Typography, Divider, Grid} from '@mui/material';
import { Fragment, useEffect, useState } from 'react';
import { getLastReport } from '../../services/index';

const LastReport = (props) => {
    const [report, setReport] = useState({});

    useEffect(()=>{
        getReport();
    },[]);

    const getReport = async () => {
        const fileName = window.localStorage.getItem('fileName');
        const lastReport = await getLastReport(fileName);
        console.log(lastReport);
        setReport(lastReport);
    }
    
    return (
        <Fragment>
            {report?.vehicleDetails &&
                <Grid container item xs={12}>
                    <Grid item xs={4}>
                        <Box>
                            <Card sx={{ m: 1 }} variant="outlined">
                                <Typography sx={{m:1 }} color="text.secondary">
                                    Vehicle Number
                                </Typography>
                                <Typography sx={{m:1 }} variant="body2">
                                    {report.vehicleDetails.vehicleNumber}
                                </Typography>
                                <Divider/>
                                <Typography sx={{m:1 }} color="text.secondary">
                                    Chassis Number
                                </Typography>
                                <Typography sx={{m:1 }} variant="body2">
                                    {report.vehicleDetails.chassisNumber}
                                </Typography>
                                <Divider/>
                                <Typography sx={{m:1 }} color="text.secondary">
                                    Model
                                </Typography>
                                <Typography sx={{m:1 }} variant="body2">
                                    {report.vehicleDetails.model}
                                </Typography>
                                <Divider/>
                                <Typography sx={{m:1 }} color="text.secondary">
                                    Type
                                </Typography>
                                <Typography sx={{m:1 }} variant="body2">
                                    {report.vehicleDetails.type}
                                </Typography>
                            </Card>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box>
                            <Card sx={{ m: 1 }} variant="outlined">
                                <Typography sx={{m:1 }} color="text.secondary">
                                    Name
                                </Typography>
                                <Typography sx={{m:1 }} variant="body2">
                                    {report.customerDetails.firstName} {report.customerDetails.lastName}
                                </Typography>
                                <Divider/>
                                <Typography sx={{m:1 }} color="text.secondary">
                                    NIC
                                </Typography>
                                <Typography sx={{m:1 }} variant="body2">
                                    {report.customerDetails.nic} 
                                </Typography>
                                <Divider/>
                                <Typography sx={{m:1 }} color="text.secondary">
                                    Address
                                </Typography>
                                <Typography sx={{m:1 }} variant="body2">
                                    {report.customerDetails.address} 
                                </Typography>
                                <Divider/>
                                <Typography sx={{m:1 }} color="text.secondary">
                                    Phone Number
                                </Typography>
                                <Typography sx={{m:1 }} variant="body2">
                                    {report.customerDetails.mobileNumber} 
                                </Typography>
                                <Divider/>
                                <Typography sx={{m:1 }} color="text.secondary">
                                    Email
                                </Typography>
                                <Typography sx={{m:1 }} variant="body2">
                                    {report.customerDetails.email} 
                                </Typography>
                            </Card>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box>
                            <Card sx={{ m: 1 }} variant="outlined">
                                <Typography sx={{m:1 }} color="text.secondary">
                                    Description
                                </Typography>
                                <Typography sx={{m:1 }} variant="body2">
                                    {report.descriptionAndImage.description} 
                                </Typography>
                                <Divider/>
                                {report.descriptionAndImage.image.url &&
                                    <img
                                        src={`${report.descriptionAndImage.image.url}?w=164&h=164&fit=crop&auto=format`}
                                        srcSet={`${report.descriptionAndImage.image.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                        height='100'
                                        alt={'Damage Image'}
                                        loading="lazy"
                                    />
                                }
                            </Card>
                        </Box>
                    </Grid>
                </Grid>
            }
        </Fragment>
    );
}

export default LastReport;