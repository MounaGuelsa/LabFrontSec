import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SousAnalyseComponent } from './sous-analyse.component';

describe('SousAnalyseComponent', () => {
  let component: SousAnalyseComponent;
  let fixture: ComponentFixture<SousAnalyseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SousAnalyseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SousAnalyseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
