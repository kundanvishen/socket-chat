let express = require('express');
let sockets = require('socket.io');
let app = express();
let port = 3000;


app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) =>{
	res.render('default');
});


let server = app.listen(port, ()=> {
	console.log('server listening on port: ' + port);
});

let io = sockets.listen(server);

io.sockets.on('connection', (socket) => {
	socket.emit('message', { message: 'Welcome to the chat' });
	socket.on('send', (data) => {
		io.sockets.emit('message', data);
	});
});


