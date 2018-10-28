import { AdherentModule } from './adherent.module';

describe('AdherentModule', () => {
  let adherentModule: AdherentModule;

  beforeEach(() => {
    adherentModule = new AdherentModule();
  });

  it('should create an instance', () => {
    expect(adherentModule).toBeTruthy();
  });
});
