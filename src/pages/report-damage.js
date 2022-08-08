import * as React from 'react';
import { useRouter } from 'next/router'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import VehicleDetails from "../../components/report-damage/VehicleDetails";
import CustomerDetails from '../../components/report-damage/CustomerDetails';
import FileUpload from '../../components/report-damage/FileUpload';
import Confirmation from '../../components/report-damage/Confirmation';
import vehicleNames from '../vehicles.json';
import { uploadFile, submitReport } from '../../services/index';

const steps = ['Vehicle Details', 'Customer Details', 'Upload Image', 'Confirm Details'];

const ReportDamage = () => {
    const router = useRouter();

    const initReportDetails = {
        vehicleDetails: {
            vehicleNumber: '',
            chassisNumber: '',
            model: '',
            manifactureYear: '',
            type: '',
            color: ''
        },
        customerDetails: {
            firstName: '',
            lastName: '',
            nic: '',
            address:'',
            mobileNumber: '',
            email: '',
        },
        descriptionAndImage: {
            description: '',
            image: {}
        }
    };

    const initValidation = {
        vehicleDetails: {
            vehicleNumber: false,
            chassisNumber: false,
            model: false,
            manifactureYear: false,
            type: false,
            color: false
        },
        customerDetails: {
            firstName: false,
            lastName: false,
            nic: false,
            address: false,
            mobileNumber: false,
            email: false,
        },
        descriptionAndImage: {
            description: false,
            image: false
        }
    };

    const [reportDetails, setReportDetails] = React.useState(initReportDetails);
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const [selectedVehicleModel, setSelectedVehicleModel] = React.useState([]);
    const [formValidation, setFormValidation] = React.useState(initValidation);

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = async () => {
        let newSkipped = skipped;
        let sectionName = '';

        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        switch (activeStep) {
            case 0:
                sectionName = 'vehicleDetails';
                break;
            case 1:
                sectionName = 'customerDetails';
                break;
            case 2:
                sectionName = 'descriptionAndImage';
                break;
            default:
                sectionName = null;
                break;
        }
        
        if (activeStep + 1 === steps.length) {
            // Submit report
            const res = await submitReport(reportDetails);

            if (res) {
                window.localStorage.setItem('fileName', res.uuid);
                setActiveStep((prevActiveStep) => prevActiveStep + 1);
            }
        } else {
            setActiveStep((prevActiveStep) => isValidationFailed(sectionName) ? prevActiveStep + 1 : prevActiveStep);
        }
        
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const navigateToReport = () => {
        router.push('/last-report');
    };

    const setVehicleDetails  = (event) => {
        const {name, value} = event;

        setReportDetails({
            ...reportDetails,
            vehicleDetails: {
                ...reportDetails.vehicleDetails,
                [name]: value
            }
        });

        setFormValidation({
            ...formValidation,
            vehicleDetails: {
                ...formValidation.vehicleDetails,
                [name]: value === '' ? true : false
            }
        });
    }

    const setCustomerDetails  = (event) => {
        const {name, value} = event;

        setReportDetails({
            ...reportDetails,
            customerDetails: {
                ...reportDetails.customerDetails,
                [name]: value
            }
        });

        let isValid = value === '' ? true : false

        if (name === 'email' && !validateEmail(value)) {
            console.log('email validation',!validateEmail(value));
            isValid = false;
        }

        setFormValidation({
            ...formValidation,
            customerDetails: {
                ...formValidation.customerDetails,
                [name]: isValid
            }
        });
    }

    const fileUpload = async (event) => {
        const uploadedImage = await uploadFile(event.target.files[0]);

        setReportDetails({
            ...reportDetails,
            descriptionAndImage: {
                ...reportDetails.descriptionAndImage,
                image: uploadedImage,
            }
        });

        setFormValidation({
            ...formValidation,
            descriptionAndImage: {
                ...formValidation.descriptionAndImage,
                image: uploadedImage ? true : false
            }
        });
    }

    const setDescription = (event) => {
        const {value} = event;

        setReportDetails({
            ...reportDetails,
            descriptionAndImage: {
                ...reportDetails.descriptionAndImage,
                description: value,
            }
        });

        setFormValidation({
            ...formValidation,
            descriptionAndImage: {
                ...formValidation.descriptionAndImage,
                description: value === '' ? true : false
            }
        });
    }

    const isValidationFailed = (section) => {
        const validateFields = reportDetails[section];
        let validatedFields = {};
        let isValidateField = true;
        let isValidationFail = false;
    
        Object.keys(validateFields).map((field) => {
            isValidationFail = validateFields[field] === '' ? true : false;

            if (isValidationFail === true) {
                isValidateField =  false;
            }
        
            validatedFields = {
                ...formValidation,
                [section]: {
                    ...validatedFields[section],
                    [field]: isValidationFail
                }
            }
        });

        setFormValidation(validatedFields);
        return isValidateField;
    }

    const selectedModel = (event) => {
        setVehicleDetails(event)
        const {value} = event;

        const selectedVehicle = vehicleNames.find(vehicle => vehicle.name === value);

        setSelectedVehicleModel(selectedVehicle);
    }

    const validateEmail = (mail) => {
        console.log(mail);
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            return false;
        } else {
            return true;
        }
    }


    return  <Box sx={{ width: '100%' }}>
                <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};

                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={label} {...stepProps}>
                        <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
                </Stepper>
                {activeStep === steps.length ? (
                    <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        Your damaged report has been saved.
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={navigateToReport}>View My Report</Button>
                    </Box>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                    {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
                    {activeStep === 0 &&
                        <VehicleDetails
                            reportDetails={reportDetails}
                            setVehicleDetails={setVehicleDetails}
                            vehicleNames={vehicleNames}
                            selectedVehicleModel={selectedVehicleModel}
                            selectedModel={selectedModel}
                            formValidation={formValidation}
                        />
                    }
                    {activeStep === 1 &&
                        <CustomerDetails
                            reportDetails={reportDetails}
                            setCustomerDetails={setCustomerDetails}
                            formValidation={formValidation}
                        />
                    }
                    {activeStep === 2 &&
                        <FileUpload
                            fileUpload={fileUpload}
                            reportDetails={reportDetails}
                            setDescription={setDescription}
                            formValidation={formValidation}
                        />
                    }
                    {activeStep === 3 &&
                        <Confirmation reportDetails={reportDetails}/>
                    }
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                        color="inherit"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        sx={{ mr: 1 }}
                        >
                        Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />

                        <Button onClick={handleNext}>
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </Box>
                    </React.Fragment>
                )}
            </Box>
}
  
export default ReportDamage;