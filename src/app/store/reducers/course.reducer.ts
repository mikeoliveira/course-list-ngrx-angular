
// // import the interface
import { CourseItem } from '../models/courseItem.model';
import * as CourseAction from '../actions/course.action';
// //create a dummy initial state

export interface CourseItemState {
  course: CourseItem[];
}

const initialState: CourseItemState = {
  course: [
    {
      id: '1',
      department: 'Computer Engineering',
      name: 'C++ Programming',
    },
  ],
};

export function CourseReducer(
  state: CourseItemState = initialState,
  action: CourseAction.AddItemAction
): CourseItemState {
  switch (action.type) {
    case CourseAction.CourseActionType.ADD_ITEM:
      return {
        ...state,
        course: [...state.course, action.payload]
      }
    default:
      return state;
  }
}
