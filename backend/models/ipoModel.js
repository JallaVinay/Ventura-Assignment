const mongoose = require("mongoose");

const IpoSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
      trim: true
    },

    aboutCompany: {
      type: String,
      required: true,
      trim: true
    },

    logoLink: {
      type: String,
      required: true
    },

    issueDates: {
      start: { type: Date, required: true },
      end: { type: Date, required: true }
    },

    issueSize: {
      min: { type: Number, required: true },
      max: { type: Number },
      currency: { type: String, default: "INR" }
    },

    priceRange: {
      min: { type: Number, required: true },
      max: { type: Number, required: true },
      currency: { type: String, default: "INR" }
    },

    minimumInvestment: {
      amount: { type: Number, required: true },
      shares: { type: Number },
      lots: { type: Number }
    },

    lotSize: {
      shares: { type: Number },
      lots: { type: Number }
    },

    listedOn: {
      type: Date
    },

    listedPrice: {
      type: Number
    },

    listingGains: {
      amount: { type: Number },
      percentage: { type: Number }
    },

    timeline: {
      biddingStarts: { type: Date },
      biddingEnds: { type: Date },
      allotmentFinalization: { type: Date },
      refundInitiation: { type: Date },
      dematTransfer: { type: Date },
      listingDate: { type: Date }
    }
  },
  {
    timestamps: true
  }
);
const ipoModel = mongoose.model("Ipo", IpoSchema);
module.exports = ipoModel
