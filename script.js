document.getElementById('send-button').addEventListener('click', function() {
      const userInput = document.getElementById('user-input');
      const chatWindow = document.getElementById('chat-window');
      const message = userInput.value.trim();

                                                            if (message) {
                                                                      // Display user's message
          const userMsgDiv = document.createElement('div');
                                                                      userMsgDiv.className = 'user-message';
                                                                      userMsgDiv.textContent = message;
                                                                      chatWindow.appendChild(userMsgDiv);

          // Clear input field
          userInput.value = '';

          // Simulate AI response
          setTimeout(() => {
                        const aiMsgDiv = document.createElement('div');
                        aiMsgDiv.className = 'ai-message';
                        aiMsgDiv.textContent = 'AI: This is a simulated response.';
                        chatWindow.appendChild(aiMsgDiv);

                                 // Scroll to the bottom of the chat window
                                 chatWindow.scrollTop = chatWindow.scrollHeight;
          }, 1000);
                                                            }
});
