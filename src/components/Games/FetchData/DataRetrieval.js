import React, { useEffect, useState } from 'react'

function DataRetrieval() {
    const steamAPIKey = process.env.STEAM_API
    const [records, setRecords] = useState([])

    useEffect(() => {
        fetch(`http://api.steampowered.com/ISteamApps/GetAppList/v0002/?key=${steamAPIKey}&format=json`)
        .then(response => response.json())
        .then(data => setRecords({data}))
        .catch(err => console.log(err))
    }, [])

  return (
    <div>
      <ul>
        {records.map((list, index) => (
            <li key={index}>{list}</li>
        ))}
      </ul>
    </div>
  )
}

export default DataRetrieval
