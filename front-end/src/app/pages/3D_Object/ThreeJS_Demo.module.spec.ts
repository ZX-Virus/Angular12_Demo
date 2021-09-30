import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {DeloreanComponent} from "./components/delorean/delorean.component";
import {SHARED_COMPONENTS} from "@shared/shared-common.module";

describe('DeloreanComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        DeloreanComponent,
        ...SHARED_COMPONENTS
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(DeloreanComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
