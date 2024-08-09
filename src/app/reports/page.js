//reports/page.js
import fs from 'fs';
import path from 'path';

export default function ReportsPage() {
  const filePath = path.join(process.cwd(), 'src/app/data/participants.json');

  let participants = [];

  if (fs.existsSync(filePath)) {
    const fileData = fs.readFileSync(filePath, 'utf8');
    participants = JSON.parse(fileData);
  } else {
    console.error(`File not found: ${filePath}`);
  }

  return (
    <div className="reports-page">
      <h2>Registered Participants</h2>
      {participants.length === 0 ? (
        <p>No participants registered yet.</p>
      ) : (
        <ul className="participant-list">
          {participants.map((participant, index) => (
            <li key={index} className="participant-item">
              <strong>ID:</strong> {participant.employeeId} <br />
              <strong>Name:</strong> {participant.employeeName} <br />
              <strong>Gender:</strong> {participant.gender}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
