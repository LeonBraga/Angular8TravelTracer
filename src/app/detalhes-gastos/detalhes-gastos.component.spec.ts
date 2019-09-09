import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesGastosComponent } from './detalhes-gastos.component';

describe('DetalhesGastosComponent', () => {
  let component: DetalhesGastosComponent;
  let fixture: ComponentFixture<DetalhesGastosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesGastosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesGastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
