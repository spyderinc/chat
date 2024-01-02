document.addEventListener('DOMContentLoaded', function () {
    // Connect to the server (replace 'localhost:3000' with your server address)
    const socket = io.connect('http://localhost:3000');
  
    const chatDisplay = document.getElementById('chat-display');
    const messageInput = document.getElementById('message-input');
  
    // Listen for incoming messages
    socket.on('message', function (message) {
      appendMessage(message);
    });
  
    // Function to send a message
    window.sendMessage = function () {
      const message = messageInput.value.trim();
      if (message !== '') {
        // Emit the message to the server
        socket.emit('message', message);
        appendMessage('You: ' + message);
        messageInput.value = '';
      }
    };
  
    // Function to append a message to the chat display
    function appendMessage(message) {
      const p = document.createElement('p');
      p.textContent = message;
      chatDisplay.appendChild(p);
      // Scroll to the bottom of the chat display
      chatDisplay.scrollTop = chatDisplay.scrollHeight;
    }
  });
  