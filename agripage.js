const role = localStorage.getItem("role") || "farmer"; // Default to farmer
const feedContainer = document.getElementById('feed');

function submitQuestion() {
  const input = document.getElementById('questionInput');
  const questionText = input.value.trim();
  if (questionText === '') {
    alert('Please enter a question!');
    return;
  }

  const item = document.createElement('div');
  item.className = 'feed-item';
  item.innerHTML = `
    <div class="question">🟢 ${questionText}</div>
    <div class="answer">🌾 (Expert reply coming soon...)</div>
  `;
  feedContainer.prepend(item);

  input.value = '';
}

let currentExpert = '';
const chatModal = document.getElementById('chatModal');
const chatBody = document.getElementById('chatBody');
const chatExpertName = document.getElementById('chatExpertName');

function startChat(expertName) {
  currentExpert = expertName;
  chatExpertName.textContent = `Chat with ${expertName}`;
  chatBody.innerHTML = ''; // Clear previous messages
  chatModal.style.display = 'flex';
}

function closeChat() {
  chatModal.style.display = 'none';
}

function sendMessage() {
  const input = document.getElementById('chatMessage');
  const message = input.value.trim();
  if (message === '') return;

  const farmerMsg = document.createElement('div');
  farmerMsg.className = 'message farmer';
  farmerMsg.textContent = `👨‍🌾 You: ${message}`;
  chatBody.appendChild(farmerMsg);

  input.value = '';
  chatBody.scrollTop = chatBody.scrollHeight;

  // Simulate expert reply after 2 seconds
  setTimeout(() => {
    const reply = document.createElement('div');
    reply.className = 'message expert';
    reply.textContent = `🧑‍🔬 ${currentExpert}: Thanks for your question!`;
    chatBody.appendChild(reply);
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 2000);
}
function submitQuestion() {
  if (role !== 'farmer') {
    alert("Only farmers can ask questions.");
    return;
  }

  const input = document.getElementById('questionInput');
  const questionText = input.value.trim();
  if (questionText === '') {
    alert('Please enter a question!');
    return;
  }

  const item = document.createElement('div');
  item.className = 'feed-item';
  item.innerHTML = `
    <div class="question">🟢 ${questionText}</div>
    <div class="answer">🌾 <i>No answer yet</i></div>
    ${role === 'expert' ? `<button class="answer-btn" onclick="openModal(this)">Answer</button>` : ''}
  `;
  feedContainer.prepend(item);
  input.value = '';
}


