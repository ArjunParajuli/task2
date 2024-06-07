import React, { useState } from 'react';
import UserCard from './UserCard';
import { Box, Modal, Typography, Paper, Button, Avatar } from '@mui/material';

const Users = ({ userData = [] }) => {  
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleClose = () => {
    setSelectedUser(null);
  };

  if(userData.length===0) return;

  return (
    <div>
      {Array.isArray(userData) && <h1>Users</h1> }
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flex: 1 }}>
          {Array.isArray(userData) && userData.map((user, idx) => (  
            <UserCard key={idx} user={user} onClick={() => handleUserClick(user)} />
          ))}
        </Box>
        <Modal
          open={Boolean(selectedUser)}
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}
        >
          <Paper sx={{ width: 400, padding: 2, marginRight: '20px' }}>
            {selectedUser && (
              <div>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                  <Avatar
                    alt={selectedUser.profile.username}
                    src={selectedUser.avatar}
                    sx={{ width: 100, height: 100 }}
                  />
                </Box>
                <Typography variant="h6" align="center">
                  {selectedUser.profile.firstName} {selectedUser.profile.lastName}
                </Typography>
                <Typography variant="subtitle1" align="center">
                  {selectedUser.jobTitle}
                </Typography>
                <Typography variant="subtitle2" align="center">
                  {selectedUser.profile.email}
                </Typography>
                <Typography variant="body1" sx={{ marginTop: 2 }}>
                  {selectedUser.Bio}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ marginTop: 2 }}>
                  Joined on: {new Date(selectedUser.createdAt).toLocaleDateString()}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
                  <Button onClick={handleClose} variant="contained">Close</Button>
                </Box>
              </div>
            )}
          </Paper>
        </Modal>
      </Box>
    </div>
  );
};

export default Users;
