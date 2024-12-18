import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, auth } from '../firebase';

const savePost = async (title, content, imageUrl, author) => {
  try {
    await addDoc(collection(db, 'posts'), {
      title,
      content,
      imageUrl,
      author,
      timestamp: serverTimestamp(),
    });
    alert('Post saved successfully!');
  } catch (error) {
    console.error('Error saving post: ', error);
  }
};

export default savePost;
