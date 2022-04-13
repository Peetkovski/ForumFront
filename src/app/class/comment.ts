import {User} from "./user";
import {Post} from "./post";

export class Comment {
  commentId!: number;
  comment!: string;
  voteCount!: number;
  dateCreated!: string;
  user!: User;
  post!: Post;
  postId!: number;
}
