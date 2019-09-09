import { TestBed } from '@angular/core/testing';

import { GastosUsuarioService } from './gastos-usuario.service';

describe('GastosUsuarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GastosUsuarioService = TestBed.get(GastosUsuarioService);
    expect(service).toBeTruthy();
  });
});
