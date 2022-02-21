const units = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

function indexUnit(unit: string): number {
  return units.indexOf(unit);
}


export default function convert(value: number, currUnit: string, unitConv: string): string {



  const result: number = value * Math.pow(10, indexUnit(unitConv) - indexUnit(currUnit));

  return `${result}${unitConv}`;
};
