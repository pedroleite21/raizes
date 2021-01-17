import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';

export default function SearchBox(props) {
  return (
    <div {...props}>
      <Paper component="form">
        <InputBase
          placeholder="Pesquise um local"
          inputProps={{ 'aria-label': 'pesquise google maps' }}
          style={{ color: '#E0A31B', padding: 5 }}
        />
      </Paper>
    </div>
  );
}
