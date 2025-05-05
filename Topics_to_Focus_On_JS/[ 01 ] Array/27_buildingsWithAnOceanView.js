function buildingsWithAnOceanView(buildingHeight) {
  const buildingNumbers = [];
  let buildingMaxHeight = -Infinity;

  for (let i = buildingHeight.length - 1; i >= 0; i--) {
    if (buildingHeight[i] > buildingMaxHeight) {
      buildingNumbers.push(i);
      buildingMaxHeight = buildingHeight[i];
    }
  }

  return buildingNumbers.reverse();
}

const buildingHeight = [1, 5, 3, 4, 2];
const res = buildingsWithAnOceanView(buildingHeight);
console.log(res);
