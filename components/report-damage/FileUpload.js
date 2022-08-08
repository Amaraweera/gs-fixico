import {Box, Button, TextField} from '@mui/material';

const FileUpload = (props) => {
    const {fileUpload, setDescription, reportDetails, formValidation} = props;
    const {descriptionAndImage} = reportDetails;

    return (
        <Box
            component="form"
            sx={{
                '& .MuiButton-root': { m: 1, width: '91ch', justifyContent: 'center' },
                '& .MuiTextField-root': { m: 1, width: '91ch' },
                mt: 5,
                ml: 50
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <Button
                    variant="contained"
                    component="label"
                >
                    Upload File
                    <input
                        onChange={fileUpload}
                        type="file"
                        name="image"
                        hidden
                        accept='image/*'
                    />
                </Button>
                {descriptionAndImage?.image?.url &&
                    <Box
                        sx={{
                            width: 300,
                            height: 300,
                            m: 1
                        }}
                    >
                        <img
                            src={`${descriptionAndImage.image.url}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${descriptionAndImage.image.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            height='100%'
                            alt={'Damage Image'}
                            loading="lazy"
                        />
                    </Box>
                }
            </div>
            <div>
                <TextField
                    error={formValidation.descriptionAndImage.description}
                    id="description"
                    name="description"
                    label="Description"
                    multiline
                    rows={4}
                    style={{ width: 800 }}
                    value={descriptionAndImage.description}
                    onChange={(e) => setDescription(e.target)}
                />
            </div>
        </Box>
    );
}
  
export default FileUpload;