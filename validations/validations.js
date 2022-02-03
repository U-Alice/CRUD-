export const validateUser =(body)=>{
let error = !body.lastName ? 'last name is required' : !body.age ? 'age is required' : !body.firstName ? 'firstName is required' : !body.age ? 'age is required' : !body.gender? 'gender is require' : ' '
let validGender = ['male', 'female']  
if(error = ' '){
     error = typeof body.lastName != 'string' ?'lastname is required' : typeof body.age != 'number' ? 'age must be a number' :typeof body.firstName != 'string' ? 'firstName is required' :  !validGender.includes( body.gender) ? `gender must be ${validGender.join(' or ')}` : ' '
}

return error
}