import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesWebComponent } from './services-web.component';

describe('ServicesWebComponent', () => {
  let component: ServicesWebComponent;
  let fixture: ComponentFixture<ServicesWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesWebComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
