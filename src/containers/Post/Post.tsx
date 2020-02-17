import React, { Component } from 'react';
import { withRouter, RouteComponentProps, NavLink } from 'react-router-dom';
import IPost from '../../models/post';
import User from '../../components/User';

import "./Post.scss"

interface PostState {
  loading: boolean,
}

interface PostProps {
  post: IPost,
  loading: boolean,
  getPostById(id: string | undefined): void,

  history: any,
}

interface Params {
  id?: string | undefined,
}

class PostPage extends Component<PostProps & RouteComponentProps<Params>, PostState> {
  constructor(props: any) {
    super(props);
    this.state = {
      loading: true,
    }
  }
  componentDidMount() {
    const { 
      getPostById, 
      match
    } = this.props;
    getPostById(match.params.id);
  }

  componentWillReceiveProps(nextProps: PostProps) {
    this.setState({loading: nextProps.loading})
  }

  renderAuthor = () => {
    const { author } = this.props.post || {};
    return (
      author ? <User user={author} /> : null
    )
  }

  renderBackButton = () => (
    <div>
      <NavLink to="/posts"><button className="BackButton">Back</button></NavLink>
    </div>
  )

  render() {
    const { post } = this.props;
    const { loading } = this.state;
    return (
      <div className="Post">
        { loading 
          ? <div className="Loading">Loading</div> 
          : (
            <>
              <h3 className="Title">{post?.title}</h3>
              <p className="Body">{post?.body}</p>
              {this.renderAuthor()}
              {this.renderBackButton()}
            </>
          )
        }
      </div>
    )
  }
}

export default withRouter(PostPage);
