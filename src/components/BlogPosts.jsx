import { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase';

const BlogPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const querySnapshot = await getDocs(collection(db, 'posts'));
      const postsData = querySnapshot.docs.map((doc) => doc.data());
      setPosts(postsData);
    };
    fetchPosts();
  }, []);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div>
      {posts.map((post, index) => (
        <div key={index} className="border-b p-4">
          <h2 className="text-2xl">{post.title}</h2>
          <p className="text-sm text-gray-500">{post.author} | {formatDate(post.timestamp.seconds * 1000)}</p>
          <img src={post.imageUrl} alt={post.title} className="my-2 w-full h-64 object-cover" />
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogPosts;
