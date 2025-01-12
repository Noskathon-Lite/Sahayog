"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';



import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import CelebrationIcon from '@mui/icons-material/Celebration';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const drawerWidth = 240;

export default function NavBar() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
           
            <div style={{display:'flex', justifyContent:'flex-end',alignItems:'flex-end'}}>
           <AccountBoxIcon/>User Profile
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
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
        
      </Box>
    </Box>
  );
}

