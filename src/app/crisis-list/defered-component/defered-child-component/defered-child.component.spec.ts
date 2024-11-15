import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferedChildComponentComponent } from './defered-child.component.component';

describe('DeferedChildComponentComponent', () => {
  let component: DeferedChildComponentComponent;
  let fixture: ComponentFixture<DeferedChildComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferedChildComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeferedChildComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
