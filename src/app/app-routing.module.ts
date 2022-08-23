import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCoursesComponent } from './views/all-courses/all-courses.component';
import { DetailLessonComponent } from './views/detail-lesson/detail-lesson.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: AllCoursesComponent },
  { path: 'all-courses', component: AllCoursesComponent },
  { path: 'detail-lesson/:id', component: DetailLessonComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
