import * as data from './cat-and-dog-breeds.json';

// const petTypes = []
// for (let key in data) {
//   petTypes.push(key)
// }

const petTypes = Object.keys(data);
// console.log(petTypes);

// const getBreeds = (name) => {
//   const arr = []
//   for (let key in data[name]) {
//     const obj = data[name][key]
//     obj.breed = key
//     arr.push(obj)
//   }
//   return arr
// }

const getBreeds = (name) => Object.entries(data[name]).map((element) => {
  const [key, animal] = element;
  animal.breed = key;
  return animal;
});

const cats = getBreeds('cat_breeds');
const dogs = getBreeds('dog_breeds');

// console.log(cats);

export { petTypes, cats, dogs };
