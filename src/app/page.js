//page.js
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="home-page">
      <h2>Welcome to the Conference Registration Portal</h2>
      <p>This is the home page of our single-page application.</p>
      
      <div className="button-container">
        <Link href="/register">
          <button className="register-button button">Register</button>
        </Link>
        <Link href="/reports">
          <button className="reports-button button">View Reports</button>
        </Link>
      </div>
    </div>
  );
}
