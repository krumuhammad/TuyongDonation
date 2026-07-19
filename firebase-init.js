// Shared Firebase bootstrap — imported by every page.
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {
  getFirestore, collection, addDoc, doc, getDoc, setDoc, updateDoc, deleteDoc,
  onSnapshot, query, orderBy, serverTimestamp, limit
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { firebaseConfig, DEFAULT_CONFIG } from "./firebase-config.js";

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export {
  onAuthStateChanged, signInWithEmailAndPassword, signOut,
  collection, addDoc, doc, getDoc, setDoc, updateDoc, deleteDoc,
  onSnapshot, query, orderBy, serverTimestamp, limit,
  DEFAULT_CONFIG
};

// Look up the staff role document for a logged-in user.
// Staff docs live at /staff/{uid} = { email, displayName, role: 'admin' | 'entry' }
export async function getStaffRole(uid){
  const snap = await getDoc(doc(db, "staff", uid));
  return snap.exists() ? snap.data() : null;
}
