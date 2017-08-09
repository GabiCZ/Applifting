import { Todo } from '../models/Todo';
import * as actionTypes from '../constants/actionTypes';


export const setVisibilityFilter = (filter: string) => {
  return {
    type: actionTypes.SET_VISIBILITY_FILTER,
    filter
  };
};



export const addTodo = (text: string)  => {
  return {
    type: actionTypes.ADD_TODO,
    text: text
  };
};

export const toggleTodo = (id: number) => {
  return {
    type: actionTypes.TOGGLE_TODO,
    id: id
  }
};




export const clickIncrement = (clicks: {
  user_name: string,
  click_count: number
})  => {
  return {
    type: actionTypes.CLICK_INCREMENT,
    clicks_count: clicks
  };
};

