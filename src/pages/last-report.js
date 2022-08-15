import {Box, Card, Typography, Divider, Grid} from '@mui/material';
import { Fragment, useEffect, useState } from 'react';
import { getLastReport } from '../../services/index';

const LastReport = () => {
    const [report, setReport] = useState({});
    console.log(report.length);
    useEffect(()=>{
        getReport();
    },[]);

    const getReport = async () => {
        try {
            const fileName = window.localStorage.getItem('fileName');
            const lastReport = await getLastReport(fileName);
            console.log(lastReport);
            setReport(lastReport);
        } catch(error) {
            console.log(error);
        }
    }

    const renderCard = (report) => {
        return (
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
        );
    }
    
    return (
        <Fragment>
            {report?.vehicleDetails &&
                renderCard(report)
            }
            {Object.keys(report).length === 0 && (
                <Box 
                    sx={{ width: '100%' }}
                    display="flex" 
                    alignItems="center"
                    justifyContent="center"
                >
                    <Typography variant="h6" component="div" gutterBottom>
                        There is no reported damage.
                    </Typography>
                </Box>
            )}
        </Fragment>
    );
}

export default LastReport;