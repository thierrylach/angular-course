import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements OnInit {

  @Input({required: true})
  course: Course;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  constructor() {

  }

  ngOnInit() {

  }

  onCourseViewed() {
    this.courseEmitter.emit(this.course);
  }

}
