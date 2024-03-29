import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EraPanelComponent } from './era-panel.component';

describe('EraPanelComponent', () => {
  let component: EraPanelComponent;
  let fixture: ComponentFixture<EraPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EraPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EraPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
