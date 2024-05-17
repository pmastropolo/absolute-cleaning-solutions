import simg from '/public/images/service/pressure-washing-banner.png'
import simg2 from '/public/images/service/window-cleaning-banner.png'
import simg3 from '/public/images/service/gutter-cleaning-banner.png'
import simg4 from '/public/images/service/roof-washing-banner.png'
import simg5 from '/public/images/service/deck-and-fence-banner.png'
import simg6 from '/public/images/service/house-washing-banner.png'

import sIconPressureWashing from '/public/images/icon/pressure-washing-icon.svg'
import sIconWindowWashing from '/public/images/icon/window-washing-icon.svg'
import sIconGutterCleaning from '/public/images/icon/gutter-cleaning-icon.svg'
import sIconRoofWashing from '/public/images/icon/roof-washing-icon.svg'
import sIconFence from '/public/images/icon/fence-icon.svg'
import sIconhousewash from '/public/images/icon/house-wash-icon.svg'

import sroofwash1 from '/public/images/service-single/roof-washing-before.png'
import sroofwash2 from '/public/images/service-single/roof-washing-after.png'
import shousewash1 from '/public/images/service-single/house-wash-before.png'
import shousewash2 from '/public/images/service-single/house-wash-after.png'
import sgutterclean1 from '/public/images/service-single/gutter-cleaning-before.png'
import sgutterclean2 from '/public/images/service-single/gutter-cleaning-close-up.png'
import spressurewash1 from '/public/images/service-single/pressure-wash-before.png'
import spressurewash2 from '/public/images/service-single/pressure-wash-after.png'
import sdeckandfence1 from '/public/images/service-single/deck-and-fence-before.png'
import sdeckandfence2 from '/public/images/service-single/deck-and-fence-after.png'
import swindowclean1 from '/public/images/service-single/window-cleaning-before.png'
import swindowclean2 from '/public/images/service-single/window-cleaning-after.png'


const Services = [
    {
        Id: '1',
        sImg: simg,
        sIcon: sIconPressureWashing,
        sTitle: 'Pressure Washing',
        slug: 'pressure-washing',
        description1: 'Get a pristine look with our unbeatable pressure washing. Perfect for driveways, sidewalks, and exteriors. Don’t wait—transform your property now!',
        description2: 'Achieve a sparkling clean with our top-rated pressure washing service. Ideal for any surface—boost your curb appeal instantly. Act fast and see the difference today!',
        description3: 'Our pressure washing service guarantees a deep clean, removing all dirt and grime. Elevate your property’s look effortlessly. Contact us now for a flawless finish!',
        description4: 'Experience the power of professional pressure washing. Restore your property’s beauty and make it shine like new. Don’t miss out—schedule today!',
        ssImg1: spressurewash1,
        ssImg2: spressurewash2,
    },
    {
        Id: '2',
        sImg: simg2,
        sIcon: sIconWindowWashing,
        sTitle: 'Window Cleaning',
        slug: 'window-cleaning',
        description1: 'Experience sparkling windows with our expert cleaning. Say goodbye to smudges and streaks. Act fast—let the sunshine in today!',
        description2: 'Brighten your view with our flawless window cleaning service. Enjoy crystal-clear windows—don’t miss out on this offer. Schedule your cleaning today!',
        description3: 'Our window cleaning service ensures every pane is spotless, enhancing your home’s natural light. Experience the difference of perfectly clean windows—book now!',
        description4: 'Get gleaming, streak-free windows with our professional service. Improve your home’s appearance inside and out. Don’t wait—book your window cleaning today!',
        ssImg1: swindowclean1,
        ssImg2: swindowclean2,
    },
    {
        Id: '3',
        sImg: simg3,
        sIcon: sIconGutterCleaning,
        sTitle: 'Gutter Cleaning',
        slug: 'gutter-cleaning',
        description1: 'Prevent costly damage with our thorough gutter cleaning. Ensure proper drainage and peace of mind. Don’t delay—secure your home now!',
        description2: 'Protect your home with our comprehensive gutter cleaning service. Avoid water damage and keep your gutters flowing freely. Book your cleaning today!',
        description3: 'Our gutter cleaning service prevents clogs and water damage, ensuring your home’s safety. Maintain optimal drainage—schedule your service today for peace of mind!',
        description4: 'Ensure your gutters are clean and functioning perfectly with our expert service. Protect your home from water damage. Don’t hesitate—schedule your cleaning now!',
        ssImg1: sgutterclean1,
        ssImg2: sgutterclean2,
    },
    {
        Id: '4',
        sImg: simg4,
        sIcon: sIconRoofWashing,
        sTitle: 'Roof Washing',
        slug: 'roof-washing',
        description1: 'Extend your roof’s life with our top-notch washing. Remove moss, algae, and stains. Join our happy customers—protect your roof today!',
        description2: 'Safeguard your roof with our expert washing service. Eliminate harmful buildup and enhance your home’s look. Don’t wait—schedule your roof washing today!',
        description3: 'Our roof washing service clears away all debris, ensuring longevity and a clean appearance. Invest in your roof’s health—contact us now for professional care!',
        description4: 'Protect and enhance your roof with our specialized washing service. Remove debris and extend its lifespan. Act now—book your roof washing today!',
        ssImg1: sroofwash1,
        ssImg2: sroofwash2,
    },
    {
        Id: '5',
        sImg: simg5,
        sIcon: sIconFence,
        sTitle: 'Deck & Fence Restoration',
        slug: 'deck-fence-restoration',
        description1: 'Revitalize your outdoor spaces with our expert restoration. Bring back the beauty of your deck and fence. Don’t miss out—renew your space now!',
        description2: 'Transform your deck and fence with our professional restoration service. Enhance your outdoor living—act now and enjoy a renewed space!',
        description3: 'Our deck and fence restoration brings new life to your outdoor areas, increasing their lifespan and beauty. Don’t wait—renew your space today with our expertise!',
        description4: 'Restore the charm of your deck and fence with our skilled restoration service. Enhance your outdoor enjoyment. Don’t delay—renew your space now!',
        ssImg1: sdeckandfence1,
        ssImg2: sdeckandfence2,
    },
    {
        Id: '6',
        sImg: simg6,
        sIcon: sIconhousewash,
        sTitle: 'House Wash',
        slug: 'house-wash',
        description1: 'Revive your home’s exterior with our superior house washing service. Remove dirt and grime for a fresh look. Don’t wait—boost your home’s curb appeal today!',
        description2: 'Refresh your home’s exterior with our comprehensive house wash. Achieve a spotless finish and impress your neighbors. Schedule your house wash now!',
        description3: 'Our house washing service eliminates dirt and mildew, giving your home a fresh, clean appearance. Stand out in your neighborhood—book your wash today!',
        description4: 'Enhance your home’s exterior with our professional house wash. Remove dirt and stains for a pristine look. Contact us today and make your home shine!',
        ssImg1: shousewash1,
        ssImg2: shousewash2,
    },
    
    
    
]
export default Services;