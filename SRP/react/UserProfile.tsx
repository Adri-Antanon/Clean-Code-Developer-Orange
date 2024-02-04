import React from 'react';

// Without SRP
const UserProfile: React.FC = () => {
  const fetchUserDetails = () => {
    // Fetch user details
  };

  const updateEmail = () => {
    // Update user email
  };

  return <div>{/* User profile rendering */}</div>;
};

// With SRP
const UserProfileSRP: React.FC = () => {
  const fetchUserDetails = () => {
    // Fetch user details
  };

  return <div>{/* User profile rendering */}</div>;
};

const EmailUpdater: React.FC = () => {
  const updateEmail = () => {
    // Update user email
  };

  return <div>{/* Email update UI */}</div>;
};
