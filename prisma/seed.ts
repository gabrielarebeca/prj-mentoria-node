import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
const prisma = new PrismaClient({ adapter })

const IDS = {
  OWNER: {
    GABRIELA_LEMES: '1',
    GABRIELA_REBECA: '2',
  },
  PATIENT: {
    ALFREDO: '1',
    ARWEN: '2',
  },
}

async function createOwners() {
  await prisma.owner.create({
    data: {
      id: IDS.OWNER.GABRIELA_REBECA,
      name: 'Gabriela Rebeca',
      phone: '1234567890',
    },
  })
  await prisma.owner.create({
    data: {
      id: IDS.OWNER.GABRIELA_LEMES,
      name: 'Gabriela Lemes',
      phone: '0987654321',
    },
  })
}

async function createPatients() {
  await prisma.patient.create({
    data: {
      id: IDS.PATIENT.ALFREDO,
      name: 'Alfredo',
      species: 'Cat',
    },
  })
  await prisma.patient.create({
    data: {
      id: IDS.PATIENT.ARWEN,
      name: 'Arwen',
      species: 'Cat',
    },
  })
}

async function createOwnersPatients() {
  await prisma.ownerPatient.create({
    data: {
      ownerId: '1',
      patientId: '1',
    },
  })
  await prisma.ownerPatient.create({
    data: {
      ownerId: '2',
      patientId: '2',
    },
  })
}

async function main() {
  await createOwners()
  await createPatients()
  await createOwnersPatients()
}

main().finally(() => {
  prisma.$disconnect()
})
