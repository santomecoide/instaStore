import { Store } from "./store.entity";

/**
 * @description Generate array for random stores
 * @param max number of stores to generate
 * @returns array of stores
 */
const generateStores = (max: number): Store[] => {
  const stores: Store[] = [];

  for (let i = 1; i <= max; i++) {
    const store: Store = {
      storeId: `store_${i}`,
      storeName: `Store ${i}`,
      isOpen: Math.random() > 0.5,
      coordinates: {
        lon: parseFloat((Math.random() * 180 - 90).toFixed(6)),
        lat: parseFloat((Math.random() * 180 - 90).toFixed(6))
      },
      nextDeliveryTime: new Date(Date.now() + Math.random() * 1000000000)
    };

    stores.push(store);
  }

  return stores;
};

const stores = [
  {
    "storeId": "store_1",
    "storeName": "Store 1",
    "isOpen": true,
    "coordinates": {
      "lon": -12.5,
      "lat": -12.5
    },
    "nextDeliveryTime": new Date()
  },
  {
    "storeId": "store_2",
    "storeName": "Store 2",
    "isOpen": true,
    "coordinates": {
      "lon": 22.5,
      "lat": -22.5
    },
    "nextDeliveryTime": new Date()
  },
  {
    "storeId": "store_3",
    "storeName": "Store 3",
    "isOpen": true,
    "coordinates": {
      "lon": 30,
      "lat": 30
    },
    "nextDeliveryTime": new Date()
  },
  {
    "storeId": "store_4",
    "storeName": "Store 4",
    "isOpen": true,
    "coordinates": {
      "lon": -40,
      "lat": 40
    },
    "nextDeliveryTime": new Date()
  }
]

export {
  generateStores,
  stores
}