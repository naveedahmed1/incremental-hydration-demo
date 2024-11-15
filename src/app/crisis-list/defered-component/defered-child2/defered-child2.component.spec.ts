import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferedChild2Component } from './defered-child2.component';

describe('DeferedChild2Component', () => {
  let component: DeferedChild2Component;
  let fixture: ComponentFixture<DeferedChild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferedChild2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeferedChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
