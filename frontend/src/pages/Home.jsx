import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import './Home.css'

function Home() {
  const [ipos, setIpos] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/ipos")
      .then(res => res.json())
      .then(data => setIpos(data))
  }, [])

  return (
    <div className="home-container">
      <table className="ipo-table">
        <thead>
          <tr>
            <th>Company / Issue date</th>
            <th>Issue size</th>
            <th>Price range</th>
            <th>Min invest/qty</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {ipos.map(ipo => (
            <tr key={ipo._id}>
              <td data-label="Company / Issue date">
                <div className="company">{ipo.companyName}</div>
                <div className="date">
                  {new Date(ipo.issueDates.start).toLocaleDateString()} -{" "}
                  {new Date(ipo.issueDates.end).toLocaleDateString()}
                </div>
              </td>

              <td className="bold" data-label="Issue size">
                ₹{ipo.issueSize.max} Crores
              </td>

              <td className="bold" data-label="Price range">
                ₹{ipo.priceRange.min}–{ipo.priceRange.max}
              </td>

              <td className="bold" data-label="Min invest/qty">
                ₹{ipo.minimumInvestment.amount.toLocaleString()}
                <div className="qty">
                  {ipo.minimumInvestment.shares} Shares/{ipo.minimumInvestment.lots} Lots
                </div>
              </td>

              <td data-label="">
                <Link to={`/ipo/${ipo._id}`} className="details-btn">
                  Get Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Home
