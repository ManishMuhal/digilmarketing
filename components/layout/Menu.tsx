
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainMenu() {
  const pathname = usePathname();

  // Helper: Exact match or starts with path
  const isActive = (path: string, exact = true) =>
    exact ? pathname === path : pathname.startsWith(path);

  return (
    <ul className="main-menu__list">
      {/* Home */}
      <li className={isActive("/", true) ? "current" : ""}>
        <Link href="/">Home</Link>
      </li>

      {/* About */}
      <li className={isActive("/about") ? "current" : ""}>
        <Link href="/about">About</Link>
      </li>

      {/* Pages Dropdown */}
      <li className={`dropdown ${isActive("/team", false) || isActive("/team-carousel", false) || isActive("/team-details", false) || isActive("/portfolio", false) || isActive("/portfolio-details", false) || isActive("/testimonials", false) || isActive("/testimonials-carousel", false) || isActive("/pricing", false) || isActive("/gallery", false) || isActive("/faq", false) || isActive("/404", false) || isActive("/coming-soon", false) ? "current" : ""}`}>
        <Link href="#">Pages</Link>
        <ul className="shadow-box">
          <li><Link href="/team">Team</Link></li>
          <li><Link href="/team-carousel">Team Carousel</Link></li>
          <li><Link href="/team-details">Team Details</Link></li>
          <li><Link href="/portfolio">Portfolio</Link></li>
          <li><Link href="/portfolio-details">Portfolio Details</Link></li>
          <li><Link href="/testimonials">Testimonials</Link></li>
          <li><Link href="/testimonials-carousel">Testimonial Carousel</Link></li>
          <li><Link href="/pricing">Pricing</Link></li>
          <li><Link href="/gallery">Gallery</Link></li>
          <li><Link href="/faq">FAQs</Link></li>
          <li><Link href="/error">404 Error</Link></li>
          <li><Link href="/coming-soon">Coming Soon</Link></li>
        </ul>
      </li>

      {/* Services Dropdown */}
      <li className={`dropdown ${isActive("/services", false) || isActive("/services-carousel", false) || isActive("/threat-detection-prevention", false) || isActive("/endpoint-device-security", false) || isActive("/data-protection-privacy", false) || isActive("/backup-recovery", false) || isActive("/advanced-technology", false) || isActive("/cloud-managed-services", false) ? "current" : ""}`}>
        <Link href="#">Services</Link>
        <ul className="shadow-box">
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/services-carousel">Services Carousel</Link></li>
          <li><Link href="/threat-detection-prevention">Threat Detection</Link></li>
          <li><Link href="/endpoint-device-security">Device Security</Link></li>
          <li><Link href="/data-protection-privacy">Data Protection</Link></li>
          <li><Link href="/backup-recovery">Backup & Recovery</Link></li>
          <li><Link href="/advanced-technology">Advanced Technology</Link></li>
          <li><Link href="/cloud-managed-services">Cloud Managed Services</Link></li>
        </ul>
      </li>

      {/* Blog Dropdown */}
      <li className={`dropdown ${isActive("/blog", false) || isActive("/blog-carousel", false) || isActive("/blog-list", false) || isActive("/blog-list-2", false) || isActive("/blog-details", false) ? "current" : ""}`}>
        <Link href="#">Blog</Link>
        <ul className="shadow-box">
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/blog-carousel">Blog Carousel</Link></li>
          <li><Link href="/blog-list">Blog List</Link></li>
          <li><Link href="/blog-list-2">Blog List Two</Link></li>
          <li><Link href="/blog-details">Blog Details</Link></li>
        </ul>
      </li>

      {/* Contact */}
      <li className={isActive("/contact") ? "current" : ""}>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  );
}
