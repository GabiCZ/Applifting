import { CLICK_INCREMENT } from '../constants/actionTypes';
import { ClickModel } from '../models/Click';

const clicks = (state: ClickModel = {click_count: 0, user_name: ''}, action: any) => {
  switch (action.type) {
    case CLICK_INCREMENT:
      return Object.assign({}, state, {
        user_name: action.clicks_count.user_name,
        click_count: state.click_count + 1
      });

    default:
      return state;
  }
};

export default clicks;
