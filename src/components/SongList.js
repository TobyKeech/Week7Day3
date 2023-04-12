import React from "react";
import Song from "./Song";

const SongList = ({chartSongs}) => {

    const chartSongs = songs.map((chartSong, index) => {
        return <Song chartSong={chartSong} key={index} />
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