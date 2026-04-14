"use client";

import { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import AnimatedTitle from "@/components/elements/AnimatedTitle";

export default function Services() {
  const circleText = "&nbsp;View All Project • View All Services •";

  const servicesData = [
    {
      title: "Search Engine Optimization (SEO)",
      link: "/seo",
      subItems: ["On-Page Optimization", "Off-Page Optimization", "Technical SEO"]
    },
    {
      title: "Pay-Per-Click (PPC) Advertising",
      link: "/ppc-advertising",
      subItems: ["Google Ads", "Bing Ads", "Campaign Management"]
    },
    {
      title: "Social Media Marketing (SMM)",
      link: "/social-media-marketing",
      subItems: ["Facebook Marketing", "Instagram Marketing", "LinkedIn Marketing"]
    },
    {
      title: "Content Marketing",
      link: "/content-marketing",
      subItems: ["Blog Writing", "Article Writing", "Content Strategy"]
    },
    {
      title: "Email Marketing",
      link: "/email-marketing",
      subItems: ["Email Campaigns", "Automation", "Newsletter Design"]
    },
    {
      title: "Online Reputation Management (ORM)",
      link: "/online-reputation-management",
      subItems: ["Brand Monitoring", "Review Management", "Crisis Management"]
    },
    {
      title: "Video Marketing & YouTube Advertising",
      link: "/video-marketing",
      subItems: ["Video Production", "YouTube SEO", "Video Ads"]
    },
    {
      title: "Conversion Rate Optimization (CRO)",
      link: "/conversion-rate-optimization",
      subItems: ["A/B Testing", "Landing Pages", "User Experience"]
    },
    {
      title: "Analytics & Reporting",
      link: "/analytics-reporting",
      subItems: ["GA Tracking", "Performance Reports", "Data Analysis"]
    },
    {
      title: "Influencer Marketing",
      link: "/influencer-marketing",
      subItems: ["Influencer Partnerships", "Campaign Management", "Performance Tracking"]
    },
    {
      title: "Affiliate Marketing",
      link: "/affiliate-marketing",
      subItems: ["Affiliate Programs", "Commission Structure", "Partner Management"]
    },
    {
      title: "POLITICAL MARKETING",
      link: "/political-marketing",
      subItems: ["Campaign Strategy", "Digital Outreach", "Community Engagement"]
    }
  ];

  // Create React-friendly rotated letters
  const rotatedChars = useMemo(() => {
    const cleanText = circleText.replace(/&nbsp;/g, " ");
    const chars = cleanText.split("");
    const radius = 73.6;
    const total = chars.length;
    const deg = 360 / total;

    return chars.map((char, i) => (
      <span
        key={i}
        style={{
          position: "absolute",
          left: "0%",
          top: "0%",
          transformOrigin: `0 ${radius}px`,
          transform: `rotate(${i * deg}deg)`,
        }}
      >
        {char}
      </span>
    ));
  }, [circleText]);

  return (
    <>
        <section className="services-two" id="services">
            <div className="services-two__shape-1"></div>
            <div className="container">
                <div className="services-two__top">
                    <div className="section-title text-left sec-title-animation animation-style2">
                        <div className="section-title__tagline-box">
                            <div className="section-title__tagline-shape-1"></div>
                            <span className="section-title__tagline">Our Services</span>
                            <div className="section-title__tagline-shape-2"></div>
                        </div>
                        <AnimatedTitle>
                        <h2 className="section-title__title title-animation">Comprehensive Digital Marketing<br />
                            Solutions <Image src="/assets/images/services/section-title-img.jpg" alt="Image" width={120} height={40} priority />
                            <span>Expert Digital Marketing Services</span><br /><span>Tailored for Your Brand Growth</span>
                        </h2>
                        </AnimatedTitle>
                    </div>
                    <Link href="/services" className="services-two__round-text-box">
                    <div className="services-two__round-text-box-outer">
                        <div className="services-two__round-text-box-inner">
                        <div className="services-two__curved-circle">
                            {rotatedChars}
                        </div>
                        <div className="services-two__round-icon">
                            <Image
                            src="/assets/images/icon/services-two-round-icon.png"
                            alt="icon"
                            width={42}
                            height={42}
                            priority
                            />
                        </div>
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="services-two__bottom">
                    <div className="services-two__services-list">
                        {servicesData.map((service, index) => (
                            <div key={index} className="services-two__services-list-single">
                                <div className="services-two__count-and-title">
                                    <div className="services-two__count"></div>
                                    <h3 className="services-two__title"><Link href={service.link}>{service.title}</Link></h3>
                                </div>
                                <div className="services-two__service-list-box">
                                    <ul className="services-two__services-list-inner list-unstyled">
                                        <li>
                                            {service.subItems.map((item, i) => (
                                                <p key={i}><span className="icon-plus"></span>{item}</p>
                                            ))}
                                        </li>
                                    </ul>
                                </div>
                                <div className="services-two__hover-img">
                                    <Image 
                                        src={`/assets/images/services/services-2-${(index % 4) + 1}.jpg`} 
                                        alt="Image" 
                                        width={250} 
                                        height={320} 
                                        priority 
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
