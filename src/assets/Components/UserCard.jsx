import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Avatar } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function UserCard({ user, onClick }) {
    if(user.avatar.includes("fakercloud")) return;
  return (
    <Card sx={{ display: 'flex', alignItems: 'center', mb: 2, p: 1, cursor: 'pointer', width: '23rem' }} onClick={onClick}>
      <CardMedia>
        {user?.avatar ? (
          <Avatar alt={user?.profile.username} src={user?.avatar} sx={{ width: 60, height: 60, m: 2 }} />
        ) : (
          <AccountCircleIcon sx={{ width: 60, height: 60, m: 2 }} />
        )}
      </CardMedia>
      <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <CardContent sx={{ padding: '8px 16px' }}>
          <Typography variant="h6">
            {user?.profile.firstName} {user?.profile.lastName}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {user?.jobTitle}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            {user?.location}
          </Typography>
          {user?.info && (
            <Typography variant="body2" color="text.secondary">
              {user?.info}
            </Typography>
          )}
        </CardContent>
      </Box>
    </Card>
  );
}
