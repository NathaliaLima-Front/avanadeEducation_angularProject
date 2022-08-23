import { Component, OnInit } from '@angular/core';
import { ProgressCourseService } from 'src/app/services/progress-course.service';

@Component({
  selector: 'app-course-progress',
  templateUrl: './course-progress.component.html',
  styleUrls: ['./course-progress.component.sass']
})
export class CourseProgressComponent implements OnInit {
  progressPercentageReceived: any = "";
  totalModulesReceived: number = 0;
  completeModulesReceived: number = 0;

  constructor(private progressCourseService: ProgressCourseService) { }

  ngOnInit(): void {
    this.progressCourseService.progressPercentageReceived$.subscribe((value) => {
      this.progressPercentageReceived = value.progressPercentage;
      this.totalModulesReceived = value.totalModules;
      this.completeModulesReceived = value.completeModules;
    });
  }

}
