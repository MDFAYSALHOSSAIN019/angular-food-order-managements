import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GolobalnavComponent } from './golobalnav.component';

describe('GolobalnavComponent', () => {
  let component: GolobalnavComponent;
  let fixture: ComponentFixture<GolobalnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GolobalnavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GolobalnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
