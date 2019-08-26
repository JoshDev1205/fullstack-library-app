import { objectType } from '@prisma/nexus'

const Mutation = objectType({
  name: 'Mutation',
  definition(t) {
    t.crud.createOneAuthor()
    t.crud.createOneBook()
    t.crud.updateOneAuthor()
    t.crud.updateOneBook()
    t.crud.deleteOneAuthor()
    t.crud.deleteOneBook()
  }
})

export default Mutation
