import React, { useEffect, useState } from 'react';
import { getUserDetails, updateUserDetails } from './api';

interface UserDetail {
  id: number;
  username: string;
  email: string;
}

const UserProfile: React.FC<{ userId: number }> = ({ userId }) => {
  const [userDetails, setUserDetails] = useState<UserDetail | null>(null);

  useEffect(() => {
    // Fetch user details when the component mounts
    fetchUserDetails(userId);
  }, [userId]);

  const fetchUserDetails = async (id: number) => {
    try {
      const user = await getUserDetails(id);
      setUserDetails(user);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  const handleUpdateEmail = async (newEmail: string) => {
    try {
      // Update user email when the user clicks a button
      await updateUserDetails(userId, { email: newEmail });
      // Refresh user details after the update
      fetchUserDetails(userId);
    } catch (error) {
      console.error('Error updating user email:', error);
    }
  };

  return (
    <div>
      {userDetails && (
        <div>
          <p>Username: {userDetails.username}</p>
          <p>Email: {userDetails.email}</p>
          <button onClick={() => handleUpdateEmail('newemail@example.com')}>
            Update Email
          </button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
