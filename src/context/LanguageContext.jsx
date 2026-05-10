import { createContext, useState, useContext } from 'react'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en')

  const translations = {
    en: {
      // Navigation
      home: 'Home',
      products: 'Products',
      workshops: 'Workshops',
      events: 'Events',
      about: 'About',
      
      // Buttons
      bookNow: 'Book Now',
      register: 'Register',
      learnMore: 'Learn More',
      viewAll: 'View All',
      subscribe: 'Subscribe',
      submit: 'Submit',
      close: 'Close',
      tryAgain: 'Try Again',
      clearFilters: 'Clear Filters',
      goHome: 'Go Home',
      goBack: 'Go Back',
      emailUs: 'Email Us',
      callUs: 'Call Us',
      
      // Form labels
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      message: 'Message',
      specialRequests: 'Special Requests',
      numberOfGuests: 'Number of Guests',
      enterEmail: 'Enter your email',
      
      // Search & Filter
      search: 'Search...',
      allCategories: 'All Categories',
      sortBy: 'Sort by',
      priceLowHigh: 'Price: Low to High',
      priceHighLow: 'Price: High to Low',
      dateSoonest: 'Date: Soonest First',
      spotsFirst: 'Availability: Most Spots First',
      
      // Status
      loading: 'Loading...',
      error: 'An error occurred',
      errorOccurred: 'Something went wrong. Please try again.',
      unableToLoadWeather: 'Unable to load weather for',
      inStock: 'In Stock',
      outOfStock: 'Out of Stock',
      confirmed: 'Confirmed',
      priceFree: 'FREE',
      fullyBooked: 'Event Fully Booked',
      
      // Product related
      price: 'Price',
      availability: 'Availability',
      sustainability: 'Sustainability',
      productDetails: 'Product Details',
      viewDetailsFor: 'View details for',
      book: 'Book',
      
      // Workshop related
      date: 'Date',
      duration: 'Duration',
      instructor: 'Instructor',
      location: 'Location',
      whatYoullLearn: 'What You\'ll Learn',
      
      // Event related
      capacity: 'Capacity',
      registered: 'Registered',
      spotsLeft: 'spots left',
      eventHighlights: 'Event Highlights',
      
      // Weather
      weatherInfo: 'Weather Info',
      outdoorEvent: 'Outdoor Event',
      indoorEvent: 'Indoor Event',
      
      // Home page
      heroTitle: 'Welcome to Urban Harvest Hub',
      heroSubtitle: 'Your one-stop destination for sustainable living',
      exploreProducts: 'Explore Products',
      whyChooseUs: 'Why Choose Us?',
      ecoFriendlyProducts: 'Eco-Friendly Products',
      ecoFriendlyDesc: 'Carefully curated sustainable products for your daily needs',
      educationalWorkshops: 'Educational Workshops',
      educationalDesc: 'Learn sustainable practices from expert instructors',
      communityEvents: 'Community Events',
      communityDesc: 'Connect with like-minded eco-conscious individuals',
      featuredProducts: 'Featured Products',
      upcomingWorkshops: 'Upcoming Workshops',
      communityEventsTitle: 'Community Events',
      stayUpdated: 'Stay Updated',
      newsletterText: 'Subscribe to our newsletter for eco-friendly tips and exclusive offers',
      
      // Products page
      ourProducts: 'Our Eco-Friendly Products',
      productsDesc: 'Discover our curated collection of sustainable products designed to help you live a greener lifestyle',
      workshopsDesc: 'Join our hands-on workshops and learn practical skills for sustainable living',
      eventsDesc: 'Join our community events and connect with like-minded individuals passionate about sustainability',
      found: 'Found',
      noResults: 'No products found matching your criteria.',
      
      // Detail pages
      productNotFound: 'Product not found',
      workshopNotFound: 'Workshop not found',
      eventNotFound: 'Event not found',
      backToProducts: 'Back to Products',
      backToWorkshops: 'Back to Workshops',
      backToEvents: 'Back to Events',
      
      // Booking page
      myBookings: 'My Bookings',
      noBookings: 'You have no bookings yet.',
      browseProducts: 'Browse Products',
      bookedOn: 'Booked on',
      type: 'Type',
      
      // About page
      aboutUs: 'About Urban Harvest Hub',
      aboutDesc: 'Empowering communities to live sustainably through education, products, and connection',
      ourMission: 'Our Mission',
      missionText: 'At Urban Harvest Hub, we believe that sustainable living should be accessible to everyone. Our mission is to bridge the gap between eco-conscious consumers and sustainable solutions by providing high-quality products, educational workshops, and community events that inspire positive environmental action.',
      ourCoreValues: 'Our Core Values',
      ourStory: 'Our Story',
      storyText1: 'Founded in 2024, Urban Harvest Hub started as a small community initiative focused on promoting urban gardening and sustainable living practices in our local neighborhood.',
      storyText2: 'What began as a weekend gardening club has grown into a thriving platform connecting thousands of eco-conscious individuals with sustainable products, educational workshops, and community events.',
      storyText3: 'Today, we\'re proud to serve a growing community of changemakers who are committed to making sustainable living a reality in urban environments.',
      meetOurTeam: 'Meet Our Team',
      getInTouch: 'Get In Touch',
      contactText: 'Have questions or want to collaborate? We\'d love to hear from you!',
      
      // Footer
      quickLinks: 'Quick Links',
      contactUs: 'Contact Us',
      followUs: 'Follow Us',
      allRightsReserved: 'All rights reserved.',
      
      // 404 page
      pageNotFound: 'Page Not Found',
      pageNotFoundDesc: 'Oops! The page you\'re looking for doesn\'t exist or has been moved.'
    },
    si: {
      // Navigation
      home: 'මුල් පිටුව',
      products: 'නිෂ්පාදන',
      workshops: 'වැඩමුළු',
      events: 'උත්සව',
      about: 'අපි ගැන',
      
      // Buttons
      bookNow: 'දැන් වෙන්කරවා ගන්න',
      register: 'ලියාපදිංචි වන්න',
      learnMore: 'වැඩිදුර ඉගෙන ගන්න',
      viewAll: 'සියල්ල බලන්න',
      subscribe: 'දායක වන්න',
      submit: 'ඉදිරිපත් කරන්න',
      close: 'වසන්න',
      tryAgain: 'නැවත උත්සාහ කරන්න',
      clearFilters: 'පෙරහන් ඉවත් කරන්න',
      goHome: 'මුල් පිටුවට යන්න',
      goBack: 'ආපසු යන්න',
      emailUs: 'අපට විද්‍යුත් තැපෑලක් යවන්න',
      callUs: 'අපට අමතන්න',
      
      // Form labels
      name: 'නම',
      email: 'විද්‍යුත් තැපෑල',
      phone: 'දුරකථනය',
      message: 'පණිවිඩය',
      specialRequests: 'විශේෂ ඉල්ලීම්',
      numberOfGuests: 'ආරාධිතයන් ගණන',
      enterEmail: 'ඔබගේ විද්‍යුත් තැපෑල ඇතුළත් කරන්න',
      
      // Search & Filter
      search: 'සොයන්න...',
      allCategories: 'සියලුම කාණ්ඩ',
      sortBy: 'වර්ග කරන්න',
      priceLowHigh: 'මිල: අඩුවෙන් වැඩිට',
      priceHighLow: 'මිල: වැඩියෙන් අඩුට',
      dateSoonest: 'දිනය: ලඟම පළමුව',
      spotsFirst: 'පවතින බව: වැඩිම ඉඩකඩ පළමුව',
      
      // Status
      loading: 'පූරණය වෙමින්...',
      error: 'දෝෂයක් ඇතිවිය',
      errorOccurred: 'යම් දෝෂයක් සිදුවිය. කරුණාකර නැවත උත්සාහ කරන්න.',
      unableToLoadWeather: 'කාලගුණ තොරතුරු ලබා ගැනීමට නොහැකිය',
      inStock: 'තොගයේ ඇත',
      outOfStock: 'තොගයේ නැත',
      confirmed: 'තහවුරු කර ඇත',
      priceFree: 'නොමිලේ',
      fullyBooked: 'උත්සවය සම්පූර්ණයෙන් වෙන්කරවා ඇත',
      
      // Product related
      price: 'මිල',
      availability: 'පවතින බව',
      sustainability: 'තිරසාරත්වය',
      productDetails: 'නිෂ්පාදන විස්තර',
      viewDetailsFor: 'සඳහා විස්තර බලන්න',
      book: 'වෙන්කරවා ගන්න',
      
      // Workshop related
      date: 'දිනය',
      duration: 'කාලසීමාව',
      instructor: 'උපදේශක',
      location: 'ස්ථානය',
      whatYoullLearn: 'ඔබ ඉගෙන ගන්නේ කුමක්ද',
      
      // Event related
      capacity: 'ධාරිතාව',
      registered: 'ලියාපදිංචි වී ඇත',
      spotsLeft: 'ඉඩකඩ ඉතිරිව ඇත',
      eventHighlights: 'උත්සව විශේෂාංග',
      
      // Weather
      weatherInfo: 'කාලගුණ තොරතුරු',
      outdoorEvent: 'එළිමහන් උත්සවය',
      indoorEvent: 'ගෘහස්ථ උත්සවය',
      
      // Home page
      heroTitle: 'අර්බන් හාර්වෙස්ට් හබ් වෙත සාදරයෙන් පිළිගනිමු',
      heroSubtitle: 'තිරසාර ජීවන රටාවක් සඳහා ඔබේ එකම ගමනාන්තය',
      exploreProducts: 'නිෂ්පාදන ගවේෂණය කරන්න',
      whyChooseUs: 'අපව තෝරා ගන්නේ ඇයි?',
      ecoFriendlyProducts: 'පරිසර හිතකාමී නිෂ්පාදන',
      ecoFriendlyDesc: 'ඔබගේ දෛනික අවශ්‍යතා සඳහා ප්‍රවේශමෙන් තෝරාගත් තිරසාර නිෂ්පාදන',
      educationalWorkshops: 'අධ්‍යාපනික වැඩමුළු',
      educationalDesc: 'ප්‍රවීණ උපදේශකයන්ගෙන් තිරසාර භාවිතයන් ඉගෙන ගන්න',
      communityEvents: 'ප්‍රජා උත්සව',
      communityDesc: 'පරිසර හිතකාමී පුද්ගලයන් සමඟ සම්බන්ධ වන්න',
      featuredProducts: 'විශේෂිත නිෂ්පාදන',
      upcomingWorkshops: 'ඉදිරි වැඩමුළු',
      communityEventsTitle: 'ප්‍රජා උත්සව',
      stayUpdated: 'යාවත්කාලීනව තබාගන්න',
      newsletterText: 'පරිසර හිතකාමී උපදෙස් සහ විශේෂ දීමනා සඳහා අපගේ පුවත් පතට දායක වන්න',
      
      // Products page
      ourProducts: 'අපගේ පරිසර හිතකාමී නිෂ්පාදන',
      productsDesc: 'හරිත ජීවන රටාවක් ගත කිරීමට ඔබට උපකාර වන තිරසාර නිෂ්පාදන එකතුව සොයා ගන්න',
      workshopsDesc: 'අපගේ ප්‍රායෝගික වැඩමුළු සඳහා එක්වී තිරසාර ජීවිතයක් සඳහා ප්‍රායෝගික කුසලතා ඉගෙන ගන්න',
      eventsDesc: 'අපගේ ප්‍රජා සිදුවීම් වලට එක්වී තිරසාරභාවය පිළිබඳ උද්‍යෝගිමත් සමාන අදහස් ඇති පුද්ගලයින් සමඟ සම්බන්ධ වන්න',
      found: 'හමු විය',
      noResults: 'ඔබගේ නිර්ණායකවලට ගැලපෙන නිෂ්පාදන හමු නොවීය.',
      
      // Detail pages
      productNotFound: 'නිෂ්පාදනය හමු නොවීය',
      workshopNotFound: 'වැඩමුළුව හමු නොවීය',
      eventNotFound: 'උත්සවය හමු නොවීය',
      backToProducts: 'නිෂ්පාදන වෙත ආපසු',
      backToWorkshops: 'වැඩමුළු වෙත ආපසු',
      backToEvents: 'උත්සව වෙත ආපසු',
      
      // Booking page
      myBookings: 'මගේ වෙන්කිරීම්',
      noBookings: 'ඔබට තවමත් වෙන්කිරීම් නොමැත.',
      browseProducts: 'නිෂ්පාදන බ්‍රවුස් කරන්න',
      bookedOn: 'වෙන්කරවා ගත් දිනය',
      type: 'වර්ගය',
      
      // About page
      aboutUs: 'අර්බන් හාර්වෙස්ට් හබ් ගැන',
      aboutDesc: 'අධ්‍යාපනය, නිෂ්පාදන සහ සම්බන්ධතාවය තුළින් ප්‍රජාවන් තිරසාර ලෙස ජීවත් වීමට සවිබල ගැන්වීම',
      ourMission: 'අපගේ මෙහෙවර',
      missionText: 'අර්බන් හාර්වෙස්ට් හබ් හිදී, අපි විශ්වාස කරන්නේ තිරසාර ජීවිතය සෑම කෙනෙකුටම ප්‍රවේශ විය යුතු බවයි. උසස් තත්ත්වයේ නිෂ්පාදන, අධ්‍යාපනික වැඩමුළු සහ ධනාත්මක පාරිසරික ක්‍රියාකාරකම් සඳහා ප්‍රජා උත්සව සපයා ගැනීමෙන් පරිසර හිතකාමී පාරිභෝගිකයින් සහ තිරසාර විසඳුම් අතර පරතරය පියවීම අපගේ මෙහෙවරයි.',
      ourCoreValues: 'අපගේ මූලික වටිනාකම්',
      ourStory: 'අපගේ කතාව',
      storyText1: '2024 දී ආරම්භ කරන ලද අර්බන් හාර්වෙස්ට් හබ්, අපගේ ප්‍රාදේශීය අසල්වැසි ප්‍රදේශයේ නාගරික ගෙවතු වගාව සහ තිරසාර ජීවන රටාවන් ප්‍රවර්ධනය කිරීම කෙරෙහි අවධානය යොමු කළ කුඩා ප්‍රජා මුලපිරීමක් ලෙස ආරම්භ විය.',
      storyText2: 'සති අන්තයේ ගෙවතු වගා සමාජයක් ලෙස ආරම්භ වූ දෙය, තිරසාර නිෂ්පාදන, අධ්‍යාපනික වැඩමුළු සහ ප්‍රජා උත්සව සමඟ පරිසර හිතකාමී පුද්ගලයන් දහස් ගණනක් සම්බන්ධ කරන සමෘද්ධිමත් වේදිකාවක් දක්වා වර්ධනය වී ඇත.',
      storyText3: 'අද, නාගරික පරිසරයන් තුළ තිරසාර ජීවිතයක් යථාර්ථයක් කිරීමට කැපවී සිටින වර්ධනය වන ප්‍රජාවකට සේවය කිරීමට අපි ආඩම්බර වෙමු.',
      meetOurTeam: 'අපගේ කණ්ඩායම හමුවන්න',
      getInTouch: 'සම්බන්ධ වන්න',
      contactText: 'ප්‍රශ්න තිබේද නැතහොත් සහයෝගයෙන් කටයුතු කිරීමට අවශ්‍යද? ඔබගෙන් ඇසීමට අපි කැමතියි!',
      
      // Footer
      quickLinks: 'ඉක්මන් සබැඳි',
      contactUs: 'අමතන්න',
      followUs: 'අපව අනුගමනය කරන්න',
      allRightsReserved: 'සියලුම හිමිකම් ඇවිරිණි.',
      
      // 404 page
      pageNotFound: 'පිටුව හමු නොවීය',
      pageNotFoundDesc: 'අපොයි! ඔබ සොයන පිටුව නොපවතියි හෝ ගෙන යන ලදී.'
    }
  }

  const t = (key) => {
    return translations[language][key] || translations.en[key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}