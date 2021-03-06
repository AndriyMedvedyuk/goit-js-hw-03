function findBestEmployee(employees) {
  const employeesKeys = Object.keys(employees);

  let bestEmployeed = 0;
  let name;

  for (const key of employeesKeys) {
    if (employees[key] > bestEmployeed) {
      bestEmployeed = employees[key];
      name = key;
    }
  }
  return name;
}

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
