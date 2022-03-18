import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Theme } from "@material-ui/core";
import { useActions, useAppState } from './Overmind/OvermindHelper';
import TopBar from './Components/TopBar';
import BundleAdderDialog from './Components/BundleAdderDialog';
import BundleDetailsItem from './Components/BundleDetailsItem';
import AppBarOffset from './Components/AppBarOffset';

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

    useEffect(() => {
        actions.setBundle(JSON.parse(localStorage.getItem("BUNDLES") ?? "[]"))
    }, [])

    return <Grid container direction='column' justifyContent='center' alignItems='center'>
        <BundleAdderDialog />
        <TopBar />
        <AppBarOffset />
        {
            states.bundles.map((item, index) => {
                return <BundleDetailsItem item={item} />
            })
        }
    </Grid>

}

export default App;