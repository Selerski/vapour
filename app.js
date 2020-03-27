const express = require("express"),
  http = require("http");
const socketio = require("socket.io");
const WebSocketServer = require("ws").Server;
const wss = new WebSocketServer({ port: process.env.PORT || 4000 });
const { wssHandler } = require('./signalling-server/signal-ws');
const cors = require('cors');
const socketHandler = require('./web-socket/socketHandler')

const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const MongoStore = require('connect-mongo')(session);

const PORT = process.env.PORT || 4000;

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
  pingTimeout: 30000
});

// Passport config
require("./config/passport")(passport);

// DB Config
const db = require("./config/keys").MongoURI;

//Connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected..."))
  .catch(e => console.log(e));

//CORS
app.use(cors({credentials: true, origin: 'https://5e7dda680caa3913093668db--awesome-jang-73379b.netlify.com'}));


//Bodyparser
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "10mb" }));

//Express Session
app.use(
  session({
    secret: 'mysecret',
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    resave: false,
    saveUninitialized: false
    // cookie: {maxAge: 60000}
  })
);

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());

wss.on("connection", wssHandler);

io.on('connection', socket => socketHandler(io, socket));

//Routes
app
  .use('/messages', require('./routes/messages'))
  .use('/users', require('./routes/users'));

server.listen(PORT, console.log(`Server started on port ${PORT}`));
