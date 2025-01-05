import React from 'react';
import { Button } from '@mui/material';

const CustomButton: React.FC<{ text: string; onClick: () => void }> = ({
  text,
  onClick,
}) => (
  <Button 
    variant="contained" 
    onClick={onClick}
    sx={{
      backgroundColor: '#2196f3',
      '&:hover': {
        backgroundColor: '#1976d2'
      }
    }}
  >
    {text}
  </Button>
);

export default CustomButton;
