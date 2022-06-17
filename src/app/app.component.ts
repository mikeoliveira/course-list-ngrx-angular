import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { CourseItem } from './store/models/courseItem.model';
import { AppState } from './store/models/app-state.model';
import { NgForm } from '@angular/forms';
import { AddItemAction } from './store/actions/course.action';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  courseItems$!: Observable<CourseItem[]>;
  courses!: any;
  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.courseItems$ = this.store.select((store) => store.course).pipe(
      map((resp:any) => {
        console.log(resp);
        return resp.course;
      })
    );
  }

  addCourse(form: NgForm) {
    this.store.dispatch(new AddItemAction(form.value));
    form.reset();
  }
}
