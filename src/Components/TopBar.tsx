import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Button, Divider, Grid, Theme, Toolbar, Typography } from "@material-ui/core";
import { useActions, useAppState } from '../Overmind/OvermindHelper';

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
        actions.showBundleAdderDialog(true)
    }

    const onSaveBtnClicked = () => {
        localStorage.setItem("BUNDLES", JSON.stringify(states.bundles))
    }

    return <AppBar>
        <Toolbar>
            <Grid container justifyContent='space-between' alignItems='center'>
                <Typography>
                    Bundle Checker
                </Typography>

                <Grid item>
                    <Button color='inherit' onClick={onSaveBtnClicked}>
                        SAVE
                    </Button>
                    <Button color='inherit' onClick={onAddBtnClicked}>
                        ADD
                    </Button>
                </Grid>
            </Grid>
        </Toolbar>
    </AppBar>

}

export default TopBar;