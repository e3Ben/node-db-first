import {getAllPeople} from './repository/personRepository'

const main = async (args: string[]) => {
   const people = await getAllPeople()
   console.log(people)
}

export {
    main
}
