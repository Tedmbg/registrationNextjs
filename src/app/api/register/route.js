// src/app/api/register/route.js
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request) {
  const { employeeId, employeeName, gender } = await request.json();

  const newParticipant = {
    employeeId,
    employeeName,
    gender,
  };

  const filePath = path.join(process.cwd(), 'src/app/data/participants.json');
  const fileData = fs.readFileSync(filePath, 'utf8');
  const participants = JSON.parse(fileData);

  participants.push(newParticipant);

  fs.writeFileSync(filePath, JSON.stringify(participants, null, 2));

  return NextResponse.json({ message: 'Registration successful!' });
}
