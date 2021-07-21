import { connect } from 'react-redux';
import StateBoard from './StateBoard.js';
import { add, sub, double, half } from './action.js';

const mapStateToProps = (state) => {
  return {
    value: state.calculator.value,
    value2: state.calculator2.value
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickAdd: () => {
      dispatch(add());
    },
    onClickSub: () =>{
      dispatch(sub());
    },
    onClickDouble: () => {
      dispatch(double());
    },
    onClickHalf: () =>{
      dispatch(half());
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StateBoard);