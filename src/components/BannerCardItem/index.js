import './index.css'

// Write your code here.
const BannerCardItems = props => {
  const {BannerItemsDetails} = props
  const {headerText, description, className} = BannerItemsDetails
  return (
    <li className={`${className} banner-card-item`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="btn" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItems
