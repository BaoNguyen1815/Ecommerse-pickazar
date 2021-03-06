import { plainToClass } from "class-transformer";
import Category from "../../admin/services/category/category.type";
import User from "../services/user/user.type";
const db = require('../../database_client')
export function loadUsers() : Promise<User[]>{
  return db.users.findAll({
    where:{
      // id : "12",
    },
    include:[{
      model:db.addresses,
      as:"address"
    },{
      model:db.contact,
      as :"contact"
    }]
  }).then((users :[User])=>{
    const user = users.map((user)=>{
      return{
        id: user.id,
        name:user.name,
        email: user.email,
        password: user.password,
        address:user.address.map(add=>{
          return{
            id:add.id,
            type:add.type == "0" ? "secondary":"primary",
            name:add.name,
            info:add.info,
          }
        }),
        contact:user.contact.map(cont=>{
          return{
            id:cont.id,
            type:cont.type == "0" ? "secondary":"primary",
            number:cont.number,
          }
        }),
        card: [
                  {
                    id: "179012",
                    type: "primary",
                    cardType: "paypal",
                    name: "Jhon Doe Smith",
                    lastFourDigit: 2349
                  },
                  {
                    id: "987234",
                    type: "secondary",
                    cardType: "master",
                    name: "Jhon Doe Smith",
                    lastFourDigit: 8724
                  },
                  {
                    id: "424987",
                    type: "secondary",
                    cardType: "visa",
                    name: "Jhon Doe Smith",
                    lastFourDigit: 4535
                  },
                  {
                    id: "455599",
                    type: "secondary",
                    cardType: "visa",
                    name: "Jhon Doe Smith",
                    lastFourDigit: 4585
                  }
                ]
      }
    })
    console.log(user)
    return user;
  })
}
// const loadUsers = (): User[] => {
//   return plainToClass(User, [
//     {
//       id: 1,
//       name: "Jhon Doe Smith",
//       email: "jhondDoe@demo.com",
//       address: [
//         {
//           id: "12312",
//           type: "primary",
//           name: "Home",
//           info: "27 Street, 2569 Heritage Road Visalia, CA 93291"
//         },
//         {
//           id: "23423",
//           type: "secondary",
//           name: "Office",
//           info: "33 Baker Street, Crescent Road, CA 65746"
//         }
//       ],
//       contact: [
//         {
//           id: "88234",
//           type: "primary",
//           number: "202-555-0191"
//         },
//         {
//           id: "23439",
//           type: "secondary",
//           number: "202-555-0701"
//         }
//       ],
//       card: [
//         {
//           id: "179012",
//           type: "primary",
//           cardType: "paypal",
//           name: "Jhon Doe Smith",
//           lastFourDigit: 2349
//         },
//         {
//           id: "987234",
//           type: "secondary",
//           cardType: "master",
//           name: "Jhon Doe Smith",
//           lastFourDigit: 8724
//         },
//         {
//           id: "424987",
//           type: "secondary",
//           cardType: "visa",
//           name: "Jhon Doe Smith",
//           lastFourDigit: 4535
//         },
//         {
//           id: "455599",
//           type: "secondary",
//           cardType: "visa",
//           name: "Jhon Doe Smith",
//           lastFourDigit: 4585
//         }
//       ]
//     },
//     {
//       id: 2,
//       name: "Jonathon Parker Doe ",
//       email: "jpdoe@demo.com",
//       address: [
//         {
//           id: "28764",
//           type: "primary",
//           name: "Home",
//           info: "43 Street, 2341 Road Visalia, Ny 24252"
//         },
//         {
//           id: "98242",
//           type: "secondary",
//           name: "Office",
//           info: "29 Eve Street, 543 Evenue Road, Ny 87876"
//         }
//       ],
//       contact: [
//         {
//           id: "12491",
//           type: "primary",
//           number: "202-555-0191"
//         },
//         {
//           id: "12462",
//           type: "secondary",
//           number: "202-555-0191"
//         }
//       ],
//       card: [
//         {
//           id: "345968",
//           cardType: "paypal",
//           name: "Jonathon Parker Doe",
//           lastFourDigit: 8723
//         },
//         {
//           id: "989433",
//           cardType: "master",
//           name: "Jonathon Parker Doe",
//           lastFourDigit: 4352
//         },
//         {
//           id: "787692",
//           cardType: "visa",
//           name: "Jonathon Parker Doe",
//           lastFourDigit: 2398
//         }
//       ]
//     }
//   ]);
// };

// export default loadUsers;
