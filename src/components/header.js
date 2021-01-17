import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import styled from '@emotion/styled';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Logo from './logo';
import { useDrawerContext } from '../context/drawerContext';
import { navigate } from 'gatsby';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: 'space-between',
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(1),
}));

const StyledPlace = styled.div(({ theme }) => ({
  padding: theme.spacing(2),
  paddingTop: theme.spacing(1),
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

const StyledMenuButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(2),
}));

export default function Header({ subHeader = null, tabs }) {
  const { toggleDrawer } = useDrawerContext();

  const handleOpenDrawer = () => {
    toggleDrawer();
  };

  return (
    <AppBar position="fixed" color="inherit">
      <StyledToolbar>
        <StyledMenuButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={handleOpenDrawer}
        >
          <MenuIcon />
        </StyledMenuButton>
        <div css={{ cursor: 'pointer' }} onClick={() => navigate('/')}><Logo /></div>
      </StyledToolbar>
      {subHeader && <StyledPlace>{subHeader}</StyledPlace>}
      {tabs}
    </AppBar>
  );
}
