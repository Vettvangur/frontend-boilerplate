export interface IDrivable {   

  // Starts the car's ignition so that it can drive.
  start(): void;
  // Attempt to drive a distance. Returns true or false based on whether or not the drive was successful.
  drive(distance: number): boolean;
  // Give the distance from the start.
  getPosition(): number;
}

export default interface ICar extends IDrivable {
  type: string;
}