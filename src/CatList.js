import React from 'react'

export default function CatList(props) {

  const renderCats = () => props.catPics.map(catPic => (<img src={catPic.url} />))

  console.log(props.catPics)
  return (
    <div>
    {renderCats()}
    </div>
  )
}
