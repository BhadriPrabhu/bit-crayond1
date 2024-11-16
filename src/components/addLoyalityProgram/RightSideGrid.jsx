import React, { useState, useRef, useEffect } from 'react';
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { Box, IconButton, InputAdornment, TextField, Typography, Button, Radio, RadioGroup, FormControl, FormControlLabel, Switch } from '@mui/material';
import { styled } from '@mui/material/styles';
import ItemsColorPicker from './itemsColorPicker';
import Upload from '../icon/upload';
import CategoryColorPicker from './categoryColorPicker';
import SpecificItems from './specificItems';
import { SpecificCategory } from './specificCategory';
import Delete from '../icon/delete';
import Calender from '../icon/calender';
import stylesRightGrid from './stylesRightgrid';
import AllSwitches from '../icon/switch';

const RightSideGrid = () => {
  const [startDate, setStartDate] = useState(null);
  const [startDateDisplay, setStartDateDisplay] = useState("");
  const [endDate, setEndDate] = useState(null);
  const [endDateDisplay, setEndDateDisplay] = useState("");
  const [isStartCalendarOpen, setIsStartCalendarOpen] = useState(false);
  const [isEndCalendarOpen, setIsEndCalendarOpen] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [selectedOption, setSelectedOption] = useState("Specific category");

  const startCalendarRef = useRef(null);
  const endCalendarRef = useRef(null);

  const dateFormat = "MM/DD/YYYY";

  const handleOptionChange = (event) => setSelectedOption(event.target.value);

  const handleStartDateChange = (newValue) => {
    if (newValue) {
      setStartDate(newValue);
      setStartDateDisplay(newValue.format(dateFormat));
      setIsStartCalendarOpen(false);
    }
  };

  const handleEndDateChange = (newValue) => {
    if (newValue) {
      setEndDate(newValue);
      setEndDateDisplay(newValue.format(dateFormat));
      setIsEndCalendarOpen(false);
    }
  };

  const handleStartTextFieldChange = (event) => {
    const input = event.target.value;
    setStartDateDisplay(input);
    const parsedDate = dayjs(input, dateFormat, true);
    if (parsedDate.isValid()) {
      setStartDate(parsedDate);
    }
  };

  const handleEndTextFieldChange = (event) => {
    const input = event.target.value;
    setEndDateDisplay(input);
    const parsedDate = dayjs(input, dateFormat, true);
    if (parsedDate.isValid()) {
      setEndDate(parsedDate);
    }
  };

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isStartCalendarOpen && startCalendarRef.current && !startCalendarRef.current.contains(event.target)) {
        setIsStartCalendarOpen(false);
      }
      if (isEndCalendarOpen && endCalendarRef.current && !endCalendarRef.current.contains(event.target)) {
        setIsEndCalendarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isStartCalendarOpen, isEndCalendarOpen]);

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

  return (
    <>
    <Box sx={stylesRightGrid.container}>
      <Box sx={stylesRightGrid.innercontainer}>
        <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>Program configuration</Typography>
        <Box sx={stylesRightGrid.boxprovider}>
          <TextField
            sx={{ ...stylesRightGrid.textfieldstyle, flex: 1, position: "relative" }}
            variant="filled"
            label="Start date"
            value={startDateDisplay}
            onChange={handleStartTextFieldChange}
            placeholder={dateFormat}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setIsStartCalendarOpen(!isStartCalendarOpen)} sx={{ cursor: "pointer" }}>
                    <Calender />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            inputProps={{
              maxLength: 10,
              pattern: "\\d{2}/\\d{2}/\\d{4}",
            }}
          />
          {isStartCalendarOpen && (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Box ref={startCalendarRef} sx={{ position: "absolute", bottom: "130px",zIndex:1000 }}>
                <DateCalendar value={startDate} onChange={handleStartDateChange} sx={stylesRightGrid.dateTextfield}/>
              </Box>
            </LocalizationProvider>
          )}
          
          <TextField
            sx={{ ...stylesRightGrid.textfieldstyle, flex: 1 }}
            variant="filled"
            label="End date"
            value={endDateDisplay}
            onChange={handleEndTextFieldChange}
            placeholder={dateFormat}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setIsEndCalendarOpen(!isEndCalendarOpen)} sx={{ cursor: "pointer" }}>
                    <Calender />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            inputProps={{
              maxLength: 10,
              pattern: "\\d{2}/\\d{2}/\\d{4}",
            }}
          />
          {isEndCalendarOpen && (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Box ref={endCalendarRef} sx={{ position: "absolute", bottom: "130px", right: "150px",zIndex:1000 }}>
                <DateCalendar value={endDate} onChange={handleEndDateChange} sx={stylesRightGrid.dateTextfield} />
              </Box>
            </LocalizationProvider>
          )}
        </Box>

        <Box>
            <Typography>Program image</Typography>
            {!uploadedFile ? (
              <Box sx={stylesRightGrid.imgupload}>
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
                  sx={stylesRightGrid.uploadbotton}
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
              <Box sx={stylesRightGrid.elseupload}>
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
            sx={stylesRightGrid.textfieldstyle}
            variant="filled"
            label="Program title"
          />
          <TextField
            sx={stylesRightGrid.textfieldstyle}
            variant="filled"
            label="Program description"
          />
          <TextField
            sx={stylesRightGrid.textfieldstyle
            }
            variant="filled"
            label="Offer code"
          />
          <Box sx={{ padding: "10px 0px 10px 11px" }}>
            <Typography sx={{ fontSize: "small", color: "rgb(78, 88, 94)" }}>Applicable stores</Typography>
            <Box sx={stylesRightGrid.stores1}><Typography>Arabian Night Crest - Flamingo Mall</Typography><AllSwitches style={{height:"20px",width:"14px"}}/></Box>
            <Box sx={stylesRightGrid.stores2}><Typography>Arabian Night Crest - Sahara Mall</Typography><AllSwitches/> </Box>
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
