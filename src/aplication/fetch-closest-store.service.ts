import { StoreRepository } from "../domain/store.repository";
import { Store } from "../domain/store.entity";
import { Coordinates } from "../domain/coordinates.entity";

/**
 * @description Contains the FetchClosestStoreService uses cases
 */
export class FetchClosestStoreService {
  constructor(private storeRepository: StoreRepository) {}

  /**
   * @description Fetch use case
   * @param coordinates extends Coordinates entity
   * @returns Store object or null
   */
  async fetch(coordinates: Coordinates): Promise<Store | null> {
    return await this.storeRepository.fetchClosestStore(coordinates)
  }
}