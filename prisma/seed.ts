import { prisma } from "../src/lib/prisma";


async function seed() {
    await prisma.event.create({
        data: {
            id: '65bb146f-56ac-4a48-a71c-ace4c30850c0',
            title: 'Unite Summit',
            slug: 'unite-summit',
            details: 'Um evento p/ DEVS apaixonados(as) por códigos!',
            maximumAttendees: 120,
        }
    })
    
}

seed().then(() => {
    console.log('Database sended')
    prisma.$disconnect()
})