//RegistrationForm.js
'use client';

import { useState } from 'react';

export default function RegistrationForm() {
  const [employeeId, setEmployeeId] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [gender, setGender] = useState('');
  const [agreement, setAgreement] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!agreement) {
      alert('You must agree to the terms and conditions.');
      return;
    }

    const newParticipant = {
      employeeId,
      employeeName,
      gender,
    };

    const response = await fetch('/api/register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newParticipant),
    });

    if (response.ok) {
      alert('Registration successful!');
      setEmployeeId('');
      setEmployeeName('');
      setGender('');
      setAgreement(false);
    } else {
      alert('Failed to register. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-group">
        <label>Employee ID</label>
        <input
          type="text"
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
          className="input"
          required
        />
      </div>
      <div className="form-group">
        <label>Employee Name</label>
        <input
          type="text"
          value={employeeName}
          onChange={(e) => setEmployeeName(e.target.value)}
          className="input"
          required
        />
      </div>
      <div className="form-group">
        <label>Gender</label>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="input"
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Prefer not to say</option>
        </select>
      </div>
      <div className="form-group">
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={agreement}
            onChange={(e) => setAgreement(e.target.checked)}
            className="checkbox"
          />
          I agree to the terms and conditions
        </label>
      </div>
      <button type="submit" className="button">
        Register
      </button>
    </form>
  );
}
