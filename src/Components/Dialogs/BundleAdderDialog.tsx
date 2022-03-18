import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid, TextField, Theme, Typography } from "@material-ui/core";
import { useActions, useAppState } from '../../Overmind/OvermindHelper';

interface Props {

}

const getThemeObj = (theme: Theme) => {
    return {}
}

const useStyles = makeStyles((theme: Theme) => (getThemeObj(theme)))

const BundleAdderDialog: React.FC<Props> = (props) => {
    const actions = useActions()
    const states = useAppState()
    const classes = useStyles();

    const onAddItem = () => {

    }

    const textfieldStyle = { paddingTop: 16 }

    return <Dialog
        open={states.isShowingBundleAddDialog}
        fullWidth
    >
        <DialogTitle >
            Add bundle
        </DialogTitle>
        <DialogContent>
            <DialogContentText >
                <Grid container direction='column'>
                    <TextField style={textfieldStyle} id="bundle_name" placeholder="Bundle name" />
                    <TextField style={textfieldStyle} id="start_date" placeholder="Start date" />
                    <TextField style={textfieldStyle} id="bundle_validity" placeholder="Bundle validity" />

                    <Grid container direction='column' alignContent='center'>
                        <Typography variant='h6' style={{ marginTop: 24, color: "#212121", marginBottom: -12 }}>
                            Bundle items
                        </Typography>

                        <Grid container spacing={1} alignItems='center'>
                            <Grid item xs={5}>
                                <TextField style={textfieldStyle} placeholder="Amount" fullWidth />
                            </Grid>
                            <Grid item xs={5}>
                                <TextField style={textfieldStyle} placeholder="Unit of measurement" fullWidth />
                            </Grid>
                            <Grid item xs={2}>
                                <Button fullWidth color='primary'>Delete</Button>
                            </Grid>
                        </Grid>
                        <Button style={{ marginTop: 16 }} color='primary' variant='contained' fullWidth >Add item</Button>
                    </Grid>
                </Grid>
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button color="primary">
                Cancel
            </Button>
            <Button color="primary" autoFocus>
                Add
            </Button>
        </DialogActions>
    </Dialog>

}

export default BundleAdderDialog;