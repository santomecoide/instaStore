import { Coordinates } from "./coordinates.entity";
import { Store } from "./store.entity";

/**
 * @description Contains the store services model
 */
export interface StoreRepository {
  /**
   * @description FetchClosestStore service model
   * @param coordinates extends Coordinates entity
   * @returns Store object or null
   */
  fetchClosestStore(coordinates: Coordinates): Promise<Store | null>;
}