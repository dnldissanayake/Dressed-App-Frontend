import React from 'react';
import { Button } from '@mui/material';

const CustomButton: React.FC<{ text: string; onClick: () => void }> = ({
  text,
  onClick,
}) => <Button variant="contained" onClick={onClick}>{text}</Button>;

export default CustomButton;
