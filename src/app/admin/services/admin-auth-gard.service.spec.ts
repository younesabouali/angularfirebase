import { TestBed } from "@angular/core/testing";

import { AdminAuthGardService } from "./admin-auth-gard.service";

describe("AdminAuthGardService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: AdminAuthGardService = TestBed.get(AdminAuthGardService);
    expect(service).toBeTruthy();
  });
});
