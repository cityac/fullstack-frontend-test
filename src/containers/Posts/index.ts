import { connect } from 'react-redux';

import { getPosts } from '../../store/actions/posts';

import Posts from './Posts';

const mapStateToProps = (state: any) => ({
  posts: state.posts.posts,
  loading: state.posts.loading,
})

const mapDispatchToProps = {
  getPosts,
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
