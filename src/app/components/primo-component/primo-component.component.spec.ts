import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimoComponentComponent } from './primo-component.component';

describe('PrimoComponentComponent', () => {
  let component: PrimoComponentComponent;
  let fixture: ComponentFixture<PrimoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
