import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyseMesuresComponent } from './analyse-mesures.component';

describe('AnalyseMesuresComponent', () => {
  let component: AnalyseMesuresComponent;
  let fixture: ComponentFixture<AnalyseMesuresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyseMesuresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyseMesuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
