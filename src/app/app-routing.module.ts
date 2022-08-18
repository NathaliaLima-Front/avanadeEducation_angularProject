import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailLessonComponent } from './views/detail-lesson/detail-lesson.component';

const routes: Routes = [
  { path: '', component: DetailLessonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
