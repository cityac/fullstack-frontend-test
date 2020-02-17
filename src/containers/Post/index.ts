import { connect } from 'react-redux';

import { getPostById } from '../../store/actions/posts';

import Post from './Post';

const mapStateToProps = (state: any) => ({
  post: state.posts.currentPost,
  loading: state.posts.loading,
})

const mapDispatchToProps = {
  getPostById,
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
