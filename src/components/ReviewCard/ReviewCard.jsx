import { PropTypes } from "prop-types"

export const ReviewCard = ({ personName, reviewMessage, personPhoto }) => {
  return (
    <article className="ReviewCard">
      <div className="ReviewCard-personContainer">
        <img src={personPhoto} alt={`Photo of ${personName}`} className="ReviewCard-personPhoto" />

        <div className="ReviewCard-personNameContainer">
          <span className="ReviewCard-personName">{personName}</span>
          <span className="ReviewCard-verifiedBuyer">Verified Buyer</span>
        </div>
      </div>

      <p className="ReviewCard-reviewMessage">{`" ${reviewMessage} "`}</p>
    </article>
  )
}

ReviewCard.propTypes = {
  personName: PropTypes.string,
  reviewMessage: PropTypes.string,
  personPhoto: PropTypes.string,
}
