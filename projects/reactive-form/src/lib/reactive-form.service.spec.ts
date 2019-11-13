import { TestBed } from '@angular/core/testing';

import { ReactiveFormService } from './reactive-form.service';

describe('ReactiveFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReactiveFormService = TestBed.get(ReactiveFormService);
    expect(service).toBeTruthy();
  });
});
