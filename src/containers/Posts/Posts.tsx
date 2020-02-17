import React, { Component } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import Post from '../../models/post';

import "./Posts.scss"

interface PostsState {
  loading: boolean,
}

interface PostsProps {
  posts: Array<Post>,
  loading: boolean,
  getPosts(): void,
  getPostById(id: number): void,

  history: any,
}

class Posts extends Component<PostsProps & RouteComponentProps, PostsState> {
  constructor(props: any) {
    super(props);
    this.state = { loading: true };
  }
  componentDidMount() {
    const { getPosts } = this.props;
    getPosts();
  }

  componentWillReceiveProps(nextProps: PostsProps) {
    this.setState({loading: nextProps.loading})
  }

  showPost = (post: Post) => {
    const { history } = this.props;

    return () => {
      console.log(post.id)
      history.push(`/posts/${post.id}`)
    }
  }

  renderPostRow = (post: Post) => (
      <tr className="Row"
        onClick={this.showPost(post)} >
        <td>{post.id}</td>
        <td>{post.userId}</td>
        <td>{post.title}</td>
      </tr>
  )

  render() {
    const { posts } = this.props;
    const { loading } = this.state;
    return (
      <div className="Posts">
        <h1>Posts</h1>
        {loading
          ? (<div> Loading </div>)
          : (
          <table>
            <tr>
              <th>Id</th>
              <th>User Id</th>
              <th>Title</th>
            </tr>
            { posts.map(post => this.renderPostRow(post))}
          </table>
        )}
        
      </div>
    )
  }
}

export default withRouter(Posts);
