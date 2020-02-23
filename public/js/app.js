//IMPORTANT: THE NATIONAL PARK SERVICE API REQUIRES AN API KEY

const npsURL = 'https://developer.nps.gov/api/v1/parks';
const apiKey = 'INSERT NPS API KEY HERE';

const fetchParkInfo = (stateCode) => {
  addOverlay();
  //ADD TEMPORARY 'LOADING MAP' TEXT
  const h1 = document.createElement("h1");
  //consider adding script to dynamically add full name of state that was clicked
  //consider adding an animated icon (trees) above the text
  h1.innerText = `Loading map and parks...`;
  h1.style.color = 'white';
  h1.style.textAlign = 'center';
  h1.style.lineHeight = '60vh';
  h1.style.wordWrap = 'normal';
  h1.style.fontFamily = 'Arial, Helvetica, sans-serif';
  document.getElementById('map').appendChild(h1);

  console.log(`${stateCode} clicked! Fetching park data...`);
  fetch(`${npsURL}?stateCode=${stateCode}&api_key=${apiKey}`).then((response) => {
    response.json().then((data) => {
      for (let i=0; i < data.data.length; i++) {
        console.log(data.data[i].fullName);
      }
      //REMOVE TEMPORARY 'LOADING' TEXT
      const e = document.getElementById('map');
      let child = e.lastElementChild;
      e.removeChild(child);

      populateMap(stateCode, data);
    });
  });
};

//REMOVE OVERLAY
const removeOverlay = () => {
  otherParksLink.style.display = 'none';
  backToMap();

  const e = document.getElementById('map');
  let child = e.lastElementChild;
  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }

  document.getElementById('overlay').style.display = 'none';
};

document.getElementById('remove-overlay').addEventListener('click', removeOverlay);

//BACK TO MAP (REMOVE 'OTHER PARKS' DIV THAT COVERS THE MAP)
const backToMap = () => {
  document.getElementById('other-park-absolute-container').style.display = 'none';
  //CLEAR CHILD ELEMENTS
  const e = document.getElementById('other-park-text');
  let child = e.lastElementChild;
  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }
}

document.getElementById('back-to-map').addEventListener('click', backToMap);

//ADD OVERLAY
const addOverlay = () => {
  document.getElementById("overlay").style.display = "block";
};

//CLICK EVENTS FOR EACH STATE
const ma = document.getElementById('MA');
const maCode = 'ma';
ma.addEventListener('click', ((maCode) => () => fetchParkInfo(maCode))(maCode));

const mn = document.getElementById('MN');
const mnCode = 'mn';
mn.addEventListener('click', ((mnCode) => () => fetchParkInfo(mnCode))(mnCode));

const mt = document.getElementById('MT');
const mtCode = 'mt';
mt.addEventListener('click', ((mtCode) => () => fetchParkInfo(mtCode))(mtCode));

const nd = document.getElementById('ND');
const ndCode = 'nd';
nd.addEventListener('click', ((ndCode) => () => fetchParkInfo(ndCode))(ndCode));

const hi = document.getElementById('HI');
const hiCode = 'hi';
hi.addEventListener('click', ((hiCode) => () => fetchParkInfo(hiCode))(hiCode));

const id = document.getElementById('ID');
const idCode = 'id';
id.addEventListener('click', ((idCode) => () => fetchParkInfo(idCode))(idCode));

const wa = document.getElementById('WA');
const waCode = 'wa';
wa.addEventListener('click', ((waCode) => () => fetchParkInfo(waCode))(waCode));

const az = document.getElementById('AZ');
const azCode = 'az';
az.addEventListener('click', ((azCode) => () => fetchParkInfo(azCode))(azCode));

const ca = document.getElementById('CA');
const caCode = 'ca';
ca.addEventListener('click', ((caCode) => () => fetchParkInfo(caCode))(caCode));

const co = document.getElementById('CO');
const coCode = 'co';
co.addEventListener('click', ((coCode) => () => fetchParkInfo(coCode))(coCode));

const nv = document.getElementById('NV');
const nvCode = 'nv';
nv.addEventListener('click', ((nvCode) => () => fetchParkInfo(nvCode))(nvCode));

const nm = document.getElementById('NM');
const nmCode = 'nm';
nm.addEventListener('click', ((nmCode) => () => fetchParkInfo(nmCode))(nmCode));

const or = document.getElementById('OR');
const orCode = 'or';
or.addEventListener('click', ((orCode) => () => fetchParkInfo(orCode))(orCode));

const ut = document.getElementById('UT');
const utCode = 'ut';
ut.addEventListener('click', ((utCode) => () => fetchParkInfo(utCode))(utCode));

const wy = document.getElementById('WY');
const wyCode = 'wy';
wy.addEventListener('click', ((wyCode) => () => fetchParkInfo(wyCode))(wyCode));

const ar = document.getElementById('AR');
const arCode = 'ar';
ar.addEventListener('click', ((arCode) => () => fetchParkInfo(arCode))(arCode));

const ia = document.getElementById('IA');
const iaCode = 'ia';
ia.addEventListener('click', ((iaCode) => () => fetchParkInfo(iaCode))(iaCode));

const ks = document.getElementById('KS');
const ksCode = 'ks';
ks.addEventListener('click', ((ksCode) => () => fetchParkInfo(ksCode))(ksCode));

const mo = document.getElementById('MO');
const moCode = 'mo';
mo.addEventListener('click', ((moCode) => () => fetchParkInfo(moCode))(moCode));

