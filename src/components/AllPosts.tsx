import axios from "axios";
import { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostsAction, setAllPostsAction } from "../redux/PostsState";
import { Dispatch } from "redux";

interface AllPostsProps {}

const AllPosts: FunctionComponent<AllPostsProps> = () => {
  let posts = useSelector((state: any) => state.postsState.posts);
  const dispatch = useDispatch<Dispatch<PostsAction>>();
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => dispatch(setAllPostsAction(res.data)))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h3>ALL POSTS</h3>
      {posts.length ? (
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>title</th>
              <th>body</th>
              <th>userId</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post: any) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td>{post.userId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No posts</p>
      )}
    </>
  );
};

export default AllPosts;
