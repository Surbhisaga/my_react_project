  
import { TableCell,Table,TableBody,TableHead,TableRow,makeStyles ,Button} from '@material-ui/core';
import React,{ useEffect , useState} from 'react';
import { getUsers,deleteUser  } from "../Service/api";
import items from '../Database/db.json';

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
    // const [money,setMoney]=useState(items)
    const classes = useStyles();
    const [min,setMin]=useState("");
    const [max,setMax]=useState("");
    

    const handleFilterChange=(e,filterType)=>{
        switch(filterType){
            case "min":
                setMin(e.target.value);
                break;
            case "max":
                setMax(e.target.value);
                break;
            default:
                break;        
        }
    }


    useEffect(() =>{
        let filteredProduct = items;
        
        if (min !== "") {
            filteredProduct = filteredProduct.filter(user => parseInt(user.money) >= parseInt(min))
        }
        if (max !== "") {
            filteredProduct = filteredProduct.filter(user => parseInt(user.money) <= parseInt(max))
        }
        setUsers(filteredProduct)
        console.log(filteredProduct)
    },[min,max])

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
        <div>
            <form style={{margin:'50px 0 0 400px', display:"flex"}}>
                <h4 style={{marginRight:50}}>Filter : </h4>
                <input typeof="number" style={{marginRight:30}}  name="minprice" onChange={(e) => handleFilterChange(e,"min")} placeholder="min price"/>
                <input typeof="number" name="maxprice" onChange={(e) => handleFilterChange(e,"max")} placeholder="max value"/>
            </form>
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
                    users.map((user,key) => (
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
        </div>
    )
}
export default ExpenseList;

