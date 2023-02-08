import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPlanteComponent } from './list-plante.component';

describe('ListPlanteComponent', () => {
  let component: ListPlanteComponent;
  let fixture: ComponentFixture<ListPlanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPlanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPlanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
