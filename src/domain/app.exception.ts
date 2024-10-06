/**
 * @description Core aplication exception.
 */
export default class AppException extends Error {
  /**
   * @description Http code exception.
   */
  public httpStatus: number;

  constructor(message: string, httpStatus: number = 500) {
    super(message);
    this.httpStatus = httpStatus;
  }
}