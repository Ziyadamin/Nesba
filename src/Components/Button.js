import * as React from 'react';
import Button from '@mui/material/Button';

export default function DisableElevation({text},{width} ) {
  return (
    <Button 
      variant="contained" 
      sx={{ 
        width: '320px',        // Set a specific width
        backgroundColor: 'black',  // Set background color to black
        borderRadius: '12px',
        fontSize: '0.875rem',        // Set font size to a smaller value (e.g., 14px)
        textTransform: 'none',
        color: 'white',        // Set text color to white
        '&:hover': {
          backgroundColor: '#333', // Optional: Change background on hover
        },
      }}
    >
      {text}
    </Button>
  );
}
