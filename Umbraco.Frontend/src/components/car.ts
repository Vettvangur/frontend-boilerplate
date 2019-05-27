import { IDrivable } from 'types/ICar';

class Car implements IDrivable {
  private _isRunning: boolean;
  private _distanceFromStart: number;
  private _type: string;

  constructor() {
    this._isRunning = false;
    this._distanceFromStart = 0;
    this._type = "Toyota";
  }

  /**
  *   Starts the car's ignition so that it can drive.
  */
  public start() {
    this._isRunning = true;
    console.log("Started")
  }

  /**
  *   Attempt to drive a distance. Returns true or false based on whether or not the drive was successful.
  *
  *   @param {number} distance The distance attempting to cover
  *
  *   @returns {boolean} Whether or not the drive was successful
  */
  public drive(distance: number): boolean {
    if (this._isRunning) {
      this._distanceFromStart += distance;
      return true;
    }
    return false;
  }

  /**
  *   Gives the distance from starting position
  *
  *   @returns {number} Distance from starting position;
  */
  public getPosition(): number {
    return this._distanceFromStart;
  }
  public type(): string {
    return this._type;
  }
}

export default Car;
