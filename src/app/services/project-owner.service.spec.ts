import { TestBed } from '@angular/core/testing';

import { ProjectOwnerService } from './project-owner.service';

describe('ProjectOwnerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjectOwnerService = TestBed.get(ProjectOwnerService);
    expect(service).toBeTruthy();
  });
});
