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

  @Input({required: true})
  index: number;

  @Input({required: true})
  count: number;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  constructor() {

  }

  ngOnInit() {

  }

  onCourseViewed() {
    this.courseEmitter.emit(this.course);
  }

  cardClasses() {
    return {
      'beginner': this.course.category == 'BEGINNER',
      'intermediate': this.course.category == 'INTERMEDIATE',
      'advanced': this.course.category == 'ADVANCED'
    }
  }

  cardStyles() {
    return {'text-decoration': 'underline'};
  }

}
