import * as React from 'react';
// import { TodoRow } from './TodoRow';
import { ClickModel } from '../../models/Click';

interface ClickListProp {
  clicks: ClickModel;
}

export class ClickList extends React.Component<ClickListProp, any> {

  render() {

    let { clicks } = this.props;

    return (
      <div>
        <p>{clicks.user_name} - {clicks.click_count}</p>
      </div>
    );
  }
}
