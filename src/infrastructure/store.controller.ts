import { z } from "zod";
import { fromError } from 'zod-validation-error';
import { Request, Response } from "express";
import { ParsedQs } from "qs";
import { FetchClosestStoreService } from "../aplication/fetch-closest-store.service";
import { FetchClosestStoreRequestDTO } from "../domain/fetch-closest-store-request.dto";
import AppException from "../domain/app.exception";

/**
 * @description Contains the StoreController
 */
export class StoreController {
  constructor(private fetchClosestStoreService: FetchClosestStoreService) {}

  /**
   * @description Call FetchClosestStoreService use cases
   * @param req Request express model
   * @param res Response express model
   * @returns void
   */
  async fetchClosestStore(req: Request, res: Response) {
    const payload = req.query;

    try {
      const coordinates = this.parsePayload(payload)
      const closestStore = await this.fetchClosestStoreService.fetch(coordinates);
      
      if (closestStore) {
        res.status(200).json(closestStore);
      } else {
        throw new AppException("No store was found", 404)
      }
    } catch (error) {
      const appException = error as AppException
      res.status(appException.httpStatus).json({ message: appException.message });
    }
  }

  /**
   * @description Parse the controller payload
   * @param payload ParsedQs express model
   * @returns core FetchClosestStoreRequestDTO
   */
  private parsePayload (payload: ParsedQs): FetchClosestStoreRequestDTO {
    const lon = parseInt(payload.lon as string) || ''
    const lat = parseInt(payload.lat as string) || ''
    
    const schema = z.object({
      lon: z.number(),
      lat: z.number(),
    });

    const validation = schema.safeParse({ lon, lat });
    
    if (!validation.success) {
      const validationError = fromError(validation.error);
      throw new AppException(validationError.message, 400)
    }
    
    return {
      lon: validation.data.lon,
      lat: validation.data.lat
    }
  }
}
