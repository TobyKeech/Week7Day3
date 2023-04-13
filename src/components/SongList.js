import React from "react";
import Song from "./Song";

const SongList = ({chartSongs}) => {

    const chartIems = chartSongs.map((song, index) => {
        return <Song chartSong={song} key={index} />
    })

    return (  
        <>
        <ol>
            {chartIems}
        </ol>
        </>
    );
}
 
export default SongList;