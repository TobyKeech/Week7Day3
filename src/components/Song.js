import React from "react";

const Song = ({chartSong}) => {
    return <li>{chartSong["im:name"]["label"]} by {chartSong["im:artist"]["label"]}</li>

}
 
export default Song;