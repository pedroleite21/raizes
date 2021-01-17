import * as React from 'react';

const DrawerContext = React.createContext({});

export function useDrawerContext() {
  const { isOpen = null, toggleDrawer = () => {} } = React.useContext(
    DrawerContext
  );

  return { isOpen, toggleDrawer };
}

export function DrawerProvider({ children }) {
  const [isOpen, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <DrawerContext.Provider value={{ isOpen, toggleDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
}
