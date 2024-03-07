import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WiewBoardDialogComponent } from './wiew-board-dialog.component';

describe('WiewBoardDialogComponent', () => {
  let component: WiewBoardDialogComponent;
  let fixture: ComponentFixture<WiewBoardDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WiewBoardDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WiewBoardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
