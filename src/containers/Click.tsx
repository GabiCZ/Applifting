import * as React from 'react';
import { connect } from 'react-redux';
import { clickIncrement } from '../actions';
import { ClickForm } from '../components/click/ClickForm';
import { ClickModel } from '../models/Click';

interface AddTodoState {
  text: string;
}

interface ClickState {
  click_count: number;
  user_name: string;
}

class Click extends React.Component<any, ClickState> {

  constructor(props: any, context: any) {
    super(props, context);

    this.state = {
      click_count: 0,
      user_name: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.increaseClick = this.increaseClick.bind(this);
  }

  handleChange(event: any) {
    this.setTodo(event.target.value);
  }

  increaseClick(event: any) {
    event.preventDefault();
    if (!this.state.user_name) {
      return;
    }

    let { dispatch } = this.props;
    dispatch(clickIncrement({user_name: this.state.user_name,
                            click_count: this.state.click_count}));
  }

  setTodo(user_name: string) {
    this.setState({user_name: user_name});
  }

  render() {
    return (
      <ClickForm
        name={this.state.user_name}
        onSave={this.increaseClick}
        onChange={this.handleChange}/>
    );
  }
}

export default connect()(Click);
