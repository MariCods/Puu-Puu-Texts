import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
console.log('Post to the database'); 

const textDb = await openDB('editor', 1);

const tx = textDb.transaction('editor', 'readwrite');

const storage = tx.objectStore('editor');

const request = storage.add({content});

const result =await request;
console.log('Data saved to the database', result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getAllDb = async () => {
  console.log('GET all from the database');
const contactDb = await openDB('content', 1);

 
  const tx = textDb.transaction('content', 'readonly');

  
  const storage = tx.objectStore('content');

  const result = await request;
  console.log('result.value', result);
  return result;
};

initdb();
