import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotatoAddPrincipalComponent } from './botato-add-principal.component';

describe('BotatoAddPrincipalComponent', () => {
  let component: BotatoAddPrincipalComponent;
  let fixture: ComponentFixture<BotatoAddPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotatoAddPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotatoAddPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