const ne = document.getElementById('NE');
const neCode = 'ne';
ne.addEventListener('click', ((neCode) => () => fetchParkInfo(neCode))(neCode));

const ok = document.getElementById('OK');
const okCode = 'ok';
ok.addEventListener('click', ((okCode) => () => fetchParkInfo(okCode))(okCode));

const sd = document.getElementById('SD');
const sdCode = 'sd';
sd.addEventListener('click', ((sdCode) => () => fetchParkInfo(sdCode))(sdCode));

const la = document.getElementById('LA');
const laCode = 'la';
la.addEventListener('click', ((laCode) => () => fetchParkInfo(laCode))(laCode));

const tx = document.getElementById('TX');
const txCode = 'tx';
tx.addEventListener('click', ((txCode) => () => fetchParkInfo(txCode))(txCode));

const ct = document.getElementById('CT');
const ctCode = 'ct';
ct.addEventListener('click', ((ctCode) => () => fetchParkInfo(ctCode))(ctCode));

const nh = document.getElementById('NH');
const nhCode = 'nh';
nh.addEventListener('click', ((nhCode) => () => fetchParkInfo(nhCode))(nhCode));

const ri = document.getElementById('RI');
const riCode = 'ri';
ri.addEventListener('click', ((riCode) => () => fetchParkInfo(riCode))(riCode));

const vt = document.getElementById('VT');
const vtCode = 'vt';
vt.addEventListener('click', ((vtCode) => () => fetchParkInfo(vtCode))(vtCode));

const al = document.getElementById('AL');
const alCode = 'al';
al.addEventListener('click', ((alCode) => () => fetchParkInfo(alCode))(alCode));

const fl = document.getElementById('FL');
const flCode = 'fl';
fl.addEventListener('click', ((flCode) => () => fetchParkInfo(flCode))(flCode));

const ga = document.getElementById('GA');
const gaCode = 'ga';
ga.addEventListener('click', ((gaCode) => () => fetchParkInfo(gaCode))(gaCode));

const ms = document.getElementById('MS');
const msCode = 'ms';
ms.addEventListener('click', ((msCode) => () => fetchParkInfo(msCode))(msCode));

const sc = document.getElementById('SC');
const scCode = 'sc';
sc.addEventListener('click', ((scCode) => () => fetchParkInfo(scCode))(scCode));

const il = document.getElementById('IL');
const ilCode = 'il';
il.addEventListener('click', ((ilCode) => () => fetchParkInfo(ilCode))(ilCode));

const indiana = document.getElementById('IN');
const inCode = 'in';
indiana.addEventListener('click', ((inCode) => () => fetchParkInfo(inCode))(inCode));

const ky = document.getElementById('KY');
const kyCode = 'ky';
ky.addEventListener('click', ((kyCode) => () => fetchParkInfo(kyCode))(kyCode));

const nc = document.getElementById('NC');
const ncCode = 'nc';
nc.addEventListener('click', ((ncCode) => () => fetchParkInfo(ncCode))(ncCode));

const oh = document.getElementById('OH');
const ohCode = 'oh';
oh.addEventListener('click', ((ohCode) => () => fetchParkInfo(ohCode))(ohCode));

const tn = document.getElementById('TN');
const tnCode = 'tn';
tn.addEventListener('click', ((tnCode) => () => fetchParkInfo(tnCode))(tnCode));

const va = document.getElementById('VA');
const vaCode = 'va';
va.addEventListener('click', ((vaCode) => () => fetchParkInfo(vaCode))(vaCode));

const wi = document.getElementById('WI');
const wiCode = 'wi';
wi.addEventListener('click', ((wiCode) => () => fetchParkInfo(wiCode))(wiCode));

const wv = document.getElementById('WV');
const wvCode = 'wv';
wv.addEventListener('click', ((wvCode) => () => fetchParkInfo(wvCode))(wvCode));

const de = document.getElementById('DE');
const deCode = 'de';
de.addEventListener('click', ((deCode) => () => fetchParkInfo(deCode))(deCode));

const dc = document.getElementById('DC');
const dcCode = 'dc';
dc.addEventListener('click', ((dcCode) => () => fetchParkInfo(dcCode))(dcCode));

const md = document.getElementById('MD');
const mdCode = 'md';
md.addEventListener('click', ((mdCode) => () => fetchParkInfo(mdCode))(mdCode));

const nj = document.getElementById('NJ');
const njCode = 'nj';
nj.addEventListener('click', ((njCode) => () => fetchParkInfo(njCode))(njCode));

const ny = document.getElementById('NY');
const nyCode = 'ny';
ny.addEventListener('click', ((nyCode) => () => fetchParkInfo(nyCode))(nyCode));

const pa = document.getElementById('PA');
const paCode = 'pa';
pa.addEventListener('click', ((paCode) => () => fetchParkInfo(paCode))(paCode));

const me = document.getElementById('ME');
const meCode = 'me';
me.addEventListener('click', ((meCode) => () => fetchParkInfo(meCode))(meCode));

const mi = document.getElementById('MI');
const miCode = 'mi';
mi.addEventListener('click', ((miCode) => () => fetchParkInfo(miCode))(miCode));

const ak = document.getElementById('AK');
const akCode = 'ak';
ak.addEventListener('click', ((akCode) => () => fetchParkInfo(akCode))(akCode));
