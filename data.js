8const servicesData = [
  {
    id: 1,
    name: "Aadhaar Card - New Enrolment",
    category: "Identity",
    fee: "₹0 (Free)",
    time: "15 - 30 Days",
    eligibility: "All Indian Residents",
    desc: "New 12-digit biometric identity card issued by UIDAI.",
    docs: [
      "Proof of Identity (Passport, Voter ID, PAN Card, etc.)",
      "Proof of Address (Electricity Bill, Rent Agreement, Ration Card)",
      "Proof of Date of Birth (Birth Certificate, Class 10th marksheet)"
    ]
  },
  {
    id: 2,
    name: "Aadhaar Card - Demographic Update",
    category: "Identity",
    fee: "₹50",
    time: "5 - 15 Days",
    eligibility: "Existing Aadhaar Holders",
    desc: "Update Name, Address, Date of Birth, Gender, or Mobile Number.",
    docs: [
      "Original Aadhaar Card",
      "Valid Proof for change (e.g. Address Proof for address change)",
      "Registered Mobile Number for OTP verification"
    ]
  },
  {
    id: 3,
    name: "Aadhaar Card - Biometric Update",
    category: "Identity",
    fee: "₹100 (Free at age 5 & 15)",
    time: "5 - 15 Days",
    eligibility: "Existing Aadhaar Holders",
    desc: "Update fingerprints, iris scans, or photo (Mandatory at ages 5 and 15).",
    docs: [
      "Original Aadhaar Card",
      "Parent/Guardian Aadhaar (in case of minors)"
    ]
  },
  {
    id: 4,
    name: "PAN Card - New / Correction",
    category: "Identity",
    fee: "₹107 (Physical) / ₹0 (Instant e-PAN)",
    time: "7 - 15 Days",
    eligibility: "Indian Citizens / Taxpayers",
    desc: "Permanent Account Number for banking, financial & tax transactions.",
    docs: [
      "Aadhaar Card (Linked with Mobile for paperless OTP)",
      "Proof of Identity & Address (if applying offline)",
      "2 Passport Size Photographs"
    ]
  },
  {
    id: 5,
    name: "Voter ID Card (Form 6)",
    category: "Identity",
    fee: "₹0 (Free)",
    time: "15 - 30 Days",
    eligibility: "Indian Citizens (Age 18+)",
    desc: "Voter registration and EPIC card issuance by Election Commission of India.",
    docs: [
      "Age Proof (Birth Certificate / Aadhaar / 10th Marksheet)",
      "Delhi Address Proof (Water/Electricity Bill / Aadhaar)",
      "1 Passport Size Photograph"
    ]
  },
  {
    id: 6,
    name: "Income Certificate",
    category: "Certificates",
    fee: "₹0 (Free)",
    time: "14 Days",
    eligibility: "Delhi Residents",
    desc: "Official income certificate issued by Delhi Revenue Dept on e-District.",
    docs: [
      "Aadhaar Card of Applicant",
      "Delhi Address Proof (Electricity / Water / Rent)",
      "Self-Declaration of Family Income",
      "Salary Slip / ITR (if employed/taxpayer)",
      "1 Passport Size Photograph"
    ]
  },
  {
    id: 7,
    name: "OBC / SC / ST Caste Certificate",
    category: "Certificates",
    fee: "₹0 (Free)",
    time: "14 Days",
    eligibility: "Delhi Residents belonging to reserved categories",
    desc: "Caste certificate verification issued by SDM Office via Delhi e-District.",
    docs: [
      "Aadhaar Card of Applicant",
      "Father's Caste Certificate (Mandatory for verification)",
      "Delhi Residence Proof before 1993 (for OBC)",
      "Self-Declaration Form",
      "1 Passport Size Photograph"
    ]
  },
  {
    id: 8,
    name: "EWS Certificate (Economically Weaker Section)",
    category: "Certificates",
    fee: "₹0 (Free)",
    time: "21 Days",
    eligibility: "General Category with Annual Family Income < ₹8 Lakh",
    desc: "10% reservation certificate for general category in admissions & jobs.",
    docs: [
      "Aadhaar Cards of all family members",
      "Income Proof / ITR of last 3 years",
      "Property Documents / Land Records",
      "Delhi Residence Proof (Minimum 3 years)"
    ]
  },
  {
    id: 9,
    name: "Domicile Certificate",
    category: "Certificates",
    fee: "₹0 (Free)",
    time: "14 Days",
    eligibility: "Continuous Delhi Resident for 3+ years",
    desc: "Certificate proving permanent residence in Delhi for quotas and state schemes.",
    docs: [
      "Applicant Aadhaar Card",
      "Proof of continuous 3 years residence in Delhi (School certificates, utility bills)",
      "Self-Declaration Form",
      "Passport Size Photograph"
    ]
  },
  {
    id: 10,
    name: "Birth / Death Certificate",
    category: "Certificates",
    fee: "₹21 per copy",
    time: "3 - 7 Days",
    eligibility: "Registered births/deaths within Delhi MCD limits",
    desc: "Official civil registration certificates by MCD / NDMC.",
    docs: [
      "Institutional Hospital Discharge / Birth Slip",
      "Aadhaar of Parents / Informant",
      "Identity Proof of Deceased & Informant (for Death Certificate)"
    ]
  },
  {
    id: 11,
    name: "Learner Licence (LL)",
    category: "Transport",
    fee: "₹200 (₹150 App + ₹50 Test)",
    time: "Instant (Online Test)",
    eligibility: "Age 16+ (MCWOG) / Age 18+ (LMV)",
    desc: "Contactless faceless Learner Driving Licence via Parivahan Delhi.",
    docs: [
      "Aadhaar Card (with linked active mobile for faceless test)",
      "Age Proof (10th Marksheet / Birth Certificate)",
      "Self-Declaration Medical Fitness (Form 1)"
    ]
  },
  {
    id: 12,
    name: "Permanent Driving Licence (DL)",
    category: "Transport",
    fee: "₹500 (₹200 DL + ₹300 Test)",
    time: "7 - 14 Days (Post Driving Test)",
    eligibility: "Valid Learner Licence Holder (after 30 days of LL)",
    desc: "Permanent Driving Licence issued after automated track driving test in Delhi.",
    docs: [
      "Valid Learner Licence Number",
      "Aadhaar Card / ID Proof",
      "Automated Driving Test Slot Booking Receipt"
    ]
  },
  {
    id: 13,
    name: "Driving Licence Renewal",
    category: "Transport",
    fee: "₹200 (Within grace period)",
    time: "7 - 10 Days",
    eligibility: "Existing DL Holders approaching expiry",
    desc: "Online faceless DL renewal without visiting RTO.",
    docs: [
      "Original Expiring Driving Licence",
      "Aadhaar Card",
      "Medical Certificate (Form 1A - if age > 40 years)"
    ]
  },
  {
    id: 14,
    name: "Vehicle RC Ownership Transfer",
    category: "Transport",
    fee: "₹150 (Two-Wheeler) / ₹300-₹500 (Car)",
    time: "15 - 21 Days",
    eligibility: "Buyer & Seller of registered motor vehicle in Delhi",
    desc: "Transfer of Registration Certificate on sale of vehicle.",
    docs: [
      "Original RC (Registration Certificate)",
      "Form 29 & Form 30 (Signed by Buyer and Seller)",
      "Valid Vehicle Insurance & Active Pollution (PUCC)",
      "Aadhaar / Address Proof of Buyer"
    ]
  },
  {
    id: 15,
    name: "Fresh Passport (Normal - 36 Pages)",
    category: "Passport",
    fee: "₹1,500",
    time: "15 - 30 Days",
    eligibility: "Indian Citizens",
    desc: "Standard 10-year validity passport via Passport Seva Kendra (PSK).",
    docs: [
      "Aadhaar Card (Address & ID Proof)",
      "Proof of Date of Birth (Birth Certificate / 10th Marksheet)",
      "Non-ECR proof (Class 10th / Degree marksheet)"
    ]
  },
  {
    id: 16,
    name: "Tatkaal Passport (36 Pages)",
    category: "Passport",
    fee: "₹3,500 (₹1,500 online + ₹2,000 at PSK)",
    time: "1 - 3 Days (Post PSK visit)",
    eligibility: "Indian Citizens with urgent travel requirements",
    desc: "Expedited fast-track passport issuance under Tatkaal scheme.",
    docs: [
      "Aadhaar Card",
      "PAN Card / Voter ID / Bank Passbook (Any 3 standard ID proofs)",
      "Annexure-E Self-Declaration"
    ]
  },
  {
    id: 17,
    name: "Delhi Police PCC (Police Clearance Certificate)",
    category: "Passport",
    fee: "₹250 (Delhi Police Portal) / ₹500 (PSK)",
    time: "7 - 14 Days",
    eligibility: "Delhi residents applying for visa, employment, or immigration",
    desc: "Background clearance certificate issued by Delhi Police Special Branch.",
    docs: [
      "Aadhaar Card & Passport Copy",
      "Delhi Address Proof (Electricity / Rent Agreement)",
      "Agency / Embassy Letter requiring PCC"
    ]
  },
  {
    id: 18,
    name: "Delhi Old Age & Widow Pension",
    category: "Pension",
    fee: "₹0 (Free)",
    time: "30 - 45 Days",
    eligibility: "Senior Citizens (60+) / Widows with Family Income < ₹1 Lakh",
    desc: "Monthly financial pension assistance of ₹2,000 - ₹2,500 by Delhi Govt.",
    docs: [
      "Aadhaar Card & Age Proof",
      "Delhi Residence Proof (Minimum 5 years residence)",
      "Income Certificate / BPL Card",
      "Single Operator Bank Passbook (Aadhaar linked)",
      "Death Certificate of Husband (for Widow Pension)"
    ]
  },
  {
    id: 19,
    name: "Delhi Mukhyamantri Mahila Samman / Lakshmi Yojna",
    category: "Schemes",
    fee: "₹0 (Free)",
    time: "21 - 30 Days",
    eligibility: "Delhi female resident (Age 18+), Delhi Voter ID holder, Non-taxpayer",
    desc: "Monthly financial assistance of ₹2,500 for adult women in Delhi.",
    docs: [
      "Aadhaar Card (Mobile Number linked)",
      "Delhi Voter ID Card (Mandatory for Delhi residency proof)",
      "Bank Account Passbook (Aadhaar linked / DBT enabled)",
      "Self-Declaration Form (Non-taxpayer & non-govt employee)",
      "Passport Size Photograph"
    ]
  }
,
  {
  "id": 1787208091101,
  "name": "E Shram Card",
  "category": "Schemes",
  "fee": "100",
  "time": "Instant",
  "eligibility": "Unorganised Workers (Age: 16-59)",
  "desc": "Central Government welfare scheme for Unorganised Workers",
  "docs": [
    "Aadhaar Card",
    "Aadhaar-Linked Mobile Number",
    "Bank Account Details"
  ]
    }
];
