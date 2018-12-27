import React from 'react'

const CatList = props => {
  const renderCats = () => {
    return props.catPics.map(cat => <img key={cat.id} src={cat.url} alt={cat.source_url} />)
  }

  return (
    <div>
      {renderCats()}
    </div>
  )
}

export default CatList