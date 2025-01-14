import { Coordinates } from "./coordinates.entity"

/**
 * @description Interface for store model.
 */
interface Store {  
  /**
   * @description Store identification.
   */
  storeId: string,
  
  /**
   * @description Store name.
   */
  storeName: string,
  
  /**
   * @description Store open status.
   */
  isOpen: boolean,
  
  /**
   * @description Store coordinates.
   */
  coordinates: Coordinates,
  
  /**
   * @description Store next delivery time.
   */
  nextDeliveryTime: Date
}

export type {
  Store
}