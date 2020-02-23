
//IMPORTANT: THE populateMap() FUNCTION REQUIRES A MAPBOX ACCESS TOKEN.

//PARKS THAT DON'T HAVE COORDINATES
let otherParks = [];

const otherParksLink = document.getElementById('other-parks');

//IF USER CLICKS ON 'SEE OTHER PARKS NOT ON THE MAP'
const showOtherParks = () => {
  document.getElementById('other-park-absolute-container').style.display = 'block';
  console.log('OTHER PARKS NOT ON THE MAP:');

  //BUG FIX: CHECK TO SEE IF 'OTHER PARKS TEXT' ALREADY HAS TEXT. IF IT DOES,
  //TAKE IT OUT SO THAT IT WILL BE REPOPULATED WITH THE SAME TEXT IF THE USER
  //CLICKS ON THE 'OTHER PARKS LINK' AGAIN
  const e = document.getElementById('other-park-text');
  let child = e.lastElementChild;

  if (e.hasChildNodes()) {
    console.log('OTHER PARKS ALREADY LISTED');
    while (child) {
      e.removeChild(child);
      child = e.lastElementChild;
    }
  }

  for (let j=0; j < otherParks.length; j++) {

    const h3 = document.createElement("h3");
    h3.innerText = otherParks[j].fullName;
    document.getElementById('other-park-text').appendChild(h3);
    const br1 = document.createElement('br');
    document.getElementById('other-park-text').appendChild(br1);

    const link = document.createElement("a");
    link.href = otherParks[j].url;
    link.target = "_blank";
    link.innerText = otherParks[j].url;
    link.style.color = "lightgreen";
    document.getElementById('other-park-text').appendChild(link);
    const br2 = document.createElement('br');
    document.getElementById('other-park-text').appendChild(br2);
    const br3 = document.createElement('br');
    document.getElementById('other-park-text').appendChild(br3);

    const p = document.createElement('p');
    p.innerText = otherParks[j].description;
    document.getElementById('other-park-text').appendChild(p);
    const br4 = document.createElement('br');
    document.getElementById('other-park-text').appendChild(br4);

    console.log(otherParks[j]);
  }
};

const populateMap = (state, data) => {

  otherParks = [];

  mapboxgl.accessToken = 'INSERT MAPBOX ACCESS TOKEN HERE';
  let center, zoom;

  //EXTRACT CENTER COORDINATES AND ZOOM FROM stateCenters ARRAY
  for (let i=0; i < stateCenters.length; i++) {
    if (stateCenters[i].state === state) {
      center = stateCenters[i].coord;
      zoom = stateCenters[i].zoom;
      break
    }
  }

  const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center, // starting position [lng, lat]
  zoom // starting zoom
  });

  const geojson = {
    type: "FeatureCollection",
    features: []
  };

  const extractParkCoords = (latLong) => {
    const splitCoords = latLong.split(',');
    const newLat = splitCoords[0].replace("lat:", "");
    const newLong = splitCoords[1].replace("long:", "");
    const coordsArray = [Number(newLong), Number(newLat)];
    return coordsArray;
  };

  //COORDINATES OF PARKS THAT ARE ONLY IN THE CLICKED STATE
  const parkCoords = [];

  //CONSIDER ADDING A SEPARATE ARRAY FOR THE PARKS THAT ARE IN MULTIPLE STATES
  for (let i = 0; i < data.data.length; i++) {
    // data.data[i].states.length === 2 &&
    if (data.data[i].latLong) {
      parkCoords.push({
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: extractParkCoords(data.data[i].latLong)
        },
        properties: {
          title: data.data[i].fullName,
          description: data.data[i].description,
          url: data.data[i].url
        }
      });
    } else {
      otherParks.push({
        fullName: data.data[i].fullName,
        description: data.data[i].description,
        url: data.data[i].url
      });
    }
  }

  geojson.features = parkCoords;

  geojson.features.forEach(function(marker) {
  // create a HTML element for each feature
  const el = document.createElement('div');
  el.className = 'marker';
  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
    .setHTML(`<h3>${marker.properties.title}</h3>
      <a href=${marker.properties.url} target="_blank">${marker.properties.url}</a>
      <p>${marker.properties.description}</p>`))
    .addTo(map);
  });

  //MAKE "OTHER PARKS" LINK VISIBLE IF otherParks ARRAY EXISTS
  if (otherParks.length > 0) {
    otherParksLink.style.display = 'block';
  }

  otherParksLink.addEventListener('click', showOtherParks);

};
