import { objectType } from '@prisma/nexus'

const Query = objectType({
  name: 'Query',
  definition(t) {
    t.crud.findManyAuthor()
    t.crud.findOneAuthor()
    t.crud.findManyBook()
    t.crud.findOneBook()
  }
})

export default Query
