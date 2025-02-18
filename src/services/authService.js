export const login = async (email, password) => {
    const response = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
      throw new Error('Invalid credentials');
    }
    return response.json();
  };
  
  export const register = async (firstName, email, password) => {
    const response = await fetch('http://localhost:5000/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ firstName, email, password }),
    });
    if (!response.ok) {
      throw new Error('Registration failed');
    }
    return response.json();
  };
  