import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveCreditsComponent } from './active-credits.component';

describe('ActiveCreditsComponent', () => {
  let component: ActiveCreditsComponent;
  let fixture: ComponentFixture<ActiveCreditsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveCreditsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
