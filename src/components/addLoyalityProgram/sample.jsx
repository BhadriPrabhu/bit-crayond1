import React, { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { Box, Button, IconButton, InputAdornment, Radio, RadioGroup, Switch, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import ItemsColorPicker from './itemsColorPicker';
import Upload from '../icon/upload';
import CategoryColorPicker from './categoryColorPicker';
import SpecificItems from './specificItems';
import { SpecificCategory } from './specificCategory';
import Delete from '../icon/delete';
import { FormControl, FormControlLabel } from '@mui/material';
import Calender from '../icon/calender';

const RightSideGrid = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [uploadedFile, setUploadedFile] = useState(null);
    const [selectedOption, setSelectedOption] = useState("Specific category");


    const handleOptionChange = (event) => setSelectedOption(event.target.value);

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });

    const handleFileChange = (event) => {
        const files = event.target.files;
        if (files.length > 0) {
            const file = files[0];
            if (file.size > 3 * 1024 * 1024) {
                alert("File size exceeds 3MB.");
                return;
            }
            if (!['image/jpeg', 'image/png'].includes(file.type)) {
                alert("Only JPG and PNG files are allowed.");
                return;
            }
            setUploadedFile(file);
        }
    };

    const handleRemoveFile = () => setUploadedFile(null);

    const getFileSizeInKb = (file) => (file.size / 1024).toFixed(2);

    return (
        <>
            <Box sx={{ backgroundColor: "white", borderRadius: "8px", overflow: "hidden" }}>
                <Box sx={{ padding: "20px", display: "flex", flexDirection: "column", gap: "15px" }}>
                    <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>Program configuration</Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Box sx={{ display: "flex", gap: "20px", width: "100%", marginTop: "20px" }}>
                            <DatePicker
                                label="Start Date"
                                value={startDate}
                                onChange={(newValue) => setStartDate(newValue)}
                                sx={{ flex: "1" }}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        variant="filled"
                                        InputProps={{
                                            ...params.InputProps,
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <Calender style={{ color: "#4E585E" }} />
                                                </InputAdornment>
                                            ),
                                        }}
                                        sx={{
                                            '& .MuiFilledInput-root': { backgroundColor: 'transparent', borderRadius: '8px' },
                                        }}
                                    />
                                )}
                            />

                            <DatePicker
                                label="End Date"
                                value={endDate}
                                onChange={(newValue) => setEndDate(newValue)}
                                sx={{ flex: 1 }}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        variant="filled"
                                        InputProps={{
                                            ...params.InputProps,
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <Calender style={{ color: "#4E585E" }} />
                                                </InputAdornment>
                                            ),
                                        }}
                                        sx={{
                                            '& .MuiFilledInput-root': { backgroundColor: 'transparent', borderRadius: '8px' },
                                        }}
                                    />
                                )}
                            />
                        </Box>
                    </LocalizationProvider>
                    <Box>
                        <Typography>Program image</Typography>
                        {!uploadedFile ? (
                            <Box sx={{
                                display: "flex",
                                width: '425px',
                                height: '200px',
                                flexDirection: "column",
                                gap: "10px",
                                border: "2.5px dashed rgb(229, 232, 235)",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: "8px",
                                padding: "15px",
                                marginTop: "15px"
                            }}>
                                <Typography sx={{ color: "rgb(78, 88, 94)" }}>Drag & drop file here</Typography>
                                <Typography sx={{ color: "rgb(229, 232, 235)", display: "flex", gap: "5px" }}>
                                    - <span style={{ color: "rgb(103, 112, 117)" }}>OR</span> -
                                </Typography>
                                <Button
                                    component="label"
                                    role={undefined}
                                    variant="contained"
                                    tabIndex={-1}
                                    startIcon={<Upload />}
                                    sx={{
                                        bgcolor: "rgb(255, 236, 218)",
                                        color: "rgb(255, 160, 72)",
                                        boxShadow: "none",
                                        '&:hover': {
                                            boxShadow: "none",
                                        },
                                        '&:active': {
                                            border: "none",
                                        },
                                    }}
                                >
                                    <span style={{ paddingTop: "3px" }}>Upload</span>
                                    <VisuallyHiddenInput
                                        type="file"
                                        onChange={handleFileChange}
                                        multiple
                                    />
                                </Button>
                                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                    <Typography sx={{ color: "rgb(106, 113, 117)" }}>JPG, PNG only</Typography>
                                    <Typography sx={{ color: "rgb(106, 113, 117)" }}>Max file size - 3MB</Typography>
                                </Box>
                            </Box>
                        ) : (
                            <Box sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                padding: "10px",
                                border: "1px solid rgb(229, 232, 235)",
                                borderRadius: "8px",
                                backgroundColor: "rgb(240, 243, 246)",
                                maxWidth: "425px",
                                height: 'auto',
                            }}>
                                <Typography
                                    sx={{ color: "rgb(78, 88, 94)", cursor: "pointer" }}
                                    onClick={() => window.open(URL.createObjectURL(uploadedFile), "_blank")}
                                >
                                    {uploadedFile.name} ({getFileSizeInKb(uploadedFile)} KB)
                                </Typography>
                                <IconButton onClick={handleRemoveFile} sx={{ color: "red" }}>
                                    <Delete />
                                </IconButton>
                            </Box>
                        )}
                    </Box>
                    <TextField
                        sx={{
                            "& .MuiFilledInput-root": {
                                backgroundColor: "transparent",
                            },
                            "& .MuiFilledInput-underline:before": {
                                borderBottom: "none",
                            },
                            "& .MuiFilledInput-root:hover:not(.Mui-disabled):before": {
                                borderBottom: "none",
                            },
                            "& .MuiFilledInput-underline:after": {
                                borderBottom: "none",
                            },
                            "& .MuiInputLabel-root.Mui-focused": {
                                color: "#4E585E",
                            },
                            "& .MuiFilledInput-root": {
                                backgroundColor: "transparent",
                                borderRadius: "8px",
                                "&:hover": {
                                    backgroundColor: "white",
                                }
                            },
                            border: '1px solid',
                            borderColor: '#D9DBDD',
                            borderRadius: 1.5,
                            color: '#000'
                        }}
                        variant="filled"
                        label="Program title"
                    />
                    <TextField
                        sx={{
                            "& .MuiFilledInput-root": {
                                backgroundColor: "transparent",
                            },
                            "& .MuiFilledInput-underline:before": {
                                borderBottom: "none",
                            },
                            "& .MuiFilledInput-root:hover:not(.Mui-disabled):before": {
                                borderBottom: "none",
                            },
                            "& .MuiFilledInput-underline:after": {
                                borderBottom: "none",
                            },
                            "& .MuiInputLabel-root.Mui-focused": {
                                color: "#4E585E",
                            },
                            "& .MuiFilledInput-root": {
                                backgroundColor: "transparent",
                                borderRadius: "8px",
                                "&:hover": {
                                    backgroundColor: "white",
                                }
                            },
                            border: '1px solid',
                            borderColor: '#D9DBDD',
                            borderRadius: 1.5,
                            color: '#000'
                        }}
                        variant="filled"
                        label="Program description"
                    />
                    <TextField
                        sx={{
                            "& .MuiFilledInput-root": {
                                backgroundColor: "transparent",
                            },
                            "& .MuiFilledInput-underline:before": {
                                borderBottom: "none",
                            },
                            "& .MuiFilledInput-root:hover:not(.Mui-disabled):before": {
                                borderBottom: "none",
                            },
                            "& .MuiFilledInput-underline:after": {
                                borderBottom: "none",
                            },
                            "& .MuiInputLabel-root.Mui-focused": {
                                color: "#4E585E",
                            },
                            "& .MuiFilledInput-root": {
                                backgroundColor: "transparent",
                                borderRadius: "8px",
                                "&:hover": {
                                    backgroundColor: "white",
                                }
                            },
                            border: '1px solid',
                            borderColor: '#D9DBDD',
                            borderRadius: 1.5,
                            color: '#000'
                        }
                        }
                        variant="filled"
                        label="Offer code"
                    />
                    <Box sx={{ padding: "10px 25px" }}>
                        <Typography sx={{ fontSize: "small", color: "rgb(78, 88, 94)" }}>Applicable stores</Typography>
                        <Box sx={{ display: "flex", padding: "10px 0px", position: "relative" }}><Typography>Arabian Night Crest - Flamingo Mall</Typography><Switch sx={{ position: "absolute", right: "20px", '& .MuiSwitch-switchBase.Mui-checked': { color: 'rgb(255, 160, 72)' }, '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': { bgcolor: 'rgb(255, 160, 72)' } }}></Switch>  </Box>
                        <Box sx={{ display: "flex", position: "relative", paddingBottom: "10px" }}><Typography>Arabian Night Crest - Sahara Mall</Typography><Switch sx={{ position: "absolute", right: "20px", '& .MuiSwitch-switchBase.Mui-checked': { color: 'rgb(255, 160, 72)' }, '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': { bgcolor: 'rgb(255, 160, 72)' } }}></Switch>  </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ bgcolor: "white", padding: "25px", marginTop: "30px", borderRadius: "8px" }}>
                <Typography sx={{ fontWeight: "bold", fontSize: "18px", paddingBottom: "10px" }}>Item configuration</Typography>
                <Box sx={{ display: "flex", alignItems: "center", position: "relative" }}>
                    <Typography>Customer needs to purchase</Typography>
                    <FormControl sx={{ position: "absolute", right: "5px" }}>
                        <RadioGroup row value={selectedOption} onChange={handleOptionChange} >
                            <FormControlLabel value="Specific category" control={<Radio sx={{
                                '&.Mui-checked': {
                                    color: "rgb(255, 160, 72)",
                                },
                                '&.MuiRadio-colorPrimary.Mui-checked': {
                                    color: "rgb(255, 160, 72)",
                                },
                            }}></Radio>} label="Specific category" />
                            <FormControlLabel value="Specific items" control={<Radio sx={{
                                '&.Mui-checked': {
                                    color: "rgb(255, 160, 72)",
                                },
                                '&.MuiRadio-colorPrimary.Mui-checked': {
                                    color: "rgb(255, 160, 72)",
                                },
                            }} />} label="Specific items" />
                        </RadioGroup>
                    </FormControl>
                </Box>
                {selectedOption === "Specific category" && (
                    <SpecificCategory></SpecificCategory>
                )}
                {selectedOption === "Specific items" && (
                    <SpecificItems></SpecificItems>
                )}
            </Box>
            <Box>
                {selectedOption === "Specific category" && (
                    <CategoryColorPicker />

                )}
                {selectedOption === "Specific items" && (
                    <ItemsColorPicker />
                )}
            </Box>
        </>
    );
};

export default RightSideGrid; 