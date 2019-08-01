import React from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles }from '@material-ui/core/styles'


const useStyles = makeStyles(theme => ({
  container: {
    display: 'block',
  },
  textField: {
    display: 'block',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
}));

export default function Login() {
  const classes = useStyles();
  return <form autoComplete="off" className={classes.container}>
    <TextField variant="filled" margin="normal" className={classes.textField} id="username" label="Username" />
    <TextField variant="filled" margin="normal" className={classes.textField} id="password" label="Password" />
  </form>
}

