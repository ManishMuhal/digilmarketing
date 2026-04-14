import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import Newsletter from "@/components/sections/home1/Newsletter";
import ServiceFaq from "@/components/sections/InnerSection/Faq";
import Testimonial from "@/components/sections/home1/Testimonial";

export default function EmailMarketing() {
    return (
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Email Marketing">
            <section className="services-details">
                <div className="services-details__shape-1"></div>
                <div className="services-details__shape-2">
                    <Image src="/assets/images/shapes/services-details-shape-2.png" alt="Image" width={1920} height={1332} priority />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-5">
                            <div className="services-details__left">
                                <div className="services-details__services-list-box">
                                    <h3 className="services-details__services-list-title">Digital Marketing Services</h3>
                                    <ul className="services-details__services-list list-unstyled">
                                        <li>
                                            <Link href="/seo">Search Engine Optimization (SEO)<span className="icon-right-arrow-2"></span></Link>
                                        </li>
                                        <li>
                                            <Link href="/ppc-advertising">Pay-Per-Click (PPC) Advertising<span className="icon-right-arrow-2"></span></Link>
                                        </li>
                                        <li>
                                            <Link href="/social-media-marketing">Social Media Marketing (SMM)<span className="icon-right-arrow-2"></span></Link>
                                        </li>
                                        <li>
                                            <Link href="/content-marketing">Content Marketing<span className="icon-right-arrow-2"></span></Link>
                                        </li>
                                        <li className="active">
                                            <Link href="/email-marketing">Email Marketing<span className="icon-right-arrow-2"></span></Link>
                                        </li>
                                        <li>
                                            <Link href="/online-reputation-management">Online Reputation Management (ORM)<span className="icon-right-arrow-2"></span></Link>
                                        </li>
                                        <li>
                                            <Link href="/video-marketing">Video Marketing & YouTube Advertising<span className="icon-right-arrow-2"></span></Link>
                                        </li>
                                        <li>
                                            <Link href="/conversion-rate-optimization">Conversion Rate Optimization (CRO)<span className="icon-right-arrow-2"></span></Link>
                                        </li>
                                        <li>
                                            <Link href="/analytics-reporting">Analytics & Reporting<span className="icon-right-arrow-2"></span></Link>
                                        </li>
                                        <li>
                                            <Link href="/influencer-marketing">Influencer Marketing<span className="icon-right-arrow-2"></span></Link>
                                        </li>
                                        <li>
                                            <Link href="/affiliate-marketing">Affiliate Marketing<span className="icon-right-arrow-2"></span></Link>
                                        </li>
                                        <li>
                                            <Link href="/political-marketing">POLITICAL MARKETING<span className="icon-right-arrow-2"></span></Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="services-details__need-help">
                                    <div className="services-details__need-help-img">
                                        <Image src="/assets/images/services/services-details-need-help-img.jpg" alt="Image" width={356} height={450} priority />
                                        <div className="services-details__need-help-content">
                                            <div className="services-details__need-help-bdr"></div>
                                            <h3 className="services-details__need-help-title">Need Help?</h3>
                                            <p className="services-details__need-help-number"><Link href="tel:1200345789034">+12 00 345 789034</Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-7">
                            <div className="services-details__right">
                                <h3 className="services-details__title-1">Connect Directly with Your Audience Through Email Marketing</h3>
                                <div className="services-details__bdr"></div>
                                <p className="services-details__text-1">Our email marketing services help you build and nurture relationships with your audience through targeted, personalized email campaigns. We create strategies that drive engagement, conversions, and long-term customer loyalty.</p>
                                <p className="services-details__text-2">From email list building and segmentation to automated campaigns and performance analytics, our team ensures your email marketing delivers maximum ROI while maintaining compliance with all regulations.</p>
                                <div className="services-details__img-1">
                                    <Image src="/assets/images/services/services-details-img-6.jpg" alt="Image" width={850} height={400} priority />
                                </div>
                                <h4 className="services-details__title-2">Email Marketing Core Features</h4>
                                <p className="services-details__text-3">Email list building and management. Advanced segmentation and personalization. Automated email sequences and workflows. A/B testing and optimization. Compliance with GDPR and CAN-SPAM. Performance tracking and analytics.</p>
                                <div className="services-details__points-box">
                                    <div className="row">
                                        <div className="col-xl-6">
                                            <ul className="services-details__points-list list-unstyled">
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-tick-inside-circle"></span>
                                                    </div>
                                                    <p>Email Campaigns</p>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-tick-inside-circle"></span>
                                                    </div>
                                                    <p>Automation</p>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-tick-inside-circle"></span>
                                                    </div>
                                                    <p>Newsletter Design</p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-xl-6">
                                            <ul className="services-details__points-list list-unstyled">
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-tick-inside-circle"></span>
                                                    </div>
                                                    <p>List Segmentation</p>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-tick-inside-circle"></span>
                                                    </div>
                                                    <p>Template Design</p>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-tick-inside-circle"></span>
                                                    </div>
                                                    <p>Performance Analytics</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="services-details__faq">
                                    <ServiceFaq />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Testimonial />
            <Newsletter />
        </Layout>
    )
}