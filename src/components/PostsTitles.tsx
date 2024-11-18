import { FunctionComponent } from "react";
import { useSelector } from "react-redux";

interface PostsTitlesProps {}

const PostsTitles: FunctionComponent<PostsTitlesProps> = () => {
  let posts = useSelector((state: any) => state.postsState.posts);
  return (
    <>
      <h3>POSTS TITLES</h3>
      {posts.length ? (
        <ul>
          {posts.map((post: any) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      ) : (
        <p>No posts</p>
      )}
    </>
  );
};

export default PostsTitles;
