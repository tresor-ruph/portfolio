import './detailsCards.scss'

const DetailsCards = (props) => {
  return (
    <div className="card mb-3 main-card shadow">
    <div className="row no-gutters">
      <div >
        <img src={props.image} class="card-img" alt="test" />
      </div>
     
    </div>
  </div>
  )
};
export default DetailsCards;
