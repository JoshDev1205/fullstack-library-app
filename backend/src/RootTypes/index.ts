import { objectType } from '@prisma/nexus'

export const Author = objectType({
  name: 'Author',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.country()
    t.model.books()
  }
})
export const Book = objectType({
  name: 'Book',
  definition(t) {
    t.model.id()
    t.model.title()
    t.model.description()
    t.model.quantity()
    t.model.price()
    t.model.author()
  }
})
