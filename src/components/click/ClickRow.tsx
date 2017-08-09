import * as React from 'react';
import { ClickModel } from '../../models/Click';


export class ClickRow extends React.Component<any, any> {
  render() {

    let { onClick, click_count, user_name } = this.props;
    return (
      <div onClick={onClick} className="todo">
        <span className="todo-text">{user_name} - {click_count}</span>
      </div>
    );
  }
}
