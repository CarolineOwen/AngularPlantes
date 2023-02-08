import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanteFormComponent } from './plante-form.component';

describe('PlanteFormComponent', () => {
  let component: PlanteFormComponent;
  let fixture: ComponentFixture<PlanteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanteFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
