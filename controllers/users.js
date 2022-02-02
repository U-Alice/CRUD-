import { v4 as uuidv4 } from 'uuid';
let users =[]

export const createUser = (req, res)=>{
    const user = req.body;
    console.log(req.body);
    users.push( {...user, id:uuidv4()})
    res.send(` user with the user name ${users[users.length - 1].firstName} added to the database`);
}
export const getUsers = (req, res)=>{
    // console.log(users)
    res.send(users);
}
export const getUser = (req,res)=>{
    const {id} =  req.params;
    const foundUser = users.find((user)=>user.id === id);
    res.send(foundUser)
    // res.send(users)
}
export const deleteUser = (req,res)=>{
    const {id} = req.params;

    users = users.filter((user)=> user.id !== id)
    res.send(`user with the id ${id} deleted from the database`)
}
export const updateUser = (req,res)=>{
    const {id} = req.params;
    const {firstname, lastname, age} = req.body;
    const user = users.find((user)=> user.id === id);

if(firstname) user.firstname = firstname;

if(lastname) user.lastname = lastname;

if(age) user.age = age;

res.send(`user with id ${id} has been changed`)
}
