import { FormGroup,InputLabel,Input,FormControl,Button,makeStyles ,Typography} from "@material-ui/core";
import React,{useState} from 'react';
import {addUser} from '../Service/api'

const useStyles = makeStyles({
    container: {
        width:'50%',
        margin:'5% 0 0 25%',
        '& > *':{
            marginTop:20
        }
    }
})

const initalValues = {
    date:'',
    money:'',
    whereby:''
}

const AddExpenseAndIncome = () => {

    const [ user,setUser] = useState(initalValues);
    const classes = useStyles();
    const { date , money , whereby} = user;

    const onValueChange = (e) =>{
        setUser({ ...user,[e.target.name]:e.target.value});
    }

    const addUserDetails = async () => {
        await addUser(user);
    }

    return(
        <FormGroup className={classes.container}>
            <Typography variant="h5">Add User</Typography>
            <FormControl>
                <InputLabel>Date</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="date" value={date}  type="date"/>
            </FormControl>
            <FormControl>
                <InputLabel>Money</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="money" value={money} type="number"/>
            </FormControl>
            <FormControl>
                <InputLabel>whereBy</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="whereby" value={whereby} />
            </FormControl>
            
            <Button variant="contained" onClick={() => addUserDetails()} color="primary">Add User</Button>
        </FormGroup>
    )
}

export default AddExpenseAndIncome;