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

        await fetch('https://timetable-managment-backend.herokuapp.com/signIn', {
            method: 'POST',
            // mode: "no-cors",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nombre: data.nombre,
                correo: data.correo,
                contraseña: data.contraseña
            })
        })
    }
    //checkEmptyFields array
    const [checkEmptyFields, setCheckEmptyFields] = useState([])

    //State
    const [data, updateData] = useState({
        nombre: "",
        correo: "",
        contraseña: ""
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
                        <TextField id="nombre" label="Nombre" type="text" name="nombre"
                            value={data.nombre}
                            onChange={(event) => updateData({ ...data, nombre: event.target.value })} required />
                    </div>
                    <div className="col-12">
                        <TextField id="correo" label="Email" type="email" name="correo"
                            value={data.correo}
                            onChange={(event) => updateData({ ...data, correo: event.target.value })} required />
                    </div>
                    <div className="col-12">
                        <FormControl className={clsx(classes.margin, classes.textField)}>
                            <InputLabel htmlFor="standard-adornment-password">Contraseña</InputLabel>
                            <Input
                                value={data.contraseña}
                                id="contraseña"
                                name="contraseña"
                                type={viewPassword ? 'text' : 'password'}
                                onChange={(event) => updateData({ ...data, contraseña: event.target.value })}
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
                            <InputLabel htmlFor="standard-adornment-password">Repite contraseña</InputLabel>
                            <Input
                                value={repeatPassword.repeatpassword}
                                id="repiteContraseña"
                                name="repiteContraseña"
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
