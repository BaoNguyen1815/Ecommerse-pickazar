import { plainToClass } from "class-transformer";
import SignUp from "../services/signUp/signUp.type";
const db = require('../../database_client')
export function loadSignUp() : Promise<SignUp[]>{
    return db.users.findAll({}).then((users :[SignUp])=>{
        const user = users.map((user)=>{
          return{
            id: user.id,
            email: user.email,
            password: user.password,
        }
    })
    console.log(user[0])
    return user;
    })
}