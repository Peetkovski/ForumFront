import {User} from "./user";

export class Post {
  postId!: number;
  postTitle!: string;
  voteCount!: number;
  category!: string;
  postDescription!: string;
  dateCreated!: string;
  user!: User;
}
