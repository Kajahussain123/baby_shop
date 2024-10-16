import React, { useState } from 'react';
import { Box, Avatar, Typography, IconButton, TextField, InputAdornment, Paper, List, ListItem, ListItemText } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';

const Chatbot = ({ open, handleClose }) => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    // Add the new message to the list
    setMessages([...messages, { text: inputValue, sender: 'user' }]);
    setInputValue(''); // Clear the input field
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  if (!open) return null;

  return (
    <Paper elevation={3} sx={{ width: 350, height: 550, borderRadius: 3, overflow: 'hidden', position: 'fixed', bottom: 20, right: 20, zIndex: 1000 }}>
      {/* Chat Header */}
      <Box sx={{ backgroundColor: '#1a73e8', color: 'white', p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box display="flex" alignItems="center">
          <Avatar src="/path/to/avatar.png" alt="Nelly" />
          <Box ml={2}>
            <Typography variant="h6">Hi, I'm Nelly!</Typography>
            <Typography variant="body2">I'm here to help, so if you have any questions, go ahead and ask me!</Typography>
          </Box>
        </Box>
        <IconButton onClick={handleClose} sx={{ color: 'white' }}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Chat Messages */}
      <Box sx={{ p: 2, height: '60%', overflowY: 'auto', backgroundColor: '#f5f5f5' }}>
        <List>
          {messages.map((message, index) => (
            <ListItem key={index} sx={{ textAlign: message.sender === 'user' ? 'right' : 'left' }}>
              <ListItemText
                primary={message.text}
                primaryTypographyProps={{
                  sx: {
                    backgroundColor: message.sender === 'user' ? '#e1f5fe' : '#ffffff',
                    borderRadius: 2,
                    padding: 1,
                    display: 'inline-block',
                  },
                }}
              />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Chat Input */}
      <Box sx={{ p: 1, borderTop: '1px solid #ccc', backgroundColor: '#fff',marginTop:"-7px" }}>
        <TextField
          variant="outlined"
          placeholder="Enter your question"
          fullWidth
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton color="primary" onClick={handleSendMessage}>
                  <SendIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Paper>
  );
};

export default Chatbot;
