import { TestBed } from '@angular/core/testing';

import { ProgressCourseService } from './progress-course.service';

describe('ProgressCourseService', () => {
  let service: ProgressCourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgressCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
