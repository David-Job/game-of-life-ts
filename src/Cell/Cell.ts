import { Boolean } from '../types/Boolean';

export class Cell {
  alive: Boolean;

  constructor(alive: Boolean) {
    this.alive = alive;
  }

  isAlive() {
    return Boolean.False();
  }
}