import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewComponentTestComponent } from './new-component-test.component';

describe('NewComponentTestComponent', () => {
  let component: NewComponentTestComponent;
  let fixture: ComponentFixture<NewComponentTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewComponentTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewComponentTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
