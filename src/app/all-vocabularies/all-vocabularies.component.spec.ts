import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllVocabulariesComponent } from './all-vocabularies.component';

describe('AllVocabulariesComponent', () => {
  let component: AllVocabulariesComponent;
  let fixture: ComponentFixture<AllVocabulariesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllVocabulariesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllVocabulariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
