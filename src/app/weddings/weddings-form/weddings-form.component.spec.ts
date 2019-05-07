import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingsFormComponent } from './weddings-form.component';

describe('WeddingsFormComponent', () => {
  let component: WeddingsFormComponent;
  let fixture: ComponentFixture<WeddingsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeddingsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddingsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
