import { useState } from 'react';

const SignupForm = () => {
  const [token, setToken] = useState('');
  const handleSignup = async () => {
    //api call krenge django server pr to register the user, document ma sa dekhkr
    const response = await fetch('/api/signup', {
      method: 'POST',
      body: JSON.stringify({ /* data add krenge */ }),
      headers: {
        'Content-Type': 'application/json',// backend walo sa puch kr
      },
    });

    const data = await response.json();
    if (data.token) {
      localStorage.setItem('token', data.token);
      setToken(data.token);
    }
  };
  return (
    <div>
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};
export default SignupForm;