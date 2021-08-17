import { ComponentFixture, TestBed } from '@angular/core/testing';
import {DeloreanComponent} from "./delorean.component";


describe('AgGridDemoComponent', () => {
  let component: DeloreanComponent;
  let fixture: ComponentFixture<DeloreanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeloreanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeloreanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
