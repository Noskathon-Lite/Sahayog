"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import CelebrationIcon from '@mui/icons-material/Celebration';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import { MenuItem } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Link from 'next/link';


const drawerWidth = 240;

export default function NavBar(prop:any) {
  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <div style={{display:'flex', justifyContent:'space-between'}}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} >
   
        <Toolbar style={{display:'flex',justifyContent:'space-between',alignItems: 'center'}} >
        <div>
    <img src="/logo.png" alt="Logo" style={{ height: '60px',width: '70px' }} />
  </div>
            <div style={{ display: 'flex', gap: '20px' }}>
            <NotificationsIcon/>
            <Link href='/sign'>
            <AccountCircleIcon/>
            </Link>
            </div>
          
           
        </Toolbar>
      </AppBar>
      </div>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['Lunch', 'Travel', 'Celebration', 'Helper','Guide'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                  {(() => {
    switch (index % 5) { // Assuming 5 unique icons
      case 0:
        return <LocalPizzaIcon />;
      case 1:
        return <DirectionsCarIcon />;
      case 2:
        return <CelebrationIcon />;
      case 3:
        return <EmojiPeopleIcon />;
      case 4:
        return <DirectionsWalkIcon />;
      default:
        return null; // Fallback if no match
    }
  })()}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {prop.children}
      </Box>
    </Box>
  );
}

