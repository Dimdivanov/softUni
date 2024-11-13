import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponentTestComponent } from './child-component-test.component';

describe('ChildComponentTestComponent', () => {
  let component: ChildComponentTestComponent;
  let fixture: ComponentFixture<ChildComponentTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildComponentTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildComponentTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
