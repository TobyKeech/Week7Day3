import React, {useState, useEffect} from "react";
import SongList from "../components/SongList";


const chartSongContainer = () => {
    const [chartSongs,setChartSongs] = useState([]);

    useEffect(() => {
        getChartSongs();
    },[])

    const getChartSongs = function(){
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(response => response.json())
        .then(chartSongs => setChartSongs(chartSongs))
    }


    return ( 
        <>
            <SongList chartSongs={chartSongs} />
        </>
     );
}
 
export default chartSongContainer;