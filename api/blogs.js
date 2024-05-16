// images
import blogImg1 from "/public/images/blog/img-1.jpg";
import blogImg2 from "/public/images/blog/img-2.jpg";
import blogImg3 from "/public/images/blog/img-3.jpg";
import blogImg4 from "/public/images/blog/img-7.jpg";

import blogAuthor from "/public/images/blog/josh-tatum-blog-author-for-absolute-cleaning-solutions.png";

import acsbhamblog1 from "/public/images/blog/revamp-your-commercial-property-blog-banner.jpg";
import acsbhamblog2 from "/public/images/blog/gutter-cleaning-in-alabaster-alabama.jpg";
import acsbhamblog3 from "/public/images/blog/img-6.jpg";
import acsbhamblog4 from "/public/images/blog/img-8.jpg";

const blogs = [
    {
        id: '1',
        title: 'Elevate Your Business with Professional Pressure Washing',
        slug: 'elevate-your-business-with-professional-pressure-washing',
        screens: blogImg1,
        description: 'Explore the remarkable benefits of professional pressure washing to enhance your commercial property’s appeal and durability.',
        author: 'Josh Tatum',
        authorTitle: 'Founder & CEO, Absolute Cleaning Solutions',
        authorImg: blogAuthor,
        create_at: '11 January 2024',
        blogSingleImg: acsbhamblog1,
        blClass: 'format-standard-image',
    },

    {
        id: '2',
        title: 'Why Gutter Cleaning is Essential in Alabaster, Alabama',
        slug: 'why-gutter-cleaning-is-essential-in-alabaster-alabama',
        screens: blogImg2,
        description: 'Learn why keeping your gutters clean is crucial for protecting your home’s structural integrity and preventing water damage.',
        author: 'Josh Tatum',
        authorTitle: 'Founder & CEO, Absolute Cleaning Solutions',
        authorImg: blogAuthor,
        create_at: '31 August 2023',
        blogSingleImg: acsbhamblog2,
        blClass: 'format-standard-image',
    },

    {
        id: '3',
        title: 'Revitalize Your Driveway with Expert Pressure Washing',
        slug: 'revitalize-your-driveway-with-expert-pressure-washing',
        screens: blogImg3,
        description: 'Discover how our pressure washing services can restore your driveway, enhancing curb appeal and maintaining property value.',
        author: 'Josh Tatum',
        authorTitle: 'Founder & CEO, Absolute Cleaning Solutions',
        authorImg: blogAuthor,
        create_at: '17 September 2023',
        blogSingleImg: acsbhamblog3,
        blClass: 'format-standard-image',
    },

    {
        id: '4',
        title: 'Insights from a Day in the Life of a Cleaning Business Owner',
        slug: 'insights-from-a-day-in-the-life-of-a-cleaning-business-owner',
        screens: blogAuthor,
        description: 'Step into the shoes of a cleaning business owner and explore the daily challenges and rewards of managing a successful cleaning service.',
        author: 'Josh Tatum',
        authorTitle: 'Founder & CEO, Absolute Cleaning Solutions',
        authorImg: blogAuthor,
        create_at: '18 August 2022',
        blogSingleImg: acsbhamblog4,
        blClass: 'format-video',
    },
];
export default blogs;