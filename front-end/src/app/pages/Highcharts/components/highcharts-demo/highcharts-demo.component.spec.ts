import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighchartsDemoComponent } from './highcharts-demo.component';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('HighchartsDemoComponent', () => {
  let component: HighchartsDemoComponent;
  let fixture: ComponentFixture<HighchartsDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighchartsDemoComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighchartsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
