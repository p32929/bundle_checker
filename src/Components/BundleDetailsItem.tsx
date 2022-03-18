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
            const date_str = `${dd}/${mm}/${yyyy}`
            dateStrArr.push(`${date_str}`)
        }
        return dateStrArr
    }

    return <Grid container direction='column'>
        <Typography>{props.item.bundle_name}</Typography>
        <Typography>{props.item.start_date}</Typography>
        <Typography>{props.item.bundle_validity_days} days -- {getEndDateStr().toString()}</Typography>
        <Table >
            <TableHead>
                <TableRow>
                    <TableCell>Date</TableCell>

                    {
                        props.item.data.map((item, index) => {
                            return <TableCell align="right">{item.unit}</TableCell>
                        })
                    }
                </TableRow>
            </TableHead>
        </Table>

        <TableBody>
            {
                getStartToEndDates().map((item, index) => {
                    return <TableRow>
                        <TableCell align="left">
                            {item}
                        </TableCell>
                        <TableCell align="right">TEST</TableCell>
                        <TableCell align="right">TEST</TableCell>
                        <TableCell align="right">TEST</TableCell>
                        <TableCell align="right">TEST</TableCell>
                    </TableRow>
                })
            }
        </TableBody>

    </Grid>

}

export default BundleDetailsItem;