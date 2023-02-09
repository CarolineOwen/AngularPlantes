import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPlanteComponent } from './search-plante.component';

describe('SearchPlanteComponent', () => {
  let component: SearchPlanteComponent;
  let fixture: ComponentFixture<SearchPlanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPlanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchPlanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
