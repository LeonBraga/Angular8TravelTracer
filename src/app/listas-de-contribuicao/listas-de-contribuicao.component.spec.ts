import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasDeContribuicaoComponent } from './listas-de-contribuicao.component';

describe('ListasDeContribuicaoComponent', () => {
  let component: ListasDeContribuicaoComponent;
  let fixture: ComponentFixture<ListasDeContribuicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListasDeContribuicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListasDeContribuicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
