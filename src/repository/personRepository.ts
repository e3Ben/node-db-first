import getDbConnection from '../getDbConnection'
import {PersonEntity} from '../scaffold-db'

const getAllPeople = async () => {
   const conn = await getDbConnection('scaffold-db') 
   const people:PersonEntity[] = await conn<PersonEntity>('Person').select('id', 'FirstName', 'LastName', 'Age')
   await conn.destroy()
   return people
}

export {
    getAllPeople,
}
