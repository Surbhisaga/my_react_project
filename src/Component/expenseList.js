import React from 'react';
import { TableCell,Table,TableBody,TableHead,TableRow,makeStyles } from '@material-ui/core';
import Data from '../data.json';

const useStyles = makeStyles({
    table:{
        width:'70%',
        margin: '50px 0 0 180px'
    },
    thred:{
        '& > * ':{
            background:'#000000',
            color:'#FFFFFF',
            fontSize:20
        }
    }
})


const ExpenseList = ()=>{
    
    const classes = useStyles();
    
    return (
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thred}>
                    <TableCell>Date</TableCell>
                    <TableCell>Money</TableCell>
                    <TableCell>WhereBy</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                { Data.map(post => {
                    return (
                    <TableRow key={post.id}>
                        <TableCell>{post.date}</TableCell>
                        <TableCell>{post.money}</TableCell>
                        <TableCell>{post.whereby}</TableCell>
                    </TableRow>
                    ) 
                })}
            </TableBody>
        </Table>
    )
}
export default ExpenseList;

