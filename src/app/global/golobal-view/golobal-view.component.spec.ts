import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GolobalViewComponent } from './golobal-view.component';

describe('GolobalViewComponent', () => {
  let component: GolobalViewComponent;
  let fixture: ComponentFixture<GolobalViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GolobalViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GolobalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
