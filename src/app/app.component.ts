import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = [...COURSES];

  onCourseSelected(course: Course) {
    alert("Course Selected " + course);
  }


  trackCourse(index: number, course: Course) {
    return course.id;
  }

}
