import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Divider, Grid, Table, TableBody, TableCell, TableHead, TableRow, Theme, Typography } from "@material-ui/core";
import { useActions, useAppState } from '../Overmind/OvermindHelper';
import { IBundle } from '../Others/Models';

interface Props {
    item: IBundle
}

const getThemeObj = (theme: Theme) => {
    return {}
}

const useStyles = makeStyles((theme: Theme) => (getThemeObj(theme)))

const BundleDetailsItem: React.FC<Props> = (props) => {
    const actions = useActions()
    const states = useAppState()

    const classes = useStyles();

    const convertDateTo_ddmmyyyy = (date: Date) => {
        var dd = String(date.getDate()).padStart(2, '0');
        var mm = String(date.getMonth() + 1).padStart(2, '0');
        var yyyy = date.getFullYear();
        return {
            dd, mm, yyyy
        }
    }

    const get_ddmmyyyy_to_date = (dateString: string) => {
        var dateParts: Array<number> = dateString.split("/").map((item) => parseInt(item));
        var date = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
        return date
    }

    const addDaysToDate = (date: Date, daysToAdd: number = 1) => {
        date.setDate(date.getDate() + daysToAdd)
        return date
    }

    const getEndDateStr = () => {
        var end_date = get_ddmmyyyy_to_date(props.item.start_date)
        addDaysToDate(end_date, props.item.bundle_validity_days)
        const { dd, mm, yyyy } = convertDateTo_ddmmyyyy(end_date)
        const end_date_str = `${dd}/${mm}/${yyyy}`
        return end_date_str
    }

    const getStartToEndDates = () => {
        var startDate = get_ddmmyyyy_to_date(props.item.start_date)
        var dateStrArr = []
        for (let i = 0; i < props.item.bundle_validity_days; i++) {
            const { dd, mm, yyyy } = convertDateTo_ddmmyyyy(addDaysToDate(startDate, 1))
            const date_str = `${dd}/${mm}/${yyyy} ( ${startDate.toLocaleString('en-us', { weekday: 'long' })} )`
            dateStrArr.push(`${date_str}`)
        }
        return dateStrArr
    }

    return <Grid container direction='column' style={{ padding: 16 }}>
        <Typography variant='h6'>{props.item.bundle_name}</Typography>
        <Typography variant='body2'>Starts from: {props.item.start_date}</Typography>
        <Typography variant='body2'>Validity: {props.item.bundle_validity_days} days ( {getEndDateStr().toString()} )</Typography>
        <Table >
            <TableHead>
                <TableRow>
                    <TableCell align="center">Date</TableCell>

                    {
                        props.item.data.map((item, index) => {
                            return <TableCell align="center">{item.unit}</TableCell>
                        })
                    }
                </TableRow>
            </TableHead>

            <TableBody>
                {
                    getStartToEndDates().map((item, index) => {
                        return <TableRow key={index}>
                            <TableCell align="center">{item}</TableCell>
                            {
                                props.item.data.map((item, index2) => {
                                    return <TableCell align="center">
                                        {(item.amount - (item.amount / props.item.bundle_validity_days) * (index + 1)).toFixed(2)} ( {item.unit} )
                                    </TableCell>
                                })
                            }
                        </TableRow>
                    })
                }
            </TableBody>

        </Table>

    </Grid>

}

export default BundleDetailsItem;