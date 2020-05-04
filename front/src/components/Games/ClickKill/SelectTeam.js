import React, {Fragment} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Carousel from 'react-bootstrap/Carousel';
import "./SelectTeam.css";
import "./BigBoard.css";


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

// WE USE MATERIAL-UI FOR LONG TERM SUSTAINABILITY, WHATEVER THE NUMBER OF TEAMS
const SelectTeam = props => {
    const classes = useStyles();
    return (
    <div className="footballGameContainer">
        <div className="footballGameHeader">
            <p className='titleTeams'>A quien quieres dar una Paliza?</p>
        </div>
        <div id='teams' className="img-container">
            <div className={classes.root}>
                <Grid container
                    max-width="90"
                    direction="row"
                    justify="center"
                    alignItems="center"
                    className="flagSquare">
                    {props.footballFlags.map((equipo)=>
                    <Fragment>
                        <Grid className="squareBackground" item xs={2} style={{height: 90, margin: '0 1px 2px 0', border: '1px solid grey', borderRadius: '5px', padding: 2 }}>
                            <img className="teamLogo" id={equipo.toString()} onClick={props.printName} src={equipo} alt=''/>
                        </Grid>
                        <Grid className="squareBackgroundSmall" item xs={3} style={{height: 90, margin: '0 1px 2px 0', border: '1px solid grey', borderRadius: '5px', padding: 2 }}>
                            <img className="teamLogo" id={equipo.toString()} onClick={props.printName} src={equipo} alt=''/>
                        </Grid>
                        </Fragment>
                    )}
                </Grid>
            </div>

        </div>
        <Carousel id='carouselTeams'>
        {props.footballFlags.map((equipo)=>
                        <Carousel.Item>
                            <img id={equipo.toString()} onClick={props.printName} src={equipo} alt=''/>
                        </Carousel.Item>
                    )}
        </Carousel>
    </div>
    )
}


export default SelectTeam;
