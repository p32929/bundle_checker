import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import {AppBar, Button, Divider, Grid, Theme, Toolbar, Typography} from "@material-ui/core";
import {useActions, useAppState} from '../Overmind/OvermindHelper';

interface Props {

}

const getThemeObj = (theme: Theme) => {
    return {}
}

const useStyles = makeStyles((theme: Theme) => (getThemeObj(theme)))

const TopBar: React.FC<Props> = (props) => {
    const actions = useActions()
    const states = useAppState()

    const classes = useStyles();

    const onAddBtnClicked = () => {
        
    }

    return <AppBar>
        <Toolbar>
            <Grid container justifyContent='space-between' alignItems='center'>
                <Typography>
                    Bundle Checker
                </Typography>

                <Button color='inherit' onClick={onAddBtnClicked}>
                    ADD
                </Button>
            </Grid>
        </Toolbar>
    </AppBar>

}

export default TopBar;