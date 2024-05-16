import { useEffect } from 'react';

const Profile = () => {
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Make API call with token in headers
      fetch('/api/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => {
        // Handle response
      });
    }
  }, []);
  return <div>Profile Page</div>;
};
export default Profile;
