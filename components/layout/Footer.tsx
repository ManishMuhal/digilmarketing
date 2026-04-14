// components/layout/Footer.tsx
// ✅ Server Component (no "use client" needed)

import Footer1 from "./footer/Footer1";

interface FooterProps {
  style?: 1 | 2;
}

/**
 * Footer Component
 * 
 * This component dynamically renders a footer style based on the "style" prop.
 * It runs on the server by default (no client-side JS needed).
 */
export default function Footer({ style: _style = 1 }: FooterProps) {
  return <Footer1 />;
}
