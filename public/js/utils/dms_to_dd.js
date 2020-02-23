
//THIS FUNCTION WILL BE USED IN A LATER VERSION OF THE APP, WHICH
//WILL ALSO INCLUDE THE COORDINATES OF NATIONAL FORESTS IN THE U.S.

const dmsToDd = (dm) => {

  const splitString = dm.split(' ');

  const latString = splitString[0];
  const longString = splitString[1];

  //extract d and m from string

  //counter that counts to 4 -- one number per d and m of both coordiantes.

  const filterOutNumbers = (string) => {
    let counter = 0;
    let d = '';
    let m = '';

    for (let i=0; i < string.length; i++) {
      if (counter == 0) {
        if (string[i] == '°') {
          counter++;
        } else if (!isNaN(+string[i])) {
          d += string[i];
        }
      } else {
        if (string[i] == "'") {
          break
        } else if (!isNaN(+string[i])) {
          m += string[i];
        }
      }
    }
    return [d, m];
  };

  const latDm = filterOutNumbers(latString);
  const longDm = filterOutNumbers(longString);

  console.log(latDm, longDm);

  const lat = +latDm[0] + (+latDm[1] / 60);
  const long = -longDm[0] + (-longDm[1] / 60);

  console.log(lat, long);

};


//test execution

//dmsToDd("32°30′N 110°40′W");
