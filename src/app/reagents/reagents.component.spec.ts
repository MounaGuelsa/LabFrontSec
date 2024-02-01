import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReagentsComponent } from './reagents.component';

describe('ReagentsComponent', () => {
  let component: ReagentsComponent;
  let fixture: ComponentFixture<ReagentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReagentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReagentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
