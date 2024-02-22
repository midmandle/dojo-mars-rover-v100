import { MarsRover } from './mars-rover';

describe('marsRover', () => {
  it('should start at 0:0:N', () => {

    const marsRover = new MarsRover();

    expect(marsRover.execute("")).toEqual('0:0:N');
  });

  it.each([
    ['R','0:0:E'],
    ['RR','0:0:S'],
    ['RRR','0:0:W'],
    ['RRRRR','0:0:E'],
    ['L','0:0:W'],
    ['LL','0:0:S'],
    ['LLL','0:0:E'],
    ['LLLLL','0:0:W'],
  ])('should rotate %s to face %s', (input: string, output: string) => {

    const marsRover = new MarsRover();

    expect(marsRover.execute(input)).toEqual(output);
  });
});
