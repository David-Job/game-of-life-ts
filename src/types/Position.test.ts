import { Boolean } from "./Boolean";
import { Position } from '../types/Position';

describe('Position should', () => {
  it('be adjacent to', () => {
    let position1 = new Position(0, 0);
    let position2 = new Position(0, 1);
    expect(position1.adjacentTo(position2)).toStrictEqual(Boolean.True());
  })
});