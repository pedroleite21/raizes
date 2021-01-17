import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import IconMarker from '@material-ui/icons/Place';
import MenuIcon from '@material-ui/icons/Menu';
import styled from '@emotion/styled';
import Logo from '../components/logo';
import Layout from '../components/layout';

const content = [
  { label: 'Dias Atuais' },
  { label: '2010' },
  { label: '2000' },
  { label: '1990' },
  { label: '1980' },
  { label: '1970' },
  { label: '1960' },
  { label: '1950' },
  { label: '1940' },
  { label: '1930' },
];

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

export default function Place() {
  return (
    <div>
      <AppBar position="fixed" color="inherit">
        <StyledToolbar>
          <StyledMenuButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </StyledMenuButton>
          <Logo />
        </StyledToolbar>
        <StyledPlace>
          <div>
            <Typography variant="h4" component="h1" color="primary">
              Lapa, Rio de Janeiro
            </Typography>
            <span>Navegue pela história daqui</span>
          </div>
          <IconMarker fontSize="large" color="primary" />
        </StyledPlace>
      </AppBar>
      <Layout
        css={{
          display: 'flex',
          margin: '0 auto',
          maxWidth: 560,
          paddingTop: 200,
          width: '100%',
        }}
      >
        <div css={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          {content.map(({ label }, index) => (
            <div
              key={label}
              css={{
                borderRight: '2px solid #fff',
                borderRightColor: index === 0 && '#E0A31B',
                display: 'flex',
                justifyContent: 'space-between',
                padding: '32px 16px',
              }}
            >
              <span>Conteúdo</span>
              <Typography
                variant="h6"
                component="span"
                color={index === 0 ? 'primary' : 'primaryText'}
              >
                {label}
              </Typography>
            </div>
          ))}
        </div>
      </Layout>
    </div>
  );
}
