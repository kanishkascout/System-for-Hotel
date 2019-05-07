import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingsListComponent } from './weddings-list.component';

describe('WeddingsListComponent', () => {
  let component: WeddingsListComponent;
  let fixture: ComponentFixture<WeddingsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeddingsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddingsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
