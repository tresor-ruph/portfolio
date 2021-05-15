/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react"
import './card.scss'

const Card = ({ heading, imgUrl, projectId,id, view, activityView, activity, summary }) => {

  const displayProject = (id) => {
    view('details', id)
  }

  const displayDetail = () => {
     activityView('details', id)
  }


  return (
    <div>
      {
        !activity ? (
          <div className="card " style={{ backgroundImage: "url(" + imgUrl + " )" }} >
            <div className="content">
              <h1 className="title">{heading}</h1>
              <button onClick={() => displayProject(projectId)} className="btn">
                Explore
                 </button>
            </div>
          </div>

        ) : (
          <div className="card3">
            <div className={summary ?"activity-title summary" : "activity-title"}> <a onClick={() => displayDetail()}>{heading}</a></div>
            <div className="activity-content">

            </div>
          </div>
        )
      }
    </div>
  )
}

export default Card