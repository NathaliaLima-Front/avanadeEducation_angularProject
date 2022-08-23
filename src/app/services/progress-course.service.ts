import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressCourseService {
  private progressPercentage$ = new BehaviorSubject<any>({});
  progressPercentageReceived$ = this.progressPercentage$.asObservable();
  
  constructor() { }

  setProgress(progressPercentage: number, totalModules: number, completeModules: number) {
    const obj = {
      progressPercentage: progressPercentage,
      totalModules: totalModules,
      completeModules: completeModules
    }
    this.progressPercentage$.next(obj);
  }
}
