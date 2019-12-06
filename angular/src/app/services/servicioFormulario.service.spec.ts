import { TestBed } from '@angular/core/testing';

import { ServicioFormulario } from './servicioFormulario.service';

describe('servicioFormulario', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioFormulario = TestBed.get(ServicioFormulario);
    expect(service).toBeTruthy();
  });
});
