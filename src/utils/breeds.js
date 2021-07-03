import * as data from './cat-and-dog-breeds.json';

const petTypes = Object.keys(data);
// console.log(petTypes);

const getBreeds = (name) => Object.entries(data[name]).map((element) => {
  const [key, animal] = element;
  animal.breed = key;
  return animal;
});

const cats = getBreeds('cat_breeds');
const dogs = getBreeds('dog_breeds');

// console.log(cats);

export { petTypes, cats, dogs };
