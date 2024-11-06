import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const MyComponent = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Welcome to Codux with MUI!
      </Typography>
      <Button variant="contained" color="primary">
        Click Me
      </Button>
    </div>
  );
};

export default MyComponent;
