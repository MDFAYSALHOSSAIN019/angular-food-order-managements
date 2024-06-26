import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomenavComponent } from './homenav.component';

describe('HomenavComponent', () => {
  let component: HomenavComponent;
  let fixture: ComponentFixture<HomenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomenavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
