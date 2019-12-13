import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListratingsComponent } from './listratings.component';

describe('ListratingsComponent', () => {
  let component: ListratingsComponent;
  let fixture: ComponentFixture<ListratingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListratingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListratingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
