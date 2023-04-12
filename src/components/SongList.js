import React from "react";
import Song from "./Song";

const SongList = ({songs}) => {

    const chartSongs = songs.map((chartSong, index) => {
        return <Song song={chartSong} key={index}/>
    })
    return (  
        <>
        <ul>
            {chartSongs}
        </ul>
        </>
    );
}
 
export default SongList;