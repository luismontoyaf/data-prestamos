import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedCreditsComponent } from './closed-credits.component';

describe('ClosedCreditsComponent', () => {
  let component: ClosedCreditsComponent;
  let fixture: ComponentFixture<ClosedCreditsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClosedCreditsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosedCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
