import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import { ClickList } from '../components/click/ClickList';
import { Todo } from '../models/Todo';


const mapStateToProps = (state: any) => {
  return {
    clicks: state.clicks
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onTodoClick: (id: number) => {
      dispatch(toggleTodo(id));
    }
  };
};

const CurrentClickList = connect(
  mapStateToProps,
  // mapDispatchToProps
)(ClickList as any);

export default CurrentClickList;
