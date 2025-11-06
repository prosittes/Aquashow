// Importar Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

// Configuração do banco (O SEU!)
const firebaseConfig = {
  apiKey: "AIzaSyA8YU2zWN5A487sCl0GTC7Q_6J534bna",
  authDomain: "acquashow-piscinas.firebaseapp.com",
  projectId: "acquashow-piscinas",
  storageBucket: "acquashow-piscinas.firebasestorage.app",
  messagingSenderId: "823363612565",
  appId: "1:823363612565:web:d75f194bf4186febd8ea3c"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar banco Firestore
export const db = getFirestore(app);
