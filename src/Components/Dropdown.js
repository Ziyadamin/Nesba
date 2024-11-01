import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [Language, setLanguage] = React.useState('');

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 112, height: 20 }} className="Dropdown">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Language</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Language}
          label="Language"
          onChange={handleChange}
        >
          <MenuItem value={1}>English</MenuItem>
          <MenuItem value={2}>Arabic</MenuItem>
          
        </Select>
      </FormControl>
    </Box>
  );
}
