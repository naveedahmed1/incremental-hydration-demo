import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferedComponentComponent } from './defered-component.component';

describe('DeferedComponentComponent', () => {
  let component: DeferedComponentComponent;
  let fixture: ComponentFixture<DeferedComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferedComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeferedComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
