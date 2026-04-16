export const PhysicianJsonLd = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. Dheeraj Dubay",
    "description": "Director, Robotic Joint Replacement Surgery with 23+ years experience and 35,000+ successful surgeries",
    "url": "https://www.drdubay.in",
    "telephone": "+91-8955373205",
    "email": "connect@drdubay.in",
    "image": "https://www.drdubay.in/assets/images/hero.png",
    "hasCredential": [
      { "@type": "EducationalOccupationalCredential", "credentialCategory": "MBBS" },
      { "@type": "EducationalOccupationalCredential", "credentialCategory": "MS (Orthopedic)" },
      { "@type": "EducationalOccupationalCredential", "credentialCategory": "FJRS (Germany)" }
    ],
    "medicalSpecialty": "Orthopedic Surgery",
    "worksFor": {
      "@type": "Hospital",
      "name": "Shalby Hospital",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "200 Feet Bypass Road, Vaishali Nagar",
        "addressLocality": "Jaipur",
        "addressRegion": "Rajasthan",
        "postalCode": "302021",
        "addressCountry": "IN"
      }
    },
    "award": [
      "Forbes World Record - Highest Joint Replacement Surgeries in a Single Day",
      "ET Inspiring Leaders Award 2025",
      "UK Honour Recognition 2024",
      "Most Trusted Joint Replacement Surgeon of North India"
    ],
    "sameAs": [
      "https://www.facebook.com/drdheerajdubay/",
      "https://www.instagram.com/dheerajdubay1/",
      "https://www.youtube.com/@dr.dheerajdubay6664"
    ]
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export const MedicalBusinessJsonLd = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Dr. Dubay Hip & Knee Clinic",
    "url": "https://www.drdubay.in",
    "telephone": "+91-8955373205",
    "email": "connect@drdubay.in",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "297, Gali Number 6, Kusum Vihar, Vidhyadhar Nagar",
      "addressLocality": "Jaipur",
      "addressRegion": "Rajasthan",
      "postalCode": "302017",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "26.9124",
      "longitude": "75.7873"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "priceRange": "₹₹₹",
    "medicalSpecialty": "Orthopedic Surgery"
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
