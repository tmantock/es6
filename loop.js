var locations = [];

locations.push({
  name: 'LA',
  weather: 100
},
{
  name: 'San Diego',
  weather: 56
});
for(let location of locations) {
  console.log(`It's ${location.weather} in ${location.name}`);
}
