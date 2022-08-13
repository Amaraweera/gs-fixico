import {Box, List, ListItem, ListItemText, Divider, Grid, ImageList, ImageListItem} from '@mui/material';

const Confirmation = (props) => {
    const {reportDetails} = props;
    const {vehicleDetails, customerDetails, descriptionAndImage} = reportDetails;

    return (
        <Grid container xs={12}>
            <Grid item xs={4}>
                <List
                    sx={{
                        width: '100%',
                        maxWidth: 360,
                        bgcolor: 'background.paper',
                    }}
                >
                    <ListItem>
                        <ListItemText primary="Vehicle Number" secondary={vehicleDetails.vehicleNumber}/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Chassis Number" secondary={vehicleDetails.chassisNumber} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Model" secondary={vehicleDetails.model} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Type" secondary={vehicleDetails.type} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Color" secondary={vehicleDetails.color} />
                    </ListItem>
                    {/* <Divider component="li" /> */}
                </List>
            </Grid>
            <Grid item xs={4}>
                <List
                    sx={{
                        width: '100%',
                        maxWidth: 360,
                        bgcolor: 'background.paper',
                    }}
                >
                    <ListItem>
                        <ListItemText primary="First Name" secondary={customerDetails.firstName} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Last Name" secondary={customerDetails.lastName} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="NIC" secondary={customerDetails.nic} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Address" secondary={customerDetails.address} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Mobile Number" secondary={customerDetails.mobileNumber} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Email" secondary={customerDetails.email} />
                    </ListItem>
                    {/* <Divider component="li" /> */}
                </List>
            </Grid>
            <Grid item xs={4}>
                <Box
                    sx={{
                        // width: 300,
                        height: 300,
                        m: 1
                    }}
                >   
                    {descriptionAndImage.image .url &&
                        <ImageList>
                            <ImageListItem>
                                <img
                                    src={`${descriptionAndImage.image.url}?w=164&h=164&fit=crop&auto=format`}
                                    srcSet={`${descriptionAndImage.image.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    height='100%'
                                    alt={'Damage Image'}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        </ImageList>
                    }
                    <List
                        sx={{
                            width: '100%',
                            maxWidth: 360,
                            bgcolor: 'background.paper',
                        }}
                    >
                        <ListItem>
                            <ListItemText primary="Description" secondary={descriptionAndImage.description} />
                        </ListItem>
                    </List>
                </Box>
            </Grid>
        </Grid>
    );
}

const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
};

export default Confirmation;