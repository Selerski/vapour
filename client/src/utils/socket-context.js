import io from 'socket.io-client';
import React from 'react';

export const socket = io(`${process.env.REACT_APP_HEROKU_URL}`);

export const SocketContext = React.createContext(
  socket
);