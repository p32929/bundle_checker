import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Theme } from "@material-ui/core";
import { useActions, useAppState } from './Overmind/OvermindHelper';
import TopBar from './Components/TopBar';
import BundleAdderDialog from './Components/Dialogs/BundleAdderDialog';

interface Props {

}

const getThemeObj = (theme: Theme) => {
    return {}
}

const useStyles = makeStyles((theme: Theme) => (getThemeObj(theme)))

const App: React.FC<Props> = (props) => {
    const actions = useActions()
    const states = useAppState()

    const classes = useStyles();

    return <Grid container direction='column' justifyContent='center' alignItems='center'>
        <BundleAdderDialog />
        <TopBar />
    </Grid>

}

export default App;