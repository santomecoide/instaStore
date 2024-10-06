import { Coordinates } from "./coordinates.entity";

/**
 * @description Request DTO for Coordinate interface.
 */
interface FetchClosestStoreRequestDTO extends Coordinates {}

export type {
  FetchClosestStoreRequestDTO
}