import { RatedCard } from "../RatedCard/RatedCard"
import { ReviewCard } from "../ReviewCard/ReviewCard"
import photoColtonSmith from "../../assets/image-colton.jpg"
import photoIreneRoberts from "../../assets/image-irene.jpg"
import photoAnneWallace from "../../assets/image-anne.jpg"

export const Main = () => {
  return (
    <main className="Main">
      <header className="Header">
        <div className="Header-textsContainer">
          <h1 className="Header-heading1">10,000+ of our users love our products.</h1>
          <p className="Header-paragraph">
            We only provide great products combined with excellent customer service.
            See what our satisfied customers are saying about our services.
          </p>
        </div>

        <div className="Header-ratedsContainer">
          <RatedCard ratedName="Reviews" />
          <RatedCard ratedName="Guru" />
          <RatedCard ratedName="BestTech" />
        </div>

      </header>

      <footer className="Footer">
        <ReviewCard 
          personName="Colton Smith"
          reviewMessage="We needed the same printed design as the one we had ordered a week prior.
          Not only did they find the original order, but we also received it in time.
          Excellent!" 
          personPhoto={photoColtonSmith}  
        />
        <ReviewCard 
          personName="Irene Roberts"
          reviewMessage="Customer service is always excellent and very quick turn around. Completely
          delighted with the simplicity of the purchase and the speed of delivery." 
          personPhoto={photoIreneRoberts}  
        />
        <ReviewCard 
          personName="Anne Wallace"
          reviewMessage="Put an order with this company and can only praise them for the very high
          standard. Will definitely use them again and recommend them to everyone!" 
          personPhoto={photoAnneWallace}  
        />
      </footer>
    </main>
  )
}
