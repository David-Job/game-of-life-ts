import { Boolean } from "./Boolean";

export class Position {

  x: number;
  y: number;

  adjacentTo(_position: Position): Boolean {
    return Boolean.True();
  }

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}