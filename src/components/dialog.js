import * as React from 'react';
import Avatar from '@material-ui/core/Avatar';
import AppBar from '@material-ui/core/AppBar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import MaterialDialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ChartIcon from '@material-ui/icons/ShowChart';
import SupervisorIcon from '@material-ui/icons/SupervisorAccount';
import DownloadIcon from '@material-ui/icons/MoveToInbox';
import PowerIcon from '@material-ui/icons/PowerSettingsNew';
import styled from '@emotion/styled';
import { useDrawerContext } from '../context/drawerContext';
import Logo from './logo';


const BottomAppBar = styled(AppBar)({
  top: 'auto',
  bottom: 0,

  '> div': {
    justifyContent: 'flex-end',
  },
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

export default function Dialog() {
  const { toggleDrawer } = useDrawerContext();

  const isOpen = false;

  return (
    <MaterialDialog
      open={isOpen}
      fullScreen
      TransitionComponent={Transition}
      onClose={toggleDrawer}
    >
      <AppBar color="inherit" position="static">
        <div css={{ padding: 24, paddingTop: 48 }}>
          <Grid container spacing={0} justify="space-between">
            <Grid item>
              doadoa
          </Grid>
            <Grid item>
              <Logo />
            </Grid>
          </Grid>
        </div>
      </AppBar>
      <List>
        <ListItem button>
          <ListItemIcon>
            <DownloadIcon />
          </ListItemIcon>
          <ListItemText primary="Perfil" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ChartIcon />
          </ListItemIcon>
          <ListItemText primary="Ganhos" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SupervisorIcon />
          </ListItemIcon>
          <ListItemText primary="Meu público" />
        </ListItem>
        <ListItem button onClick={toggleDrawer}>
          <ListItemIcon>
            <PowerIcon />
          </ListItemIcon>
          <ListItemText primary="Sair" />
        </ListItem>
      </List>
      <BottomAppBar position="fixed" color="primary">
        <Toolbar>
          <IconButton edge="end" color="inherit" onClick={toggleDrawer}>
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </BottomAppBar>
    </MaterialDialog>
  );
}
