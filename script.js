const lbs = document.getElementById('lbsInput');
const grams = document.getElementById('gramsOutput');
const kg = document.getElementById('kgOutput');
const oz = document.getElementById('ozOutput');

lbs.addEventListener('input', () => {
  grams.innerHTML = lbs.value / 0.0022046;
  kg.innerHTML = lbs.value / 2.2046;
  oz.innerHTML = lbs.value * 16;
})