import {Box, TextField} from '@mui/material';

const CustomerDetails = (props) => {
    const {reportDetails, setCustomerDetails, formValidation} = props;
    const {customerDetails} = reportDetails;
    
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '91ch' },
                mt: 5
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    error={formValidation.customerDetails.firstName}
                    required
                    id="first-name"
                    label="First Name"
                    name="firstName"
                    value={customerDetails.firstName}
                    onChange={(e) => setCustomerDetails(e.target)}
                />
                <TextField
                    error={formValidation.customerDetails.lastName}
                    required
                    id="last-name"
                    label="Last Name"
                    name="lastName"
                    value={customerDetails.lastName}
                    onChange={(e) => setCustomerDetails(e.target)}
                />
            </div>
            <div>
                <TextField
                    error={formValidation.customerDetails.nic}
                    required
                    id="nic"
                    label="NIC"
                    name="nic"
                    value={customerDetails.nic}
                    onChange={(e) => setCustomerDetails(e.target)}
                />
                <TextField
                    error={formValidation.customerDetails.address}
                    required
                    id="address"
                    label="address"
                    name="address"
                    value={customerDetails.address}
                    onChange={(e) => setCustomerDetails(e.target)}
                />
            </div>
            <div>
                <TextField
                    error={formValidation.customerDetails.mobileNumber}
                    required
                    id="mobile-number"
                    label="Mobile Number"
                    name="mobileNumber"
                    value={customerDetails.mobileNumber}
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                    type="number"
                    autoComplete="phone"
                    onChange={(e) => setCustomerDetails(e.target)}
                />
                <TextField
                    error={formValidation.customerDetails.email}
                    required
                    id="email"
                    label="Email"
                    name="email"
                    value={customerDetails.email}
                    autoComplete="email"
                    onChange={(e) => setCustomerDetails(e.target)}
                />
            </div>
        </Box>
    );
}
  
export default CustomerDetails;