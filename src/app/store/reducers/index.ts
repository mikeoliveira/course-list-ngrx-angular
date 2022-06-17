import { CourseItemState, CourseReducer } from "./course.reducer";
import { ActionReducerMap } from "@ngrx/store";

export const rootReducer = {};

export interface AppState {
  course: CourseItemState
}

export const reducers: ActionReducerMap<AppState, any> = {
  course: CourseReducer
};
