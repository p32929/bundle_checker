import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid, TextField, Theme, Typography } from "@material-ui/core";
import { useActions, useAppState } from '../../Overmind/OvermindHelper';
import { FieldArray, Form, Formik } from 'formik';
import { act } from 'react-dom/test-utils';
import { IBundle } from '../../Others/Models';

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

    const textfieldStyle = { paddingTop: 16 }
    const initialBundle: IBundle = {
        bundle_name: "",
        bundle_validity: 0,
        start_date: '',
        data: [
            {
                name: "",
                amount: 0
            }
        ]
    }

    return <Formik
        initialValues={initialBundle}
        onSubmit={(values, { setSubmitting }) => {
            actions.addBundle(values)
        }}
    >
        {({ values, submitForm, handleChange }) => (
            <Form>
                <Dialog
                    open={states.isShowingBundleAddDialog}
                    fullWidth
                >
                    <DialogTitle >
                        Add bundle
                    </DialogTitle>
                    <DialogContent>
                        <Grid container direction='column'>
                            <TextField type="text" onChange={handleChange} style={textfieldStyle} name="bundle_name" placeholder="Bundle name" />
                            <TextField type="text" onChange={handleChange} style={textfieldStyle} name="start_date" placeholder="Start date" />
                            <TextField type="number" onChange={handleChange} style={textfieldStyle} name="bundle_validity" placeholder="Bundle validity (days)" />

                            <FieldArray name="data">
                                {({ remove, push }) => {
                                    return <Grid container direction='column' alignContent='center'>
                                        <Typography variant='h6' style={{ marginTop: 24, color: "#212121", marginBottom: -12 }}>
                                            Bundle items
                                        </Typography>

                                        {
                                            values.data.map((val, index) => {
                                                return <Grid container spacing={1} alignItems='center'>
                                                    <Grid item xs={5}>
                                                        <TextField type="number" onChange={handleChange} style={textfieldStyle} placeholder="Amount" fullWidth name={`data.${index}.name`} />
                                                    </Grid>
                                                    <Grid item xs={5}>
                                                        <TextField type="text" onChange={handleChange} style={textfieldStyle} placeholder="Unit of measurement" fullWidth name={`data.${index}.amount`} />
                                                    </Grid>
                                                    <Grid item xs={2}>
                                                        <Button fullWidth color='primary' onClick={() => {
                                                            remove(index)
                                                        }}>Delete</Button>
                                                    </Grid>
                                                </Grid>
                                            })
                                        }

                                        <Button style={{ marginTop: 16 }} color='primary' variant='contained' fullWidth onClick={() => {
                                            push(initialBundle.data)
                                        }}>Add item</Button>

                                    </Grid>
                                }}
                            </FieldArray>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button color="primary">
                            Cancel
                        </Button>
                        <Button color="primary" autoFocus onClick={async () => { await submitForm() }}>
                            Add
                        </Button>
                    </DialogActions>
                </Dialog>
            </Form>
        )}
    </Formik>



}

export default BundleAdderDialog;