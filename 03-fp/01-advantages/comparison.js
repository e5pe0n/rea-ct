// procedual programming
{
  const octuples = [];

  for (let i = 1; i <= 100; i++) {
    if (i % 8 === 0) {
      octuples.push(i);
    }
  }

  console.log(octuples);
}

// functional programming
{
  const range = (start, end) => [...new Array(end - start).keys()].map((n) => n + start);
  console.log(range(1, 101).filter((n) => n % 8 === 0));
}