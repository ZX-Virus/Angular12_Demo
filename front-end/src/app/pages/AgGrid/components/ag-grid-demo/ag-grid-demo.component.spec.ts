import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AgGridDemoComponent} from './ag-grid-demo.component';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('AgGridDemoComponent', () => {
  let component: AgGridDemoComponent;
  let fixture: ComponentFixture<AgGridDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgGridDemoComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
