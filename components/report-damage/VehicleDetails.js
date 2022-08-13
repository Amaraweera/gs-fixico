import {Box, TextField, Select, FormControl, InputLabel, MenuItem, Grid} from '@mui/material';


const VehicleDetails = (props) => {
    const {
        reportDetails,
        setVehicleDetails,
        vehicleNames,
        selectedVehicleModel,
        selectedModel,
        formValidation
    } = props;
    const {vehicleDetails} = reportDetails;

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1},
                mt: 5,
                mb: 5,
                ml: 3,
                mr: 3 
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    error={formValidation.vehicleDetails.vehicleNumber}
                    required
                    id="vehicle-number"
                    name="vehicleNumber"
                    label="Vehicle Number"
                    value={vehicleDetails.vehicleNumber}
                    onChange={(e) => setVehicleDetails(e.target)}
                    fullWidth
                />
                <TextField
                    error={formValidation.vehicleDetails.chassisNumber}
                    required
                    id="chassis-number"
                    name="chassisNumber"
                    label="Chassis Number"
                    value={vehicleDetails.chassisNumber}
                    onChange={(e) => setVehicleDetails(e.target)}
                    fullWidth
                />
            </div>
            <div>
                <FormControl fullWidth sx={{ m: 1}}>
                    <InputLabel id="vehicle-model">Model</InputLabel>
                    <Select
                        error={formValidation.vehicleDetails.model}
                        required
                        labelId="vehicle-model"
                        id="model"
                        name="model"
                        value={vehicleDetails.model}
                        label="Model"
                        onChange={(e) => selectedModel(e.target)}
                    >
                    {vehicleNames.map((vehicle, index) => 
                        <MenuItem key={index} value={vehicle.name}>{vehicle.name}</MenuItem>
                    )}
                    </Select>
                </FormControl>
                <FormControl fullWidth sx={{ m: 1}}>
                    <InputLabel id="vehicle-type">Type</InputLabel>
                    <Select
                        error={formValidation.vehicleDetails.type}
                        required
                        labelId="vehicle-type"
                        id="type"
                        name="type"
                        value={vehicleDetails.type}
                        label="Type"
                        onChange={(e) => setVehicleDetails(e.target)}
                    >
                    {selectedVehicleModel?.models?.map((model, index) =>
                         <MenuItem key={index} value={model.name}>{model.name}</MenuItem>
                    )}
                    </Select>
                </FormControl>
            </div>
            <div>
                <TextField
                    error={formValidation.vehicleDetails.manifactureYear}
                    required
                    id="manifacture-year"
                    name="manifactureYear"
                    label="Manifacture Year"
                    value={vehicleDetails.manifactureYear}
                    onChange={(e) => setVehicleDetails(e.target)}
                    fullWidth
                />
                <TextField
                    error={formValidation.vehicleDetails.color}
                    required
                    id="color"
                    name="color"
                    label="Color"
                    value={vehicleDetails.color}
                    onChange={(e) => setVehicleDetails(e.target)}
                    fullWidth
                />
            </div>
        </Box>
    );
}
  
export default VehicleDetails;