import * as React from 'react';

export default function Layout({ children, ...rest }) {
  return <main {...rest}>{children}</main>;
}
