import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './templates/header/header.component';
import { ToolbarComponent } from './templates/toolbar/toolbar.component';
import { FooterComponent } from './templates/footer/footer.component';
import { DetailLessonComponent } from './views/detail-lesson/detail-lesson.component';
import { CourseProgressComponent } from './components/course-progress/course-progress.component';
import { LessonModuleComponent } from './components/lesson-module/lesson-module.component';
import { QuestionsLessonModuleComponent } from './components/questions-lesson-module/questions-lesson-module.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToolbarComponent,
    FooterComponent,
    DetailLessonComponent,
    CourseProgressComponent,
    LessonModuleComponent,
    QuestionsLessonModuleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
