import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import './SignIn.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import { Alert } from 'reactstrap';

const sendIcon = <FontAwesomeIcon icon={faPaperPlane} size='2x' color='white' />
const eye = <FontAwesomeIcon icon={faEye} size="xs" />
const eyeSlash = <FontAwesomeIcon icon={faEyeSlash} size="xs" />

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    button: {
        margin: theme.spacing(1),
    },
}));

function SignIn() {
    const classes = useStyles();
    

    //Submit button
    const submitInfo = async (event) => {
        event.preventDefault();

        await fetch('http://localhost:5000/users_profiles', {
            method: 'POST',
            // mode: "no-cors",
            headers:new Headers({
                'Content-Type': 'application/json'
              }),
            body: JSON.stringify({
                name: data.name,
                email: data.email,
                password: data.password
            })
             
        })
    }
    //checkEmptyFields array
    const [checkEmptyFields, setCheckEmptyFields] = useState([])

    //State
    const [data, updateData] = useState({
        name: "",
        email: "",
        password: ""
    })
    

    const [repeatPassword,setRepeatpassword] = useState({
        repeatPassword: ''
    })

    //show / hide password
    const [viewPassword, setViewPassword] = useState(false);

    return (
        <div className="SignIn">
            <form className={classes.root} noValidate autoComplete="off" onSubmit={(event) => submitInfo(event)}>
                <div className="row">
                    <div className="col-12">
                        <TextField id="name" label="Name" type="text" name="name"
                            value={data.name}
                            onChange={(event) => updateData({ ...data, name: event.target.value })} required />
                    </div>
                    <div className="col-12">
                        <TextField id="email" label="Email" type="email" name="email"
                            value={data.email}
                            onChange={(event) => updateData({ ...data, email: event.target.value })} required />
                    </div>
                    <div className="col-12">
                        <FormControl className={clsx(classes.margin, classes.textField)}>
                            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                            <Input
                                value={data.password}
                                id="password"
                                name="password"
                                type={viewPassword ? 'text' : 'password'}
                                onChange={(event) => updateData({ ...data, password: event.target.value })}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() => setViewPassword(!viewPassword)}
                                        >
                                            {viewPassword ? eye : eyeSlash}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </div>
                    <div className="col-12">
                        <FormControl className={clsx(classes.margin, classes.textField)}>
                            <InputLabel htmlFor="standard-adornment-password">Repite Password</InputLabel>
                            <Input
                                value={repeatPassword.repeatpassword}
                                id="repitepassword"
                                name="repitepassword"
                                type={viewPassword ? 'text' : 'password'}
                                onChange={(event) => setRepeatpassword({ ...repeatPassword, repeatPassword: event.target.value })}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() => setViewPassword(!viewPassword)}
                                        >
                                            {viewPassword ? eye : eyeSlash}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </div>
                    <div className="col-12 aligItems">
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            endIcon={sendIcon}
                        >
                            Enviar
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SignIn;
