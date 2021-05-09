import React from "react"
import './card.scss'

const Card = ({ heading, paragraph, imgUrl, projectId, view, activity }) => {
  const displayProject = (id) => {
    view('details', id)
  }
  return (
    <div
      className={!activity ? "card card-background" : "activity-Card"}
      style={{
        backgroundImage: "url(" + imgUrl + " )",
      }}
    >
      <div className="content">
        <h1 className="title">{heading}</h1>
        <button
          onClick={() => displayProject(projectId)}
          className="btn"
        >
          Explore
        </button>
      </div>
    </div>
  )
}

export default Card