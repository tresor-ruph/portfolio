/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react"
import './card.scss'
import Summary from '../Modals/summary'
import {  } from "react-bootstrap/esm/Image"

const Card = ({ heading, paragraph, imgUrl, projectId,id, view, activity }) => {
  const displayProject = (id) => {
    view('details', id)
  }
  const [SummaryShow, setSummaryShow] = useState(false)
  const displayModal = () => {
    if (id=== 5) {
      setSummaryShow(true)

    }
  }
  const hideSummary=(x) => {
    setSummaryShow(x)
  }
  return (
    <div>
      {SummaryShow && <Summary show={SummaryShow} hide={hideSummary} />}
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
            <div className="activity-title"> <a onClick={() => displayModal()}>{heading}</a></div>
            <div className="activity-content">

            </div>
          </div>
        )
      }
    </div>
  )
}

export default Card