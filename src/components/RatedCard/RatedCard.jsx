import { PropTypes } from "prop-types"
import { IconStar } from "./IconStar"

export const RatedCard = ({ratedName = "Unknown"}) => {
  return (
    <article className="RatedCard">
      <div className="RatedCard-iconsContainer">
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
      </div>

      <span className="RatedCard-ratedText">Rated 5 Stars in {ratedName}</span>
    </article>
  )
}

RatedCard.propTypes = {
  ratedName: PropTypes.string,
}
