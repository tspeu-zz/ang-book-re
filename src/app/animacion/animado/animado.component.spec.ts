import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimadoComponent } from './animado.component';

describe('AnimadoComponent', () => {
  let component: AnimadoComponent;
  let fixture: ComponentFixture<AnimadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
