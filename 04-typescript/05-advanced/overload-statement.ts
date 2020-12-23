class Brooch {
  pentagram = 'Silver Crystal';
}

type Compact = {
  silverCrystal: boolean;
};

class CosmicCompact implements Compact {
  silverCrystal = true;
  cosmicPower = true;
}

class CrisisCompact implements Compact {
  silverCrystal = true;
  moonChalice = true;
}

// In case of overload, function definition statement is better than arrow expression in readability.
function transform(): void;
function transform(item: Brooch): void;
function transform(item: Compact): void;
function transform(item?: Brooch | Compact): void {
  if (item instanceof Brooch) {
    console.log('Moon crystal power, make up!!');
  } else if (item instanceof CosmicCompact) {
    console.log('Moon cosmic power, make up!!!');
  } else if (item instanceof CrisisCompact) {
    console.log('Moon crisis, make up!');
  } else if (!item) {
    console.log('Moon prisim power, make up!');
  } else {
    console.log('Item is fake...');
  }
}

transform();
transform(new Brooch());
transform(new CosmicCompact());
transform(new CrisisCompact());