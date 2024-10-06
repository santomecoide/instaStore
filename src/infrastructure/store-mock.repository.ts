import { calculateDistance } from "../aplication/coordinates.utils";
import { Coordinates } from "../domain/coordinates.entity";
import { Store } from "../domain/store.entity";
import { generateStores, stores } from "../domain/store.mock";
import { StoreRepository } from "../domain/store.repository";

/**
 * @description Contains the StoreMockRepository implementation
 */
export class StoreMockRepository implements StoreRepository {
  private stores: Store[];
  
  constructor() {
    // this.stores = generateStores(5000000);
    this.stores = stores
  }

  /**
   * @description Implement the fetchClosestStore service
   * @param coordinates extends Coordinates entity
   * @returns Store object or null
   */
  async fetchClosestStore(coordinates: Coordinates): Promise<Store | null> {
    const now = new Date()
    const storesWithDeliveryTodayAndOpen = this.stores.filter(store => {
      const currentDateStore = new Date(store.nextDeliveryTime)
      if (
        now.getFullYear() === currentDateStore.getFullYear() &&
        now.getMonth() === currentDateStore.getMonth() &&
        now.getDate() === currentDateStore.getDate() &&
        store.isOpen
      ) return true
      return false
    })
    if(storesWithDeliveryTodayAndOpen.length === 0) {
      return null
    }

    let closeStore = null
    let minDistance = null
    for (const store of storesWithDeliveryTodayAndOpen) {
      const distance = calculateDistance(
        store.coordinates.lat,
        store.coordinates.lon,
        coordinates.lat,
        coordinates.lon
      )

      if (minDistance === null) {
        closeStore = store
        minDistance = distance
      }

      if (distance < minDistance) {
        closeStore = store
        minDistance = distance
      }
    }

    return closeStore;
  }
}