import { Link } from "react-router-dom"

function IpoCard({ ipo }) {
  return (
    <div>
      <img src={ipo.logoLink} width="60" />
      <h3>{ipo.companyName}</h3>
      <Link to={`/ipo/${ipo._id}`}>View Details</Link>
    </div>
  )
}

export default IpoCard
