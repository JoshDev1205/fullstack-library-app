import { ApolloServer } from 'apollo-server'
import { makeSchema } from '@prisma/nexus'
import { nexusPrismaPlugin } from '@generated/nexus-prisma'
import { join } from 'path'
import Photon from '@generated/photon'
import { Context } from './types'
import Mutation from './Mutations'
import Query from './Queries'
import { Author, Book } from './RootTypes'

const photon = new Photon()

const nexusPrisma = nexusPrismaPlugin({
  photon: (ctx: Context) => ctx.photon
})

const schema = makeSchema({
  types: [Query, Mutation, Author, Book, nexusPrisma],
  outputs: {
    schema: __dirname + '/generated/schema.graphql',
    typegen: __dirname + '/generated/nexus-typegen.ts'
  },
  typegenAutoConfig: {
    sources: [
      {
        source: '@generated/photon',
        alias: 'photon'
      },
      {
        source: join(__dirname, 'types.ts'),
        alias: 'ctx'
      }
    ]
  }
})

const server = new ApolloServer({
  schema,
  context: { photon }
})

server.listen({ port: 4000 }, () => {
  console.log(`🚀 Server ready at http://localhost:4000`)
})
