import {ComponentFixture, TestBed} from '@angular/core/testing';
import {DeloreanComponent} from "./delorean.component";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";


describe('AgGridDemoComponent', () => {
  let component: DeloreanComponent;
  let fixture: ComponentFixture<DeloreanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeloreanComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
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
