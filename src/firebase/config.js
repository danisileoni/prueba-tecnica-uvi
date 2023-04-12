import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes, uploadString } from 'firebase/storage';
import {v4} from 'uuid';

const firebaseConfig = {
  apiKey: "AIzaSyCy8bQTmTyHC7tt81Wvstp_4lHszlGKbXk",
  authDomain: "prueba-tecnica-uv.firebaseapp.com",
  projectId: "prueba-tecnica-uv",
  storageBucket: "prueba-tecnica-uv.appspot.com",
  messagingSenderId: "399598763448",
  appId: "1:399598763448:web:05dc27c91d323af1f7e34d"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

function refFolder(){
  return v4();
}

function refJson(){
  
  return ref(storage, `${referenceFolder}/${v4()}.json`)
}

function reference(){
  
  return ref(storage, `${referenceFolder}/${v4()}`);
}

let referenceFolder = refFolder();

export async function uploadsfile(file) {
  refFolder();
  return await uploadBytes(reference(), file)
}

export async function uploadsform(form) {
  return await uploadString(refJson(), form);
}