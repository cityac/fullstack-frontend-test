import IUser from './user';

export default interface Post {
  id: string,

  userId: string,
  title: string,
  body: string,
  author: IUser,
}
