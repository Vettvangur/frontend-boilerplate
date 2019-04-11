// This is just an example, this repo does not contain react or type for react and therefore uses ts-ignore.

// @ts-ignore
import * as React from 'react'

interface ICar {
  type: string
}

interface IState {
  isRunning: boolean;
  distanceFromStart: number;
}


class ReactCar extends React.Component<ICar, IState> {
  static defaultProps: ICar = {
    type: "Toyota",
  }


  constructor(props: ICar) {
    super(props);
  }
  /**
  *   Starts the car's ignition so that it can drive.
  */
  public start() {
    // @ts-ignore
    this.setState({
      isRunning: true,
    })
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
    // @ts-ignore
    const newDistance = this.state.distanceFromStart + distance;
    // @ts-ignore
    if (this.state.isRunning) {
      // @ts-ignore
      this.setState({
        distanceFromStart: newDistance
      })
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
    // @ts-ignore
    return this.state.distanceFromStart;
  }
  public type(): string {
    // @ts-ignore
    return this.props.type
  }
}

export default ReactCar;
