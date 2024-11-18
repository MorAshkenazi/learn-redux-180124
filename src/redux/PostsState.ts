import Post from "../interfaces/Post";

// posts state
export class PostsState {
  public posts: Post[] = [];
}

// action type
export enum PostsActionType {
  AddPost = "AddPost",
  UpdatePost = "UpdatePost",
  DeletePost = "DeletePost",
  SetAllPosts = "SetAllPosts",
}

// action = type + payload
export interface PostsAction {
  type: PostsActionType;
  payload: any;
}

// actions creators
// components will use those functions in order to create an action and change the state
export function addPostAction(post: Post): PostsAction {
  return { type: PostsActionType.AddPost, payload: post };
}

export function updatePostAction(post: Post): PostsAction {
  return { type: PostsActionType.UpdatePost, payload: post };
}

export function deletePostAction(id: number): PostsAction {
  return { type: PostsActionType.DeletePost, payload: id };
}

export function setAllPostsAction(posts: Post[]): PostsAction {
  return { type: PostsActionType.SetAllPosts, payload: posts };
}

// reducer
export function postsReducer(
  currentState: PostsState = new PostsState(),
  action: PostsAction
): PostsState {
  // create a deep copy of currentState
  const newState: PostsState = {
    ...currentState,
    posts: [...currentState.posts],
  };
  switch (action.type) {
    case PostsActionType.AddPost:
      newState.posts.push(action.payload);
      break;
    case PostsActionType.UpdatePost:
      let indexToUpdate = newState.posts.findIndex(
        (p: Post) => p.id == action.payload.id
      );
      newState.posts[indexToUpdate] = action.payload;
      break;
    case PostsActionType.DeletePost:
      let indexToDelete = newState.posts.findIndex(
        (p: Post) => p.id == action.payload
      );
      newState.posts.splice(indexToDelete, 1);
      break;
    case PostsActionType.SetAllPosts:
      newState.posts = action.payload;
      break;
  }
  return newState;
}
