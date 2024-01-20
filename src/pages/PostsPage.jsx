import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { jsonplaceholderApi } from "../api";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(response => response.json())
    //     .then(data => setPosts(data))
    let url
    const userId = searchParams.get("user");
    if (userId) {
      url = `/posts?userId=${userId}`;
    } else {
      url = "/posts";
    }
    const getPosts = async () => {
      const response = await jsonplaceholderApi.get(url);
      setPosts(response.data);
    };
    getPosts();
  }, []);

  const changeUserFilter = (userId) => {
    console.log(userId);
    setSearchParams({ user: userId });
    const getPosts = async () => {
        const response = await jsonplaceholderApi.get("/posts?userId=" + userId);
        setPosts(response.data);
      };
    getPosts();
  };

  const resetUserFilter = () => {
    setSearchParams({});
    const getPosts = async () => {
        const response = await jsonplaceholderApi.get("/posts");
        setPosts(response.data);
      };
    getPosts();
  };

  return (
    <div>
      <div className="userFilter">
        <button onClick={resetUserFilter}>Все посты</button>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((userId) => (
          <button key={userId} onClick={() => changeUserFilter(userId)}>
            User:{userId}
          </button>
        ))}
      </div>
      <ul>
        {posts &&
          posts.map((post) => (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default PostsPage;

// ?   sort=popular&
//     page=1&
//     fbrand=65084
