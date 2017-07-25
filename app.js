let express = require('express');
let io = require('socket.io');
let app = express();
let port = 3000;


app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) =>{
	res.render('default');
});

app.listen(port, ()=> {
	console.log('server listening on port: ' + port);
});