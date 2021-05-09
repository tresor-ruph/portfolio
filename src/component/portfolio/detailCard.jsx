import React from "react"
// import './card.scss'

const DetailCard = ({ imgUrl }) => {
 
  return (
    <div
      className={ "card card-background"}
      style={{
        backgroundImage: "url(" + imgUrl + " )",
      }}
    >
      <div className="content">
      </div>
    </div>
  )
}

export default DetailCard