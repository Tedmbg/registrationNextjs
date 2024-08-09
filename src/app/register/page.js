// resister/page.js
import RegistrationForm from '../components/RegistrationForm';

export default function RegistrationPage() {
  return (
    <div className="p-8">
      <h2 className="text-3xl mb-4">Register for the Conference</h2>
      <RegistrationForm />
    </div>
  );
}
