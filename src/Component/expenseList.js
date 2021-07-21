  
import { TableCell,Table,TableBody,TableHead,TableRow,makeStyles ,Button} from '@material-ui/core';
import { useEffect , useState} from 'react';
import { getUsers,deleteUser  } from "../Service/api";


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
    },
    row:{
        '& > *':{
            fontSize:18
        }
    }
})


const ExpenseList = () => {
    
    const [users, setUsers]=useState([]);
    const classes = useStyles();
    
    useEffect(() =>{
        getAllUsers()
    },[])

    const getAllUsers = async() => {
        const response = await getUsers();
        console.log(response);
        setUsers(response.data);
    }

    const deleteUserData = async(id) => {
        await deleteUser(id);
        getAllUsers();
    }

    return (
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thred}>
                    <TableCell>Id</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Money</TableCell>
                    <TableCell>WhereBy</TableCell>
                    <TableCell>Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    users.map(user => (
                        <TableRow className={classes.row}>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.date}</TableCell>
                            <TableCell>{user.money}</TableCell>
                            <TableCell>{user.whereby}</TableCell>
                            <TableCell>
                                <Button  variant="contained" color="secondary" onClick={()=>deleteUserData(user.id)}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}
export default ExpenseList;

