import { Component, OnInit } from '@angular/core';
import { ProgressCourseService } from 'src/app/services/progress-course.service';

@Component({
  selector: 'app-detail-lesson',
  templateUrl: './detail-lesson.component.html',
  styleUrls: ['./detail-lesson.component.sass']
})
export class DetailLessonComponent implements OnInit {
  titleLesson: string = "";
  totalModules: number = 0;
  completeModules: number = 0;
  
  constructor(private progressCourseService: ProgressCourseService) { }

  ngOnInit(): void {
    this.titleLesson = "Introdução a criação de websites com HTML5 e CSS3";
    this.totalModules = 8;
    this.completeModules = 5;
    const calcCompleteModules = (this.completeModules / this.totalModules) * 100;
    this.progressCourseService.setProgress(calcCompleteModules, this.totalModules, this.completeModules);
  }
}
