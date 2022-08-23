import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.sass']
})
export class AllCoursesComponent implements OnInit {
  public courses: any = [];

  constructor() { }

  ngOnInit(): void {
    this.courses = [
      {
        titleCourse: "Introdução a criação de websites com HTML5 e CSS3",
        descriptionCourse: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        linkUrl: "/detail-lesson/1"
      },
      {
        titleCourse: "Introdução a criação de websites com Angular",
        descriptionCourse: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        linkUrl: "/detail-lesson/2"
      },
      {
        titleCourse: "Introdução a criação de websites com React",
        descriptionCourse: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        linkUrl: "/detail-lesson/3"
      }
    ]
  }

}

