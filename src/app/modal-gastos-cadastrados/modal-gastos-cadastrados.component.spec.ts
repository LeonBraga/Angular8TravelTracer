import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalGastosCadastradosComponent } from './modal-gastos-cadastrados.component';

describe('ModalGastosCadastradosComponent', () => {
  let component: ModalGastosCadastradosComponent;
  let fixture: ComponentFixture<ModalGastosCadastradosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalGastosCadastradosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalGastosCadastradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
