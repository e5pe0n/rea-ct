type Transform = {
  (): void;
  (item: Brooch): void;
  (item: Compact): void;
};

// these expression are deprecated in readability.
// -> use function definition statement in case of overload.
const transform2: Transform = (item?: Brooch | Compact): void => {
  if (item instanceof Brooch) {
    console.log('Moon crystal power, make up!!');
  } else if (item instanceof CosmicCompact) {
    console.log('Moon cosmic power, make up!!!');
  } else if (item instanceof CrisisCompact) {
    console.log('Moon crisis, make up!');
  } else if (!item) {
    console.log('Item is fake...');
  }
}