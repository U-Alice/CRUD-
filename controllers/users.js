import { v4 as uuidv4 } from 'uuid';
let users =[]

export const createUser = (req, res)=>{
    
    
  let error = !req.body.lastName ? 'last name is required' : !req.body.age ? 'age is required' : !req.body.firstName ? 'firstName is required' : !req.body.age ? 'age is required' : !req.body.gender? 'gender is require' : ' '
    if( error != ' ')
    return res.status(400).send(error);

    let validGender = ['male', 'female']        
     error = typeof req.body.lastName != 'string' ?'lastname is required' : typeof req.body.age != 'number' ? 'age must be a number' :typeof req.body.firstName != 'string' ? 'firstName is required' :  !validGender.includes( req.body.gender) ? `gender must be ${validGender.join(' or ')}` : ' '
    if( error != ' ')
    return res.status(400).send(error);
    
    // console.log(req.body);
    
    let user ={
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        age:req.body.age,
        gender:req.body.gender
    };


    users.push( {...user, id:uuidv4()})
    // console.log(user)
    res.status(200).send(` user with the user name ${users[users.length - 1].firstName} added to the database`);
    
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
