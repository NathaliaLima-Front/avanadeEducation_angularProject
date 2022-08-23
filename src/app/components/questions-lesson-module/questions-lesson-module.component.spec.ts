import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsLessonModuleComponent } from './questions-lesson-module.component';

describe('QuestionsLessonModuleComponent', () => {
  let component: QuestionsLessonModuleComponent;
  let fixture: ComponentFixture<QuestionsLessonModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionsLessonModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionsLessonModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
