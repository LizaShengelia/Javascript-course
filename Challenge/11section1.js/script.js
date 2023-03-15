
const checkDogs = function (dogsJulia, dogsKate) {
  const newJulia = dogsJulia.slice(1, -1);
  const bothData = newJulia.concat(dogsKate);
  bothData.forEach(function (num, i) {
    if (num <= 3) {
      //console.log(`Dog number ${i + 1} is still a puppy`);
    } else {
      // console.log(`Dog number ${i + 1} is an adult, and is ${num} years old`);
    }
  });
};

checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
