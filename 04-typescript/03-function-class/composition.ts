class Square2 {
  readonly name = 'square';
  side: number;

  constructor(side: number) {
    this.side = side;
  }

  getArea = (): number => new Rectangle(this.side, this.side).getArea();
}