import React, {Component} from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';

//import logo from './logo.svg';
//import './App.css';
const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        width: 600,
        textAlign: 'center'
    },

    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,

    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 220,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            sim: '',
            imei: '',
            minutes: 0
        };
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    start = (event, minutes) => {
        //alert(this.state.sim);
        //alert(this.state.imei);
        //alert(minutes);
        axios.post('./index.php', {
            sim: this.state.sim,
            imei: this.state.imei,
            minutes: minutes
        });
    }

    render() {
        const {classes} = this.props;

        return (
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
                <Paper className={classes.root} elevation={1}>
                    <form autoComplete="off" className={classes.container}>

                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="sim">Sim</InputLabel>
                            <Select
                                value={this.state.sim}
                                onChange={this.handleChange}
                                inputProps={{
                                    name: "sim",
                                    id: "sim"
                                }}
                            >
                                <MenuItem value="">
                                    <em>Select SIM</em>
                                </MenuItem>
                                <MenuItem value={`PPCG1`}>PPCG1</MenuItem>
                                <MenuItem value={`PPCG_Test`}>PPCG_Test</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <TextField
                                required
                                id="required"
                                label="IMEI"
                                defaultValue=""
                                className={classes.textField}
                                margin="normal"
                                onChange={this.handleChange}
                                inputProps={{
                                    name: "imei",
                                    id: "imei"
                                }}
                            />
                        </FormControl>
                        <div>
                            <Button variant="contained" color="primary" className={classes.button} onClick={(e, minutes) => this.start(e, 1)}>
                                1 min
                            </Button>
                            <Button variant="contained" color="primary" className={classes.button} onClick={(e, minutes) => this.start(e, 2)}>
                                2 min
                            </Button>
                            <Button variant="contained" color="primary" className={classes.button} onClick={(e, minutes) => this.start(e, 3)}>
                                3 min
                            </Button>
                            <Button variant="contained" color="primary" className={classes.button} onClick={(e, minutes) => this.start(e, 4)}>
                                4 min
                            </Button>
                            <Button variant="contained" color="primary" className={classes.button} onClick={(e, minutes) => this.start(e, 5)}>
                                5 min
                            </Button>
                        </div>
                        <div>
                            <Button variant="contained" color="primary" className={classes.button} onClick={(e, minutes) => this.start(e, 6)}>
                                6 min
                            </Button>
                            <Button variant="contained" color="primary" className={classes.button} onClick={(e, minutes) => this.start(e, 7)}>
                                7 min
                            </Button>
                            <Button variant="contained" color="primary" className={classes.button} onClick={(e, minutes) => this.start(e, 8)}>
                                8 min
                            </Button>
                            <Button variant="contained" color="primary" className={classes.button} onClick={(e, minutes) => this.start(e, 9)}>
                                9 min
                            </Button>
                            <Button variant="contained" color="primary" className={classes.button} onClick={(e, minutes) => this.start(e, 10)}>
                                10 min
                            </Button>
                        </div>
                        <div>
                            <Button variant="contained" color="primary" className={classes.button} onClick={(e, minutes) => this.start(e, 11)}>
                                11 min
                            </Button>
                            <Button variant="contained" color="primary" className={classes.button} onClick={(e, minutes) => this.start(e, 12)}>
                                12 min
                            </Button>
                            <Button variant="contained" color="primary" className={classes.button} onClick={(e, minutes) => this.start(e, 13)}>
                                13 min
                            </Button>
                            <Button variant="contained" color="primary" className={classes.button} onClick={(e, minutes) => this.start(e, 14)}>
                                14 min
                            </Button>
                            <Button variant="contained" color="primary" className={classes.button} onClick={(e, minutes) => this.start(e, 15)}>
                                15 min
                            </Button>
                        </div>
                    </form>
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(App);