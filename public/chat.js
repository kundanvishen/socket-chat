window.onload = function(){
	var messages = [];
	var socket = io.connect('http://localhost:3000');

	// get DOM Elements
	var field = document.getElementById('field');
	var sendButton = document.getElementById('send');
	var content = document.getElementById('content');

	socket.on('message', function(data) {
		if(data.message) {
			messages.push(data.message);
			var html = '';
			for (var i = 0; i < messages.length; i++) {
				html += messages[i] + '<br>';
			} // for() loop
			content.innerHTML = html;
		} else {
			console.log('Some problem occured', data);
		}
	});// sockets.on

	sendButton.onclick = function(){
		var text = field.value;
		socket.emit('send', {message: text});
	};

}