export const authRemote = {
  login: async(email, password) => {
    const settings = {
      method: 'POST',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          "email": email,
          "password": password
      })
  };

  const response = await fetch('http://localhost/login/auth.php', settings);
  const data = await response.json();
  return data;
  },
  resetPassword: () => {},
};
