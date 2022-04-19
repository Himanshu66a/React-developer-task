import React from 'react'
import './display.css'

function Display({info}) {
  return (
    <>
    <div className='box'>
          <div>Info:{info.type}</div>
          <div>ID:{info.id}</div>
          <div>Title:{info.title}</div>
          <div>Popularity{info.popularity}</div>
          <div>
            
            <a href={info.url}>URL</a>
          </div>
          <div>DATE:{info.datetime_utc}</div>
          </div>
          </>
  )
}

export default Display

//type, id, datetime_utc, title, popularity, url.
