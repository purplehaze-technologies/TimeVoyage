import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EraContainerComponent } from './era-container.component';

describe('EraContainerComponent', () => {
  let component: EraContainerComponent;
  let fixture: ComponentFixture<EraContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EraContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EraContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
