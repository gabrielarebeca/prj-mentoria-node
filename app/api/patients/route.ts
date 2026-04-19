import { NextResponse } from 'next/server'
import { listPatient } from '@/app/modules/patients/patients.repo'

export async function GET() {
  const patients = await listPatient()

  return NextResponse.json({ data: patients }, { status: 200 })
}
