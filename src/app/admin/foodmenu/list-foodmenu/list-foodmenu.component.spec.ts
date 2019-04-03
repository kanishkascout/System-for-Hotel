import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFoodmenuComponent } from './list-foodmenu.component';

describe('ListFoodmenuComponent', () => {
  let component: ListFoodmenuComponent;
  let fixture: ComponentFixture<ListFoodmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFoodmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFoodmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
