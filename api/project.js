import projectbanner1 from '/public/images/projects/cultivate-church-outside-view.png';
import pimg2 from '/public/images/projects/window-cleaning-the-church-at-brookhighlands.png';
import pimg3 from '/public/images/projects/img-3.jpg';
import pimg4 from '/public/images/projects/absolute-cleaning-solutions-past-project-pressure-washing-helena-alabama.png';
import pimg5 from '/public/images/projects/img-5.jpg';


import sSingleimg1 from '/public/images/project-single/2.jpg';
import sSingleimg2 from '/public/images/project-single/3.jpg';

const Projects = [
    {
        Id: '1',
        pImg: projectbanner1,
        subTitle: 'Alabaster, AL',
        title: 'Pressure Washing on Concrete - Cultivate Church',
        slug: 'pressure-washing',
        description1: 'Revitalize the look of your concrete surfaces with our expert pressure washing services. At Cultivate Church in Alabaster, AL, we removed stubborn dirt and grime, making the concrete look brand new. Experience the transformative power of a deep clean!',
        description2: 'Our team used high-pressure equipment to ensure every inch of the concrete was spotless. The result was a dramatic improvement in the appearance of the church’s exterior, impressing both staff and visitors.',
        description3: 'We paid special attention to the high-traffic areas, ensuring they were not only clean but also safe for use. The concrete surfaces now look immaculate and provide a welcoming entrance to the church.',
        description4: 'The project was completed on time and within budget, showcasing our commitment to quality and reliability. Cultivate Church now stands out with its freshly cleaned concrete, setting a high standard in the community.',
        clientName: 'Robert William',
        projectValue: '$500',
        date: '25 Dec 2023',
        spImg1: sSingleimg1,
        spImg2: sSingleimg2,
        highlights: [
            'Used high-pressure equipment for deep cleaning',
            'Special attention to high-traffic areas',
            'Completed on time and within budget',
            'Significant improvement in exterior appearance'
        ]
    },
    {
        Id: '2',
        pImg: pimg2,
        subTitle: 'Birmingham, AL',
        title: 'Window Cleaning - The Church at Brook Hills',
        slug: 'window-cleaning',
        description1: 'Enjoy crystal-clear views with our professional window cleaning services. At The Church at Brook Hills in Birmingham, AL, we meticulously cleaned every window, ensuring a spotless and streak-free finish. Let the light in with our expert touch!',
        description2: 'Each window was carefully washed and polished, removing all smudges and streaks. The church’s windows now shine brightly, enhancing the overall aesthetic of the building and allowing more natural light to fill the interiors.',
        description3: 'Our team worked efficiently to minimize disruption to the church’s daily activities. The result was a beautifully clean exterior that reflects the church’s commitment to maintaining a welcoming environment.',
        description4: 'The enhanced natural light has created a more uplifting and inspiring atmosphere inside the church. This project highlights our dedication to delivering top-quality results that make a real difference.',
        clientName: 'Jane Doe',
        projectValue: '$700',
        date: '15 Jan 2024',
        spImg1: sSingleimg1,
        spImg2: sSingleimg2,
        highlights: [
            'Crystal-clear, streak-free windows',
            'Enhanced natural light inside the church',
            'Minimized disruption to daily activities',
            'Improved aesthetic and welcoming environment'
        ]
    },
    {
        Id: '3',
        pImg: pimg3,
        subTitle: 'Inverness, AL',
        title: 'Pressure Washing & Patio Restoration',
        slug: 'pressure-washing-patio-restoration',
        description1: 'Transform your outdoor space with our combined pressure washing and patio restoration services. In Inverness, AL, we rejuvenated a tired patio, removing stains and restoring its original beauty. Perfect for summer gatherings!',
        description2: 'We used advanced cleaning techniques to remove all stains and dirt from the patio surface. The restoration process brought back the vibrant look of the patio, making it a welcoming space for outdoor activities and gatherings.',
        description3: 'Our team ensured that the patio was not only clean but also safe and slip-resistant. The newly restored patio now adds significant value to the property, ready to host numerous social events.',
        description4: 'The project was executed flawlessly, with attention to detail and a focus on customer satisfaction. Inverness homeowners are now enjoying a stunning, like-new patio that enhances their outdoor living experience.',
        clientName: 'John Smith',
        projectValue: '$1200',
        date: '10 Feb 2024',
        spImg1: sSingleimg1,
        spImg2: sSingleimg2,
        highlights: [
            'Advanced cleaning techniques',
            'Slip-resistant and safe surfaces',
            'Significant property value addition',
            'Flawless execution and customer satisfaction'
        ]
    },
    {
        Id: '4',
        pImg: pimg4,
        subTitle: 'Helena, AL',
        title: 'Pressure Washing',
        slug: 'pressure-washing',
        description1: 'Experience the ultimate clean with our comprehensive pressure washing services. In Helena, AL, we tackled multiple surfaces, from driveways to decks, leaving every area spotless and refreshed. See the difference professional cleaning makes!',
        description2: 'Our thorough cleaning process ensured every surface was free from dirt and grime. The comprehensive service covered all major outdoor areas, significantly enhancing the property’s curb appeal and cleanliness.',
        description3: 'Special care was taken to protect the surrounding landscaping and property features during the cleaning process. The result is a pristine outdoor space that looks well-maintained and inviting.',
        description4: 'This project demonstrates our commitment to excellence and customer satisfaction. Helena homeowners now have an impeccably clean property that stands out in the neighborhood.',
        clientName: 'Emily Johnson',
        projectValue: '$950',
        date: '20 Mar 2024',
        spImg1: sSingleimg1,
        spImg2: sSingleimg2,
        highlights: [
            'Comprehensive cleaning of multiple surfaces',
            'Enhanced curb appeal and cleanliness',
            'Protected surrounding landscaping',
            'Impeccably clean and inviting outdoor space'
        ]
    },
    {
        Id: '5',
        pImg: pimg5,
        subTitle: 'Brook Highlands, AL',
        title: 'Expert Stain Removal',
        slug: 'stain-removal',
        description1: 'Say goodbye to stubborn stains with our expert stain removal services. In Brook Highlands, AL, we eliminated tough spots from various surfaces, restoring them to their pristine condition. Trust us for a flawless finish!',
        description2: 'Our team tackled the most challenging stains with precision and care. The results were outstanding, with all surfaces looking clean and fresh. Clients were thrilled with the dramatic improvement in their property’s appearance.',
        description3: 'We used eco-friendly cleaning solutions to ensure safety and sustainability. The property now boasts a clean, healthy environment free from harsh chemicals and residues.',
        description4: 'This project showcases our expertise in stain removal and our commitment to delivering exceptional results. Brook Highlands homeowners are now enjoying spotless, revitalized surfaces throughout their property.',
        clientName: 'Michael Brown',
        projectValue: '$650',
        date: '30 Apr 2024',
        spImg1: sSingleimg1,
        spImg2: sSingleimg2,
        highlights: [
            'Eliminated tough stains from various surfaces',
            'Eco-friendly cleaning solutions',
            'Clean, healthy environment',
            'Spotless, revitalized surfaces'
        ]
    },
    {
        Id: '6',
        pImg: pimg5,
        subTitle: 'Brook Highland, AL',
        title: 'Stain Removal at Brook Highland Shopping Center',
        slug: 'stain-removal-brook-highland',
        description1: 'Absolute Cleaning Solutions, located in Brook Highland, Alabama, recently completed a successful stain removal project at the Brook Highland Shopping Center on 280. Our team tackled old sign stains that had accumulated over the years, transforming the look of the shopping center.',
        description2: 'Using eco-friendly cleaning solutions and advanced techniques, we were able to restore the surfaces to their original condition, significantly enhancing the shopping center\'s aesthetic appeal.',
        description3: 'Our team focused on eliminating stubborn stains, ensuring the surfaces were left spotless and inviting. The use of eco-friendly products ensured safety for both the environment and visitors.',
        description4: 'This project highlights our commitment to quality and customer satisfaction. The Brook Highland Shopping Center now stands out with its refreshed and clean appearance, making a positive impression on shoppers.',
        clientName: 'Brook Highland Shopping Center Management',
        projectValue: 'Priceless',
        date: '10 May 2024',
        spImg1: sSingleimg1,
        spImg2: sSingleimg2,
        highlights: [
            'Effective removal of old, stubborn sign stains',
            'Use of eco-friendly and safe cleaning solutions',
            'Improved appearance and curb appeal of the shopping center',
            'Project completed efficiently with minimal disruption to business operations'
        ]
    }
];

export default Projects;


