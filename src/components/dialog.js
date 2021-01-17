import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import ChartIcon from '@material-ui/icons/ShowChart';
import CloseIcon from '@material-ui/icons/Close';
import DownloadIcon from '@material-ui/icons/MoveToInbox';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemTextMaterial from '@material-ui/core/ListItemText';
import MaterialDialog from '@material-ui/core/Dialog';
import PowerIcon from '@material-ui/icons/PowerSettingsNew';
import Slide from '@material-ui/core/Slide';
import SupervisorIcon from '@material-ui/icons/SupervisorAccount';
import Toolbar from '@material-ui/core/Toolbar';
import styled from '@emotion/styled';
import { useDrawerContext } from '../context/drawerContext';
import Logo from './logo';
import avatarImage from '../assets/avatar.png';
import { Typography } from '@material-ui/core';
import pixButton from '../assets/pix_button.png';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ListItemText = styled(ListItemTextMaterial)({
  color: '#212121',
});

const StyledCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  padding: theme.spacing(2),
}));

const AvatarAppBar = styled(Avatar)({
  width: 70,
  height: 70,
});

const BottomAppBar = styled(AppBar)({
  top: 'auto',
  bottom: 0,

  '> div': {
    justifyContent: 'flex-end',
  },
});

const divCss = {
  backgroundColor: '#fff',
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  height: '100%',
  overflowX: 'auto',
  paddingBottom: 80,
};

const textFieldCss = {
  margin: '12px 0',
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

export default function Dialog() {
  const [ganhos, setGanhos] = React.useState(false);
  const { isOpen, toggleDrawer } = useDrawerContext();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

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
              <AvatarAppBar alt="Daniel" src={avatarImage} />
            </Grid>
            <Grid item>
              <Logo />
            </Grid>
          </Grid>
        </div>
        <span css={{ padding: '8px 24px 24px' }}>caiquesilva@gmail.com</span>
      </AppBar>
      <div css={divCss}>
        {!ganhos ? (
          <List>
            <ListItem button>
              <ListItemIcon>
                <DownloadIcon />
              </ListItemIcon>
              <ListItemText primary="Perfil" />
            </ListItem>
            <ListItem button onClick={() => setGanhos(true)}>
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
        ) : (
            <div css={{ padding: '12px 24px' }}>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <IconButton
                    edge="start"
                    color="primary"
                    onClick={() => setGanhos(false)}
                  >
                    <ArrowBackIcon />
                  </IconButton>
                </Grid>
                <Grid item>
                  <Typography color="primary">Ganhos</Typography>
                </Grid>
              </Grid>
              <StyledCard>
                <Grid container spacing={3}>
                  <Grid item>
                    <span css={{ display: 'block' }}>Saldo Atual: R$ 550</span>
                    <span>Saldo Doado: R$ 165 no último mês</span>
                  </Grid>
                  <Grid item>
                    <img src={pixButton} />
                  </Grid>
                </Grid>
              </StyledCard>
              <StyledCard>
                <span>
                  Você contribuiu para 6 Jovens Artistas no último mês e você está
                  doando 30% do seu saldo no raízes.
              </span>
              </StyledCard>
              <div css={textFieldCss}>
                <TextField
                  id="text-field"
                  label="Qual o valor de transferência?"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  InputProps={{ placeholder: 'R$ 20,00' }}
                />
              </div>
              <div css={textFieldCss}>
                <TextField
                  id="text-field"
                  label="Para quem você quer transferir?"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  InputProps={{ placeholder: 'Nome, CPF/CNPJ ou chave Pix' }}
                />
              </div>
              <Button fullWidth color="primary" variant="contained" onClick={handleClick}>
                Transferir
            </Button>
            </div>
          )}
      </div>
      <BottomAppBar position="fixed" color="primary">
        <Toolbar>
          <IconButton edge="end" color="inherit" onClick={toggleDrawer}>
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </BottomAppBar>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Valor transferido!
        </Alert>
      </Snackbar>
    </MaterialDialog>
  );
}
