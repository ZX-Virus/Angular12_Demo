import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D3JSDemoComponent } from './d3-js-demo.component';

describe('D3JSDemoComponent', () => {
  let component: D3JSDemoComponent;
  let fixture: ComponentFixture<D3JSDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D3JSDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D3JSDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
