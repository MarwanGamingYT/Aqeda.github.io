// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AlzaSyBs5vV0jM-vSB5tzcJ-_oUfHevc8eKeAUl",
    authDomain: "t3alel-12.firebaseapp.com",
    projectId: "t3alel-12",
    storageBucket: "t3alel-12.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "1:802800407984:android:e9651dc6d7fbc91da17275",
    databaseURL: "https://t3alel-12.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Elements
const messagesContainer = document.getElementById('messages');
const chatForm = document.getElementById('chat-form');
const messageInput = document.getElementById('message-input');

// Fetch messages from Firebase
const messagesRef = ref(db, 'messages');
onValue(messagesRef, (snapshot) => {
    messagesContainer.innerHTML = ''; // Clear messages
    snapshot.forEach((childSnapshot) => {
        const message = childSnapshot.val();
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', message.sent ? 'sent' : 'received');
        messageElement.textContent = message.text;
        messagesContainer.appendChild(messageElement);
    });
    messagesContainer.scrollTop = messagesContainer.scrollHeight; // Auto-scroll
});

// Handle form submit
chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const messageText = messageInput.value;
    if (messageText.trim()) {
        push(messagesRef, { text: messageText, sent: true });
        messageInput.value = ''; // Clear input
    }
});
