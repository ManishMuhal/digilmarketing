'use client'
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
}

export default function Service_Carousel() {
  return (
    <>
        <section className="services-carousel-page">
            <div className="container">
                <Swiper {...swiperOptions} className="services-carousel-style">
                    <SwiperSlide>
                        <div className="item">
                            <div className="services-three__single">
                                <div className="services-three__icon-and-title">
                                    <div className="services-three__icon">
                                        <span className="icon-search"></span>
                                    </div>
                                    <h3 className="services-three__title"><Link href="/seo">Search Engine Optimization (SEO)
                                            <br /> Services</Link></h3>
                                </div>
                                <p className="services-three__text">Boost your online visibility with our comprehensive SEO services. Drive organic traffic and improve search rankings.</p>
                                <ul className="list-unstyled services-three__list">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick-inside-circle"></span>
                                        </div>
                                        <div className="text">
                                            <p>On-Page Optimization</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick-inside-circle"></span>
                                        </div>
                                        <div className="text">
                                            <p>Off-Page Optimization</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick-inside-circle"></span>
                                        </div>
                                        <div className="text">
                                            <p>Technical SEO</p>
                                        </div>
                                    </li>
                                </ul>
                                <Link href="/seo" className="services-three__btn">Read More <span
                                        className="icon-right-arrow-1"></span>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="services-three__single">
                                <div className="services-three__icon-and-title">
                                    <div className="services-three__icon">
                                        <span className="icon-target"></span>
                                    </div>
                                    <h3 className="services-three__title"><Link href="/ppc-advertising">Pay-Per-Click (PPC) Advertising
                                            <br /> Services</Link></h3>
                                </div>
                                <p className="services-three__text">Drive instant traffic with targeted PPC campaigns. Maximize ROI with expert Google Ads and Bing Ads management.</p>
                                <ul className="list-unstyled services-three__list">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick-inside-circle"></span>
                                        </div>
                                        <div className="text">
                                            <p>Google Ads</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick-inside-circle"></span>
                                        </div>
                                        <div className="text">
                                            <p>Bing Ads</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick-inside-circle"></span>
                                        </div>
                                        <div className="text">
                                            <p>Campaign Management</p>
                                        </div>
                                    </li>
                                </ul>
                                <Link href="/ppc-advertising" className="services-three__btn">Read More <span
                                        className="icon-right-arrow-1"></span>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="services-three__single">
                                <div className="services-three__icon-and-title">
                                    <div className="services-three__icon">
                                        <span className="icon-social-media"></span>
                                    </div>
                                    <h3 className="services-three__title"><Link href="/social-media-marketing">Social Media Marketing (SMM)
                                            <br /> Services</Link></h3>
                                </div>
                                <p className="services-three__text">Build your brand presence across social platforms. Engage audiences and drive conversions with strategic SMM.</p>
                                <ul className="list-unstyled services-three__list">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick-inside-circle"></span>
                                        </div>
                                        <div className="text">
                                            <p>Facebook Marketing</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick-inside-circle"></span>
                                        </div>
                                        <div className="text">
                                            <p>Instagram Marketing</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick-inside-circle"></span>
                                        </div>
                                        <div className="text">
                                            <p>LinkedIn Marketing</p>
                                        </div>
                                    </li>
                                </ul>
                                <Link href="/social-media-marketing" className="services-three__btn">Read More <span
                                        className="icon-right-arrow-1"></span>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="services-three__single">
                                <div className="services-three__icon-and-title">
                                    <div className="services-three__icon">
                                        <span className="icon-content"></span>
                                    </div>
                                    <h3 className="services-three__title"><Link href="/content-marketing">Content Marketing
                                            <br /> Services</Link></h3>
                                </div>
                                <p className="services-three__text">Create engaging content that drives results. Establish your brand as an industry authority with expert content marketing.</p>
                                <ul className="list-unstyled services-three__list">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick-inside-circle"></span>
                                        </div>
                                        <div className="text">
                                            <p>Blog Writing</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick-inside-circle"></span>
                                        </div>
                                        <div className="text">
                                            <p>Article Writing</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick-inside-circle"></span>
                                        </div>
                                        <div className="text">
                                            <p>Content Strategy</p>
                                        </div>
                                    </li>
                                </ul>
                                <Link href="/content-marketing" className="services-three__btn">Read More <span
                                        className="icon-right-arrow-1"></span>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="services-three__single">
                                <div className="services-three__icon-and-title">
                                    <div className="services-three__icon">
                                        <span className="icon-email"></span>
                                    </div>
                                    <h3 className="services-three__title"><Link href="/email-marketing">Email Marketing
                                            <br /> Services</Link></h3>
                                </div>
                                <p className="services-three__text">Connect directly with your audience through personalized email campaigns. Build loyalty and drive conversions.</p>
                                <ul className="list-unstyled services-three__list">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick-inside-circle"></span>
                                        </div>
                                        <div className="text">
                                            <p>Email Campaigns</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick-inside-circle"></span>
                                        </div>
                                        <div className="text">
                                            <p>Automation</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick-inside-circle"></span>
                                        </div>
                                        <div className="text">
                                            <p>Newsletter Design</p>
                                        </div>
                                    </li>
                                </ul>
                                <Link href="/email-marketing" className="services-three__btn">Read More <span
                                        className="icon-right-arrow-1"></span>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="services-three__single">
                                <div className="services-three__icon-and-title">
                                    <div className="services-three__icon">
                                        <span className="icon-reputation"></span>
                                    </div>
                                    <h3 className="services-three__title"><Link href="/online-reputation-management">Online Reputation Management (ORM)
                                            <br /> Services</Link></h3>
                                </div>
                                <p className="services-three__text">Protect and enhance your online reputation. Monitor, manage, and improve your brand&apos;s digital presence.</p>
                                <ul className="list-unstyled services-three__list">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick-inside-circle"></span>
                                        </div>
                                        <div className="text">
                                            <p>Brand Monitoring</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick-inside-circle"></span>
                                        </div>
                                        <div className="text">
                                            <p>Review Management</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick-inside-circle"></span>
                                        </div>
                                        <div className="text">
                                            <p>Crisis Management</p>
                                        </div>
                                    </li>
                                </ul>
                                <Link href="/online-reputation-management" className="services-three__btn">Read More <span
                                        className="icon-right-arrow-1"></span>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="services-three__single">
                                <div className="services-three__icon-and-title">
                                    <div className="services-three__icon">
                                        <span className="icon-video"></span>
                                    </div>
                                    <h3 className="services-three__title"><Link href="/video-marketing">Video Marketing & YouTube Advertising
                                            <br /> Services</Link></h3>
                                </div>
                                <p className="services-three__text">Engage your audience with powerful video content. Create compelling videos that drive engagement and conversions.</p>
                                <ul className="list-unstyled services-three__list">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick-inside-circle"></span>
                                        </div>
                                        <div className="text">
                                            <p>Video Production</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick-inside-circle"></span>
                                        </div>
                                        <div className="text">
                                            <p>YouTube SEO</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick-inside-circle"></span>
                                        </div>
                                        <div className="text">
                                            <p>Video Ads</p>
                                        </div>
                                    </li>
                                </ul>
                                <Link href="/video-marketing" className="services-three__btn">Read More <span
                                        className="icon-right-arrow-1"></span>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="services-three__single">
                                <div className="services-three__icon-and-title">
                                    <div className="services-three__icon">
                                        <span className="icon-conversion"></span>
                                    </div>
                                    <h3 className="services-three__title"><Link href="/conversion-rate-optimization">Conversion Rate Optimization (CRO)
                                            <br /> Services</Link></h3>
                                </div>
                                <p className="services-three__text">Maximize your website&apos;s conversion potential. Turn more visitors into customers with data-driven optimization.</p>
                                <ul className="list-unstyled services-three__list">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick-inside-circle"></span>
                                        </div>
                                        <div className="text">
                                            <p>A/B Testing</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick-inside-circle"></span>
                                        </div>
                                        <div className="text">
                                            <p>Landing Pages</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick-inside-circle"></span>
                                        </div>
                                        <div className="text">
                                            <p>User Experience</p>
                                        </div>
                                    </li>
                                </ul>
                                <Link href="/conversion-rate-optimization" className="services-three__btn">Read More <span
                                        className="icon-right-arrow-1"></span>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="services-three__single">
                                <div className="services-three__icon-and-title">
                                    <div className="services-three__icon">
                                        <span className="icon-analytics"></span>
                                    </div>
                                    <h3 className="services-three__title"><Link href="/analytics-reporting">Analytics & Reporting
                                            <br /> Services</Link></h3>
                                </div>
                                <p className="services-three__text">Data-driven insights for better marketing decisions. Track, measure, and optimize your marketing performance.</p>
                                <ul className="list-unstyled services-three__list">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick-inside-circle"></span>
                                        </div>
                                        <div className="text">
                                            <p>GA Tracking</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick-inside-circle"></span>
                                        </div>
                                        <div className="text">
                                            <p>Performance Reports</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick-inside-circle"></span>
                                        </div>
                                        <div className="text">
                                            <p>Data Analysis</p>
                                        </div>
                                    </li>
                                </ul>
                                <Link href="/analytics-reporting" className="services-three__btn">Read More <span
                                        className="icon-right-arrow-1"></span>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="services-three__single">
                                <div className="services-three__icon-and-title">
                                    <div className="services-three__icon">
                                        <span className="icon-influencer"></span>
                                    </div>
                                    <h3 className="services-three__title"><Link href="/influencer-marketing">Influencer Marketing
                                            <br /> Services</Link></h3>
                                </div>
                                <p className="services-three__text">Leverage influencer power to grow your brand. Connect with authentic voices that resonate with your audience.</p>
                                <ul className="list-unstyled services-three__list">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick-inside-circle"></span>
                                        </div>
                                        <div className="text">
                                            <p>Influencer Partnerships</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick-inside-circle"></span>
                                        </div>
                                        <div className="text">
                                            <p>Campaign Management</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick-inside-circle"></span>
                                        </div>
                                        <div className="text">
                                            <p>Performance Tracking</p>
                                        </div>
                                    </li>
                                </ul>
                                <Link href="/influencer-marketing" className="services-three__btn">Read More <span
                                        className="icon-right-arrow-1"></span>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="services-three__single">
                                <div className="services-three__icon-and-title">
                                    <div className="services-three__icon">
                                        <span className="icon-affiliate"></span>
                                    </div>
                                    <h3 className="services-three__title"><Link href="/affiliate-marketing">Affiliate Marketing
                                            <br /> Services</Link></h3>
                                </div>
                                <p className="services-three__text">Build a high-performing affiliate network. Drive sales through strategic partner relationships.</p>
                                <ul className="list-unstyled services-three__list">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick-inside-circle"></span>
                                        </div>
                                        <div className="text">
                                            <p>Affiliate Programs</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick-inside-circle"></span>
                                        </div>
                                        <div className="text">
                                            <p>Commission Structure</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick-inside-circle"></span>
                                        </div>
                                        <div className="text">
                                            <p>Partner Management</p>
                                        </div>
                                    </li>
                                </ul>
                                <Link href="/affiliate-marketing" className="services-three__btn">Read More <span
                                        className="icon-right-arrow-1"></span>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="services-three__single">
                                <div className="services-three__icon-and-title">
                                    <div className="services-three__icon">
                                        <span className="icon-political"></span>
                                    </div>
                                    <h3 className="services-three__title"><Link href="/political-marketing">POLITICAL MARKETING
                                            <br /> Services</Link></h3>
                                </div>
                                <p className="services-three__text">Strategic political campaign management. Connect with voters through targeted digital campaigns.</p>
                                <ul className="list-unstyled services-three__list">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick-inside-circle"></span>
                                        </div>
                                        <div className="text">
                                            <p>Campaign Strategy</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick-inside-circle"></span>
                                        </div>
                                        <div className="text">
                                            <p>Digital Outreach</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick-inside-circle"></span>
                                        </div>
                                        <div className="text">
                                            <p>Community Engagement</p>
                                        </div>
                                    </li>
                                </ul>
                                <Link href="/political-marketing" className="services-three__btn">Read More <span
                                        className="icon-right-arrow-1"></span>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <div className="carousel-dot-style">
                        <div className="swiper-pagination"></div>
                    </div>
                </Swiper>
            </div>
        </section>
    </>
  )
}
