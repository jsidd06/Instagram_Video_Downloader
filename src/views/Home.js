import axios from 'axios';
import React, { useState } from 'react';

function Home() {
    const [downloadLink, setDownloadLink] = useState("")
    const [downloadLink2, setDownloadLink2] = useState("")
    // var options = {
    //   method: "GET",
    //   url: `https://murbil-instagram-media-download-v1.p.rapidapi.com/GetVideoLink`,
    //   params: { Url: downloadLink2 }
    //   headers: {
    //     "x-rapidapi-host": "murbil-instagram-media-download-v1.p.rapidapi.com",
    //     "x-rapidapi-key": "fe414cc81emshafef0d1b1c855cbp17df7djsn4a21f768c675",
    //   },
    // };

    const submitLinkHandler = (event) => {
        event.preventDefault();
        axios.get(
          "https://murbil-instagram-media-download-v1.p.rapidapi.com/GetVideoLink?Url=" +
            downloadLink2,
          {
            headers: {
              "x-rapidapi-host":
                "murbil-instagram-media-download-v1.p.rapidapi.com",
              "x-rapidapi-key":
                "fe414cc81emshafef0d1b1c855cbp17df7djsn4a21f768c675",
            },
          }
        ).then((response) => {
            console.log(response.data.VideoLink);
            setDownloadLink(response.data.VideoLink);
        }).catch((error) => {
            console.log(error);
        })
    //    axios
    //      .request(options)
    //      .then(function (response) {
    //        console.log(response.data);
    //           setDownloadLink(response.data.url);
    //      })
    //      .catch(function (error) {
    //        console.error(error);
    //      });
    }
  return <div>
    <h1>Home</h1>
    <input onChange={(e) => setDownloadLink2(e.target.value)} />
    <button onClick={submitLinkHandler}>Download</button>
  </div>;
}

export default Home;
