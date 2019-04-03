import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFoodmenuComponent } from './add-foodmenu.component';

describe('AddFoodmenuComponent', () => {
  let component: AddFoodmenuComponent;
  let fixture: ComponentFixture<AddFoodmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFoodmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFoodmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
