const TURN_RIGHT = 'R';
const TURN_LEFT = 'L'

export class MarsRover {
  private currentDirection = 'N';
  execute(commands: string) {
    const xCoordinate = '0';
    const yCoordinate = '0';
    const directionArr = ['N', 'E', 'S', 'W'];

    if (commands.includes('R')) {
     this.turnRight(directionArr, commands);
    }
    if (commands.includes('L')) {
      this.turnLeft(directionArr, commands);
    }

    return this.generateOutputString(xCoordinate, yCoordinate);
  }

  private turnRight(directionArr: string[], commands: string) {
    this.currentDirection = directionArr[commands.length % 4];
  }

  private turnLeft(directionArr: string[], commands: string) {
      this.currentDirection = directionArr[(4 -commands.length % 4)];


  }

  private generateOutputString(xCoordinate: string, yCoordinate: string) {
    return `${xCoordinate}:${yCoordinate}:${this.currentDirection}`;
  }
}
