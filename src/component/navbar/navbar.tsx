import React from 'react';
import { Drawer, List, ListItem, ListItemText, Typography, Box } from '@mui/material';
import { useNavigate, useLocation, Routes, Route } from 'react-router-dom';
import Designer from '../../pages/Designer/Designer.tsx';
import Supplier from '../../pages/Supplier/Supplier.tsx';

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
            boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)'
          },
        }}
      >
        <Box sx={{ overflow: 'auto', mt: 2 }}>
          <Typography variant="h6" sx={{ p: 2, fontSize: '1.5rem' }}>
            Dressed™
          </Typography>
          <List>
            <ListItem 
              component="button" 
              onClick={() => navigate('/')}
              sx={{
                backgroundColor: location.pathname === '/' ? '#1976d2' : 'inherit',
                color: location.pathname === '/' ? 'white' : 'inherit',
                '&:hover': {
                  backgroundColor: '#1976d2',
                  color: 'white'
                }
              }}
            >
              <ListItemText primary="Designer" />
            </ListItem>
            <ListItem 
              component="button" 
              onClick={() => navigate('/supplier')}
              sx={{
                backgroundColor: location.pathname === '/supplier' ? '#1976d2' : 'inherit',
                color: location.pathname === '/supplier' ? 'white' : 'inherit',
                '&:hover': {
                  backgroundColor: '#1976d2',
                  color: 'white'
                }
              }}
            >
              <ListItemText primary="Supplier" />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Routes>
          <Route path="/" element={<Designer />} />
          <Route path="/supplier" element={<Supplier />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default Sidebar;
