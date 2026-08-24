/**
 * Central Configuration for JOS Group
 * Easily update phone numbers, WhatsApp links, location, and social links here.
 */
export const businessConfig = {
  name: "JOS Group",
  tagline: "PREMIUM AUTOMOTIVE CARE & DETAILING STUDIO",
  logo: "/assets/logo.jpeg",
  
  // Contact details
  phone: "+91 99478 12555",
  phoneRaw: "+919947812555",
  phoneSecondary: "+91 99618 12555",
  phoneSecondaryRaw: "+919961812555",
  
  whatsapp: "+919961812555",
  whatsappDefaultMessage: "Hello JOS Group, I would like to inquire about a service for my vehicle.",

  email: "contact@josgroup.com",
  
  instagram: "https://www.instagram.com/jos_cars/",
  instagramHandle: "@jos_cars",
  
  location: {
    address: "Kandanadu P.O., Udayamperoor",
    city: "Ernakulam, Kerala - 682305",
    googleMapsUrl: "https://maps.google.com"
  },

  businessHours: {
    weekdays: "Mon - Sat: 9:30 AM - 7:30 PM",
    sunday: "Sun: By Appointment Only"
  },

  stats: [
    { label: "CARS TRANSFORMED", value: "500+", suffix: "" },
    { label: "YEARS EXPERIENCE", value: "5+", suffix: "" },
    { label: "ATTENTION TO DETAIL", value: "100%", suffix: "" },
    { label: "SATISFACTION GUARANTEED", value: "5/5", suffix: "★" }
  ]
};
