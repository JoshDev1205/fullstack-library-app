import Photon from '@generated/photon'
const photon = new Photon()

async function main() {
  const author1 = await photon.authors.create({
    data: {
      name: 'Gabriel Garcia Marquez',
      country: 'Colombia',
      books: {
        create: {
          title: 'Cien Años de Soledad',
          description: 'La historia de una familia',
          quantity: 5,
          price: 200,
        },
      },
    },
  })

  const author2 = await photon.authors.create({
    data: {
      name: 'Ricardo Palma',
      country: 'Perú',
      books: {
        create: {
          title: 'Tradiciones Peruanas',
          description: 'Libro sobre tradiciones',
          quantity: 15,
          price: 100,
        },
      },
    },
  })
  console.log({ author1, author2 })
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await photon.disconnect()
  })
