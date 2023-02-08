import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPlanteComponent } from './detail-plante.component';

describe('DetailPlanteComponent', () => {
  let component: DetailPlanteComponent;
  let fixture: ComponentFixture<DetailPlanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPlanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailPlanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
