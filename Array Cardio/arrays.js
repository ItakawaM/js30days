const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
filtered_inventors = inventors.filter((inventor) => {
  return inventor.year >= 1500 && inventor.year < 1600;
});
console.table(filtered_inventors);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
inventors_full_names = inventors.map((inventor) => {
  return `${inventor.first} ${inventor.last}`;
});
console.log(inventors_full_names);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
sorted_inventors = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));
console.table(sorted_inventors);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
total_years = inventors.reduce((total_years, inventor) => {
  return total_years + inventor.passed - inventor.year;
}, 0);
console.log(`Total years lived: ${total_years}`);

// 5. Sort the inventors by years lived
inventors_years = inventors.sort((a, b) => {
  return a.passed - a.year > b.passed - b.year ? 1 : -1;
});
console.table(inventors_years);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
`const category = document.querySelector(".mw-category");
const links = Array.from(category.querySelector("a"));
const de = links
  .map((link) => link.textContent)
  .filter((name) => {
    return name.includes("de");
  });
console.table(de);`;

// 7. sort Exercise
// Sort the people alphabetically by last name
sorted_people = people.sort((a, b) => {
  const [aLast, aFirst] = a.split(", ");
  const [bLast, bFirst] = b.split(", ");

  return aLast > bLast ? 1 : -1;
});
console.table(sorted_people);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

groupby = data.reduce((table, entry) => {
  if (!table[entry]) table[entry] = 0;

  table[entry] += 1;
  return table;
}, {});
console.table(groupby);
