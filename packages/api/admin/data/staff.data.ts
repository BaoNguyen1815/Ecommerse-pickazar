import { plainToClass } from 'class-transformer';
import Staff from '../services/staff/staff.type';
const { Op } = require("sequelize");

const db = require('../../database.js')
const loadStaffs = (): Promise<Staff[]> => {
  return db.staffs.findAll({
    where: {
      role: {[Op.ne]: 'customer'}
    },
    include: {
      model: db.contacts
    }
    // raw: true
  }).then((data: any)=>{
  
    return data.map((staff: any)=>(
      {
        id: staff.id,
        first_name: staff.name,
        last_name: "",
        role: staff.role,
        email: staff.email,
        contact_number: staff.contacts[0] ? staff.contacts[0].number : 'None',
        creation_date: staff.creation_date ? staff.creation_date : new Date(),
      }
    ))
  })
}
//   return plainToClass(Staff, [
//     {
//       id: '1',
//       first_name: 'James',
//       last_name: 'Frank',
//       contact_number: '715-371-3507',
//       email: 'jameslfrank@jourrapide.com',
//       role: 'admin',
//       creation_date: new Date(),
//     },
//     {
//       id: '2',
//       first_name: 'Andre M.',
//       last_name: 'Pollock',
//       contact_number: '937-667-7660',
//       email: 'andreMPollock@jourrapide.com',
//       role: 'admin',

//       creation_date: new Date(),
//     },
//     {
//       id: '3',
//       first_name: 'Debra J.',
//       last_name: 'Nguyen',
//       contact_number: '508-588-8616',
//       email: 'debraJNguyen@rhyta.com',
//       role: 'manager',

//       creation_date: new Date(),
//     },
//     {
//       id: '4',
//       first_name: 'Erin E.',
//       last_name: 'Gonzales',
//       contact_number: '989-981-9455',
//       email: 'ErinEGonzales@teleworm.us',
//       role: 'member',

//       creation_date: new Date(),
//     },
//     {
//       id: '5',
//       first_name: 'Carolyn B.',
//       last_name: 'Coulter',
//       contact_number: '352-368-4009',
//       email: 'carolynBCoulter@dayrep.com',
//       role: 'member',

//       creation_date: new Date(),
//     },
//     {
//       id: '6',
//       first_name: 'Bryan G.',
//       last_name: 'Hathaway',
//       contact_number: '215-645-0615',
//       email: 'bryanGHathaway@jourrapide.com',
//       role: 'delivery boy',

//       creation_date: new Date(),
//     },
//     {
//       id: '7',
//       first_name: 'Tony L.',
//       last_name: 'Dematteo',
//       contact_number: '727-438-6098',
//       email: 'tonyLDematteo@jourrapide.com',
//       role: 'member',

//       creation_date: new Date(),
//     },
//     {
//       id: '8',
//       first_name: 'Leah M.',
//       last_name: 'Cassella',
//       contact_number: '208-610-3130',
//       email: 'leahMCassella@rhyta.com',
//       role: 'admin',

//       creation_date: new Date(),
//     },
//     {
//       id: '9',
//       first_name: 'James C.',
//       last_name: 'Chambers',
//       contact_number: '208-610-3130',
//       email: 'jamesCChambers@teleworm.us',
//       role: 'delivery boy',

//       creation_date: new Date(),
//     },
//     {
//       id: '10',
//       first_name: 'Mary R.',
//       last_name: 'Wills',
//       contact_number: '901-268-7845',
//       email: 'maryRWills@armyspy.com',
//       role: 'admin',

//       creation_date: new Date(),
//     },
//   ]);
// };

export default loadStaffs;
