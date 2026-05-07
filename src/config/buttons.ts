export type CTA = { text: string; link: string; external?: boolean };

export const buttons: Record<string, CTA> = {
  callNow: { text: "Call Now — 24/7 Emergency", link: "tel:+18005551234", external: true },
  requestQuote: { text: "Get Free Quote", link: "/quote" },
  viewServices: { text: "View All Services", link: "/services" },
  bookService: { text: "Book Service Now", link: "/quote" },
  emergencyService: { text: "Emergency? Call Now", link: "tel:+18005551234", external: true },
  learnMore: { text: "Learn More", link: "/services" },
  readReviews: { text: "Read Customer Reviews", link: "/reviews" },
  submitQuote: { text: "Submit Request", link: "#" },
};
