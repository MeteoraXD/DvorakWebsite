import {useState} from "react";
import {
    GetStartedButton,
    Divider,
    OurServiceDiv,
    TextButtonContainer,
    OurServiceExplain,
    OurServiceTitle,
    ExpandButton,
} from "./Services.styled";

const OurServices = () => {
    const [showAll, setShowAll] = useState(false);

    const scrollToContactUs = () => {
        const contactUsSection = document.getElementById("ContactUs");
        if (contactUsSection) {
            contactUsSection.scrollIntoView({behavior: "smooth"});
        }
    };

    const services = [
        {
            title: "Product Designs UI/UX",
            description: "A great product isn't defined only by how it works, but also by how it feels. Our design team collaborates closely with you to understand your goals, define a clear direction, and craft an experience that is visually engaging, intuitive, and user-centered. From wireframes to polished interface design, we ensure every interaction is purposeful and every screen supports your product's success.",
            hasScroll: true
        },
        {
            title: "Mobile Development",
            description: "Bring your ideas to life with fast, reliable, and beautifully crafted mobile applications. Whether you need an iOS app, an Android app, or a cross-platform solution, our team delivers high-performance products built to scale. We provide quick project estimations and flexible engagement models, whether fixed-price or time-based, so you can choose what fits your business best. From concept to deployment, we create mobile experiences that look great, work smoothly, and impress your customers."
        },
        {
            title: "Web Development",
            description: "Build powerful, fast, and visually refined web applications with a team that manages every step, from idea to deployment. Whether you're creating an MVP or a full-scale platform, we handle the complete development process in-house to ensure consistency, quality, and on-time delivery. With UI, backend, and deployment all aligned under one team, you get a seamless workflow, fewer bottlenecks, and a web product that performs exactly as you envisioned."
        },
        {
            title: "Big Data Analytics",
            description: "Turn complex data into clear, actionable intelligence. Our team specializes in social media analytics, geospatial data processing, and large-scale machine learning pipelines that help businesses make smarter, data-driven decisions. From uncovering patterns to predicting trends, we deliver insights that keep you ahead of the curve and empower your strategy with real measurable value."
        },
        {
            title: "Data Engineering",
            description: "Build a strong data foundation with scalable pipelines and high-performance processing systems. We design and implement end-to-end ETL/ELT workflows that clean, transform, and move large volumes of data reliably, whether in real time or in batches. With modern big-data technologies at the core, your business gains structured, high-quality data ready for analysis, automation, and advanced AI models."
        },
        {
            title: "Business Intelligence & Dashboarding",
            description: "Turn raw data into clear, insightful visual stories. We create intuitive dashboards and interactive reporting systems that help you monitor KPIs, uncover trends, and make confident business decisions. From executive-level views to dynamic operational dashboards, we deliver BI solutions that are accurate, visually refined, and built around what matters most to your organization."
        },
        {
            title: "Agentic AI Solutions",
            description: "Deploy AI systems that can reason, act, and automate complex workflows. Our Agentic AI solutions combine advanced models with autonomous decision-making capabilities to streamline business processes, handle repetitive tasks, and deliver intelligent responses at scale. From AI assistants to workflow agents, we build systems that reduce manual effort and enhance productivity across your organization."
        },
        {
            title: "Recommendation Systems",
            description: "Personalize every user journey with intelligent recommendations. Whether it's products, content, or user actions, our recommendation engines analyze behavior, preferences, and historical patterns to deliver highly relevant suggestions. This drives engagement, improves conversions, and enhances the overall experience, built with scalable algorithms tailored to your platform."
        },
        {
            title: "Machine Learning & Predictive Modeling",
            description: "Transform data into meaningful predictions that support smarter decisions. We develop custom machine learning models that solve business-critical challenges, from forecasting and classification to anomaly detection and optimization. Every model is trained, validated, and deployed to deliver accuracy, reliability, and real-world impact."
        },
        {
            title: "Social Media Analytics",
            description: "Understand your audience and brand performance with clarity. We analyze large-scale social media data to reveal trends, sentiment, engagement patterns, and competitive insights. Using advanced ML and NLP techniques, we help you track what matters, enabling smarter marketing decisions, stronger content strategies, and real-time brand awareness."
        },
        {
            title: "Cloud Architecture & Deployment",
            description: "Build scalable, secure, and cost-efficient cloud systems. From designing robust cloud architectures to deploying applications on AWS, Azure, or GCP, we ensure your infrastructure is optimized for reliability and growth. We help you migrate, modernize, and manage cloud environments so you can focus on your product, not the servers behind it."
        },
        {
            title: "Marketing Services Brand Identity & Creative Strategy",
            description: "Build a brand that stands out with purpose and consistency. We help you define your brand's voice, personality, and visual identity across all touchpoints. From logos and color systems to messaging frameworks and brand guidelines, we craft cohesive identities that are memorable, meaningful, and aligned with your long-term vision."
        },
        {
            title: "Social Media Management & Content Strategy",
            description: "Grow your digital presence with thoughtful, data-driven content. Our team manages your social media channels end-to-end planning content, designing creatives, writing captions, scheduling posts, and monitoring analytics. We focus on building communities, strengthening engagement, and ensuring your brand stays relevant across platforms."
        },
        {
            title: "Customer Support & Experience Management",
            description: "Deliver world-class support with a team that cares about your users. We provide structured, reliable customer support operations, from first-line ticket handling to escalations, troubleshooting, and feedback management. Our approach ensures users receive fast, helpful, and respectful assistance, improving satisfaction and strengthening your brand's trust."
        },
        {
            title: "Search Engine Optimization (SEO)",
            description: "Improve your online visibility and attract the right audience organically. We optimize your website's structure, content, and performance to rank higher on search engines and bring consistent, long-term traffic. From keyword research and technical SEO to on-page optimization and analytics, we ensure your digital presence stays strong and discoverable."
        },
        {
            title: "Content Production & Creative Media",
            description: "Tell your story with high-quality content that connects and converts. Our creative team produces engaging visuals, videos, graphics, and copy crafted to elevate your brand across digital platforms. Whether it's promotional videos, social media reels, photography, or campaign assets, we deliver content that is polished, on-brand, and built for impact."
        }
    ];

    const visibleServices = showAll ? services : services.slice(0, 5);

    return (
        <>
            {visibleServices.map((service, index) => (
                <div key={index}>
                    <OurServiceDiv>
                        <OurServiceTitle>{service.title}</OurServiceTitle>
                        <TextButtonContainer>
                            <OurServiceExplain>
                                {service.description}
                            </OurServiceExplain>
                            <GetStartedButton onClick={service.hasScroll ? scrollToContactUs : undefined}>
                                Get started →
                            </GetStartedButton>
                        </TextButtonContainer>
                    </OurServiceDiv>
                    <Divider/>
                </div>
            ))}

            {!showAll && services.length > 5 && (
                <ExpandButton onClick={() => setShowAll(true)}>
                    View More Services ({services.length - 5} more)
                </ExpandButton>
            )}

            {showAll && (
                <ExpandButton onClick={() => setShowAll(false)}>
                    Show Less
                </ExpandButton>
            )}
        </>
    );
};

export default OurServices;