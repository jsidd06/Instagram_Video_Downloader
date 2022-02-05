import axios from 'axios';
import React, { useState } from 'react';

function Home() {
  const [downloadLink, setDownloadLink] = useState("");
  const [downloadLink2, setDownloadLink2] = useState("");

  // var options = {
  //   method: "GET",
  //   url: `https://murbil-instagram-media-download-v1.p.rapidapi.com/GetVideoLink`,
  //   params: { Url: downloadLink2 }
  //   headers: {
  //     "x-rapidapi-host": "murbil-instagram-media-download-v1.p.rapidapi.com",
  //     "x-rapidapi-key": "fe414cc81emshafef0d1b1c855cbp17df7djsn4a21f768c675",
  //   },
  // };

 var options = {
   method: "GET",
   url: "https://indianrailways.p.rapidapi.com/findstations.php",
   params: { station: downloadLink2 },
   headers: {
     "x-rapidapi-host": "indianrailways.p.rapidapi.com",
     "x-rapidapi-key": "fe414cc81emshafef0d1b1c855cbp17df7djsn4a21f768c675",
   },
 };

  const submitLinkHandler = (event) => {
    event.preventDefault();
    // axios
    //   .get(
    //     "https://livescore6.p.rapidapi.com/matches/v2/list-live? Category=" +
    //       downloadLink2 + 
    //     {
    //       headers: {
    //         "x-rapidapi-host": "livescore6.p.rapidapi.com",
    //         "x-rapidapi-key":
    //           "fe414cc81emshafef0d1b1c855cbp17df7djsn4a21f768c675",
    //       },
    //     }
    //   )
    //   .then((response) => {
    //     console.log(response);
    //     // setDownloadLink(response.data.data[0].link);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    axios
      .request(options)
      .then(function (response) {
        console.log(response);
        setDownloadLink(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  return (
    <div>
      <h1>Home</h1>
      <input onChange={(e) => setDownloadLink2(e.target.value)} />
      <button onClick={submitLinkHandler}>Check now</button>
      {downloadLink && (
        <div>
          <h1>{downloadLink.stations}</h1>
        </div>
      )}
    </div>
  );
}

export default Home;
