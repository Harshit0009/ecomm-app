import {
  AppBar,
  Badge,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartSharp';

export default function Header() {
  return (
    <AppBar position='sticky'>
      <Toolbar>
        <Typography
          variant='h5'
          color='inherit'
          sx={{
            flexGrow: 1,
          }}>
          E-Commerce
        </Typography>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <IconButton
            size='large'
            aria-label='shows cart items count'
            color='inherit'>
            <Badge badgeContent={2} color='error'>
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Box>
        <Button color='inherit'>LOGIN</Button>
      </Toolbar>
    </AppBar>
  );
}
