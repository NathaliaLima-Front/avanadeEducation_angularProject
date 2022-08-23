import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-lesson-module',
  templateUrl: './lesson-module.component.html',
  styleUrls: ['./lesson-module.component.sass']
})
export class LessonModuleComponent implements OnInit {
  public lessons: any = [];
  
  constructor(public sanitizer: DomSanitizer) { }
  
  ngOnInit(): void {
    this.lessons = [
      {
        title: "Introdução ao curso de HTML",
        iconLesson: "<i class='fa-brands fa-html5'></i>",
        statusComplete: true,
        videoUrl: "https://www.youtube.com/embed/aNSrp_Q5sv0",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      },
      {
        title: "Entendendo o que é semântica",
        iconLesson: "<i class='bi bi-box-fill'></i>",
        statusComplete: true,
        videoUrl: "https://www.youtube.com/embed/jFGcLzF01Es",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      },
      {
        title: "Como usar textos e links em HTML",
        iconLesson: "<span class='material-icons'> format_color_text </span>",
        statusComplete: true,
        videoUrl: "https://www.youtube.com/embed/8Jqac2pq3os",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      },
      {
        title: "Como inserir imagens em seu site",
        iconLesson: "<i class='bi bi-card-image'></i>",
        statusComplete: false,
        videoUrl: "https://www.youtube.com/embed/4BciqeMsnpU",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      },
      {
        title: "Como organizar listas com HTML",
        iconLesson: "<span class='material-icons'> format_list_numbered </span>",
        statusComplete: false,
        videoUrl: "https://www.youtube.com/embed/cCVaTp0xBhg",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      },
      {
        title: "Introdução e conceitos básicos do CSS 3",
        iconLesson: "<i class='fa-brands fa-css3-alt'></i>",
        statusComplete: true,
        videoUrl: "https://www.youtube.com/embed/-5ruukmyaQc",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      },
      {
        title: "Estilizando elementos, textos e listas",
        iconLesson: "<i class='fa-solid fa-fill-drip'></i>",
        statusComplete: false,
        videoUrl: "https://www.youtube.com/embed/9sdYcyk8qDs",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      },
      {
        title: "Dimensão e alinhamento",
        iconLesson: "<span class='material-icons'> square_foot </span>",
        statusComplete: true,
        videoUrl: "https://www.youtube.com/embed/kWfkXhMqOTc",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      }
    ];

    this.lessons.forEach( (item: any) => {
      item.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(item.videoUrl);
    });
  }

}
