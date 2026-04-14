import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import Newsletter from "@/components/sections/home1/Newsletter";
import ServiceFaq from "@/components/sections/InnerSection/Faq";
import Testimonial from "@/components/sections/home1/Testimonial";

export default function PPCAdvertising() {
    return (
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Pay-Per-Click (PPC) Advertising">
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
                                        <li className="active">
                                            <Link href="/ppc-advertising">Pay-Per-Click (PPC) Advertising<span className="icon-right-arrow-2"></span></Link>
                                        </li>
                                        <li>
                                            <Link href="/social-media-marketing">Social Media Marketing (SMM)<span className="icon-right-arrow-2"></span></Link>
                                        </li>
                                        <li>
                                            <Link href="/content-marketing">Content Marketing<span className="icon-right-arrow-2"></span></Link>
                                        </li>
                                        <li>
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
                                <h3 className="services-details__title-1">Drive Instant Traffic with Targeted PPC Advertising</h3>
                                <div className="services-details__bdr"></div>
                                <p className="services-details__text-1">Our PPC advertising services help you reach your target audience instantly with highly targeted campaigns across Google Ads, Bing Ads, and other platforms. We create and manage campaigns that deliver measurable results and maximum ROI.</p>
                                <p className="services-details__text-2">From keyword research and ad creation to bid management and performance optimization, our expert team ensures your PPC campaigns drive qualified traffic and conversions while staying within your budget.</p>
                                <div className="services-details__img-1">
                                    <Image src="/assets/images/services/services-details-img-6.jpg" alt="Image" width={850} height={400} priority />
                                </div>
                                <h4 className="services-details__title-2">PPC Advertising Core Features</h4>
                                <p className="services-details__text-3">Comprehensive keyword research and competitor analysis. Compelling ad copy and creative development. Advanced targeting and audience segmentation. Real-time bid management and optimization. Conversion tracking and ROI measurement. Detailed performance reporting and insights.</p>
                                <div className="services-details__points-box">
                                    <div className="row">
                                        <div className="col-xl-6">
                                            <ul className="services-details__points-list list-unstyled">
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-tick-inside-circle"></span>
                                                    </div>
                                                    <p>Google Ads Management</p>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-tick-inside-circle"></span>
                                                    </div>
                                                    <p>Bing Ads Campaigns</p>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-tick-inside-circle"></span>
                                                    </div>
                                                    <p>Display Advertising</p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-xl-6">
                                            <ul className="services-details__points-list list-unstyled">
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-tick-inside-circle"></span>
                                                    </div>
                                                    <p>Remarketing Campaigns</p>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-tick-inside-circle"></span>
                                                    </div>
                                                    <p>Shopping Ads</p>
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