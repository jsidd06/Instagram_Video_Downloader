import axios from 'axios';
import React, { useState } from 'react';

function Home() {
  const user = {
    name: 'akshay+besty',
    email: 'akshay@besty',
    password: 'akshaylovebesty',
    password_confirmation: 'akshaylovebesty',
  };
  Object.entries(user).map((y) => {
    console.log(y[0], y[1]);
  })
  const [downloadLink, setDownloadLink] = useState('');
  const [downloadLink2, setDownloadLink2] = useState("");
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
        <>
          <div>
            {console.log(downloadLink)}
            {downloadLink.stations.map((s) => (
              <>
                <h1>{s.stationName}</h1>
                <h1>{s.stationCode}</h1>
              </>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;


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
