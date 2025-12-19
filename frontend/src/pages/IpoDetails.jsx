import { useEffect, useState, useRef } from "react"
import { useParams, Link } from "react-router-dom"
import ClipLoader from "react-spinners/ClipLoader"
import { FiDownload } from "react-icons/fi"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"
import "./IpoDetails.css"

function IpoDetails() {
  const { id } = useParams()
  const [ipo, setIpo] = useState(null)
  const [loading, setLoading] = useState(true)

  const pdfRef = useRef()
  

  useEffect(() => {
    fetch(`hhttps://ventura-assignment-8vzg.onrender.com/ipos/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log("Fetched IPO:", data)
        setIpo(data)
        setLoading(false)
      })
  }, [id])

  const downloadPDF = () => {
    const input = pdfRef.current
    html2canvas(input, { scale: 2 }).then(canvas => {
      const imgData = canvas.toDataURL("image/png")
      const pdf = new jsPDF("p", "mm", "a4")
      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight)
      pdf.save(`${ipo.companyName}-details.pdf`)
    })
  }

  if (loading) {
    return (
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      }}>
        <ClipLoader size={60} color="#4f46e5" />
      </div>
    )
  }

  const timelineSteps = ipo.timeline ? Object.entries(ipo.timeline) : []

  return (
    <div className="details-container" ref={pdfRef}>
      <div className="header">
        <Link to="/" className="back-btn">← Back</Link>

        <div className="title-section">
          <h1>{ipo.companyName}</h1>
          <p>{ipo.aboutCompany.slice(0, 25)}...</p>
        </div>

        <div className="actions">
          <button className="apply-btn">Apply now</button>

          <button className="download-btn" onClick={downloadPDF}>
            <FiDownload size={18} /> Download
          </button>
        </div>
      </div>

      <div className="card details-card">
        <h2>IPO details</h2>

        <div className="detail-grid">
          <div>
            <span>Issue size</span>
            <p>₹{ipo.issueSize.min} – {ipo.issueSize.max} Cr.</p>
          </div>

          <div>
            <span>Price range</span>
            <p>₹{ipo.priceRange.min} – {ipo.priceRange.max}</p>
          </div>

          <div>
            <span>Minimum amount</span>
            <p>₹{ipo.minimumInvestment.amount.toLocaleString()}</p>
          </div>

          <div>
            <span>Lot size</span>
            <p>{ipo.minimumInvestment.shares} shares/lots</p>
          </div>

          <div>
            <span>Issue dates</span>
            <p>
              {new Date(ipo.issueDates.start).toLocaleDateString()} –
              {new Date(ipo.issueDates.end).toLocaleDateString()}
            </p>
          </div>

          <div>
            <span>Listed on</span>
            <p>
              {ipo.listedOn ? new Date(ipo.listedOn).toLocaleDateString() : "-"}
            </p>
          </div>

          <div>
            <span>Listed price</span>
            <p>₹{ipo.listedPrice || "-"}</p>
          </div>

          <div>
            <span>Listing gains</span>
            <p className="gains">
              ₹{ipo.listingGains?.amount || 0} ({ipo.listingGains?.percentage || 0}%)
            </p>
          </div>
        </div>
      </div>

      <div className="card timeline-card">
        <h2>IPO timeline</h2>

        {timelineSteps.length > 0 ? (
          <div className="horizontal-timeline">
            {timelineSteps.map(([key, value], index) => (
              <div className="timeline-item" key={key}>
                <div className="circle"></div>
                <p className="step-title">{key.replace(/([A-Z])/g, " $1")}</p>
                <p className="step-date">
                  {value ? new Date(value).toLocaleDateString() : "-"}
                </p>
                {index < timelineSteps.length - 1 && <div className="line"></div>}
              </div>
            ))}
          </div>
        ) : (
          <div className="no-timeline">
            <p>No timeline available</p>
          </div>
        )}
      </div>

      <div className="card about-card">
        <h2>About the company</h2>
        <p>{ipo.aboutCompany}</p>
      </div>
    </div>
  )
}

export default IpoDetails
