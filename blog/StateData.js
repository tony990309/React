import { connect } from 'react-redux';
import StateBoard from './StateBoard.js';
import { post } from './action.js';

const mapStateToProps = (state) => {
  return {
    boards: state.articleAdder.boards,
    articles: state.articleAdder.articles
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickPost: (article) => {
      dispatch(post(article));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StateBoard);