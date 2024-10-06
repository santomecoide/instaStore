import { Coordinates } from "../domain/coordinates.entity";
import { StoreMockRepository } from "./store-mock.repository";
import { stores } from "../domain/store.mock";

describe('StoreMockRepository', () => {
  let storeRepository: StoreMockRepository;

  beforeEach(() => {
    storeRepository = new StoreMockRepository();
  });

  describe('fetchClosestStore', () => {
    it('should return closest store', async () => {
      const mockCoordinates: Coordinates = { lat: 10, lon: 10 };
      storeRepository['stores'] = stores;
  
      const result = await storeRepository.fetchClosestStore(mockCoordinates);

      console.log(result)
  
      expect(result).not.toBeNull();
    });
  })
  
});