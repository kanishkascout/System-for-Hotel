import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealsItemComponent } from './meals-item.component';

describe('MealsItemComponent', () => {
  let component: MealsItemComponent;
  let fixture: ComponentFixture<MealsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
