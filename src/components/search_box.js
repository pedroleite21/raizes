import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';

export default function SearchBox({
  placeholder = 'Pesquise um local',
  ...rest
}) {
  return (
    <div {...rest}>
      <Paper component="form">
        <InputBase
          placeholder={placeholder}
          inputProps={{ 'aria-label': placeholder }}
          style={{ color: '#E0A31B', padding: 5 }}
        />
      </Paper>
    </div>
  );
}
