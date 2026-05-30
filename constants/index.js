const mobileNavLinks = [
  { label: "Home", ariaLabel: "Home page", link: "/" },
  { label: "About Us", ariaLabel: "About us page", link: "/about-us" },
  { label: "Contact Us", ariaLabel: "Contact us page", link: "/contact-us" },
  { label: "Blogs", ariaLabel: "Blogs page", link: "/blogs" },
  { label: "Courses", ariaLabel: "Courses page", link: "/courses" },
  { label: "Podcasts", ariaLabel: "Podcasts page", link: "/podcasts" },
];

const mobileNavAuth = [
  { label: "Login", link: "/login" },
  { label: "Register", link: "/register" },
];

const footerList = [
  { text: "Home", link: "/" },
  { text: "Blogs", link: "/blogs" },
  { text: "Podcasts", link: "/podcasts" },
  { text: "Contact Us", link: "/contact-us" },
];

const footerSocialLinks = [
  {
    image: "/images/facebook-icon.svg",
    link: "https://www.facebook.com",
    alt: "facebook page",
  },
  {
    image: "/images/instagram-icon.svg",
    link: "https://www.instagram.com",
    alt: "instagram page",
  },
  {
    image: "/images/linkedin-icon.svg",
    link: "https://www.linkedin.com",
    alt: "linkedin page",
  },
  {
    image: "/images/x-icon.svg",
    link: "https://www.x.com",
    alt: "x page",
  },
];

const featuredExpertsList = [
  {
    name: "Rachna Prasad",
    role: "Fractional CMO and Marketing Strategist",
    image: "/images/home/expert1.jpg",
  },
  {
    name: "Aarav Patel",
    role: "Personal and Employer Branding",
    image: "/images/home/expert2.jpg",
  },
  {
    name: "Rajash Nair",
    role: "Leadership and Growth Strategist ",
    image: "/images/home/expert3.jpg",
  },
  {
    name: "Nehar Kapoor",
    role: "Financial and Venture Advisor",
    image: "/images/home/expert4.jpg",
  },
];

const trendingExpertsList = [
  {
    name: "Aditya Verma",
    role: "Cloud Solutions Architect",
    image: "/images/home/expert5.jpg",
  },
  {
    name: "Sanjana Iyer",
    role: "Digital Transformation Consultant",
    image: "/images/home/expert6.jpg",
  },
  {
    name: "Meera Das",
    role: "Human Resources Business Partner",
    image: "/images/home/expert7.jpg",
  },
  {
    name: "Aarav Patel",
    role: "Personal and Employer Branding",
    image: "/images/home/expert2.jpg",
  },
];

const steps = [
  {
    id: 1,
    title: "Step 1",
    description: "Create your profile",
    position: "top",
  },
  {
    id: 2,
    title: "Step 2",
    description: "Find the Guest Lecturers / Organizers",
    position: "bottom",
  },
  {
    id: 3,
    title: "Step 3",
    description: "Make connection",
    position: "top",
  },
  {
    id: 4,
    title: "Step 4",
    description: "Schedule the Event",
    position: "bottom",
  },
];

const trendingBlogsList = [
  {
    name: "Anil Deshmukh",
    pfp: "/images/home/blog-pfp1.jpg",
    title: "How to Choose the Perfect Speaker for your Event",
    image: "/images/home/blog1.jpg",
  },
  {
    name: "Vikram Mehta",
    pfp: "/images/home/blog-pfp2.jpg",
    title: "The Benefits of Hiring Professional Speakers for Events",
    image: "/images/home/blog2.jpg",
  },
  {
    name: "Diyar Sharma",
    pfp: "/images/home/blog-pfp3.jpg",
    title: "Top 10 Traits of a Great Public Speaker",
    image: "/images/home/blog3.jpg",
  },
  {
    name: "Priya Rao",
    pfp: "/images/home/blog-pfp4.jpg",
    title: "Why Diversity in Event Speakers Matters",
    image: "/images/home/blog4.jpg",
  },
];

const testimonialsList = [
  {
    quote:
      "VoxVertex has significantly enhanced my student engagement through insightful guest lectures from diverse industry leaders.",
    name: "Emily Johnson",
    image: "/images/about/testimonial1.jpg",
    stars: 5,
  },
  {
    quote:
      "The platform's user-friendly design made it easy for our organization to connect with expert speakers.",
    name: "Mark Smith",
    image: "/images/about/testimonial2.jpg",
    stars: 5,
  },
  {
    quote:
      "Our curriculum has been revitalized by the real-world perspectives brought in by VoxVertex experts. It’s exactly what our students needed.",
    name: "Sarah Williams",
    image: "/images/about/testimonial3.jpg",
    stars: 4,
  },
  {
    quote:
      "Bridging the gap between theoretical knowledge and industry application has never been smoother. A game-changer for our department.",
    name: "David Brown",
    image: "/images/about/testimonial6.jpg",
    stars: 5,
  },
  {
    quote:
      "The quality of speakers we found here was exceptional. VoxVertex made the logistics of organizing guest lectures completely effortless.",
    name: "Jessica Chen",
    image: "/images/about/testimonial5.jpg",
    stars: 4,
  },
  {
    quote:
      "An incredible resource for professional development. The sessions we booked sparked amazing discussions and networking opportunities for our team.",
    name: "Ayesha Patel",
    image: "/images/about/testimonial4.jpg",
    stars: 5,
  },
];

const faqDetails = [
  {
    question: "Can I contact the speakers directly through the platform?",
    answer:
      "Yes, once you have created an account, you can use our secure internal messaging system to inquire about availability, discuss event topics, and clarify requirements before finalizing a booking.",
  },
  {
    question: "Is there a fee to book a speaker through the platform?",
    answer:
      "Browsing our roster is free. When you decide to book a speaker, the total cost will include the speaker’s set honorarium plus a small Voxvertex service fee, which covers platform maintenance, secure payment processing, and customer support.",
  },
  {
    question: "How do I leave feedback or a review for a speaker?",
    answer:
      "After your scheduled event has concluded, you will receive a prompt via email and on your dashboard to rate your experience. We encourage honest reviews as they help maintain the quality of our community and assist other organizers.",
  },
  {
    question: "Can I filter speakers by virtual or in-person availability?",
    answer:
      "Absolutely. Our search filters allow you to sort experts by delivery format (Virtual, In-Person, or Hybrid). You can also filter by location to find local speakers for physical events to minimize travel logistics.",
  },
  {
    question: "How can I sign up as a speaker?",
    answer:
      "Click the 'Join as an Expert' button on our homepage. You will be guided to create a profile where you can upload your bio, headshot, topics of expertise, and past speaking clips. All profiles are reviewed to ensure quality standards.",
  },
  {
    question: "Is there a fee for speakers to join the platform?",
    answer:
      "Joining Voxvertex is typically free. We operate on a commission model, meaning there are no upfront subscription fees; a small percentage is deducted only when you successfully get paid for a booking.",
  },
  {
    question: "How do I get paid for speaking engagements?",
    answer:
      "Payments are handled securely through the platform. Funds are held in escrow when the organizer books you and are released to your connected bank account or payment processor (e.g., Stripe) 3–5 days after the event is successfully completed.",
  },
  {
    question: "How do I improve my chances of getting booked?",
    answer:
      "A complete profile is key. Upload a high-quality photo, write a compelling bio, and most importantly, include video clips of previous talks. Responsiveness to inquiries and accumulating positive reviews from early bookings also significantly boosts your ranking.",
  },
];

const featuredBlogsList = [
  {
    name: "Rohan Gupta",
    pfp: "/images/blogs/fpfp1.jpg",
    title: "Navigating the Shift to Hybrid Events in 2025",
    image: "/images/blogs/fblog1.jpg",
  },
  {
    name: "Meera Iyer",
    pfp: "/images/blogs/fpfp2.jpg",
    title: "The Psychology of Persuasion in Public Speaking",
    image: "/images/blogs/fblog2.jpg",
  },
  {
    name: "Arjun Nair",
    pfp: "/images/blogs/fpfp3.jpg",
    title: "Corporate Training: Bridging the Skills Gap",
    image: "/images/blogs/fblog3.jpg",
  },
  {
    name: "Kavita Reddy",
    pfp: "/images/blogs/fpfp4.jpg",
    title: "Storytelling Techniques that Captivate Audiences",
    image: "/images/blogs/fblog4.jpg",
  },
];

const blogsCategoryList = [
  "Technology",
  "Education",
  "Healthcare & Medicine",
  "Law & Legal Studies",
  "Finance & Banking",
  "View all",
];

const allBlogsList = [
  {
    category: "Technology",
    name: "Rohan Gupta",
    pfp: "/images/blogs/fpfp1.jpg",
    title: "Navigating the Shift to Hybrid Events in 2025",
    image: "/images/blogs/fblog1.jpg",
  },
  {
    category: "Healthcare & Medicine",
    name: "Meera Iyer",
    pfp: "/images/blogs/fpfp2.jpg",
    title: "The Psychology of Persuasion in Public Speaking",
    image: "/images/blogs/fblog2.jpg",
  },
  {
    category: "Education",
    name: "Arjun Nair",
    pfp: "/images/blogs/fpfp3.jpg",
    title: "Corporate Training: Bridging the Skills Gap",
    image: "/images/blogs/fblog3.jpg",
  },
  {
    category: "Education",
    name: "Kavita Reddy",
    pfp: "/images/blogs/fpfp4.jpg",
    title: "Storytelling Techniques that Captivate Audiences",
    image: "/images/blogs/fblog4.jpg",
  },
  {
    category: "Education",
    name: "Anil Deshmukh",
    pfp: "/images/home/blog-pfp1.jpg",
    title: "How to Choose the Perfect Speaker for your Event",
    image: "/images/home/blog1.jpg",
  },
  {
    category: "Finance & Banking",
    name: "Vikram Mehta",
    pfp: "/images/home/blog-pfp2.jpg",
    title: "The Benefits of Hiring Professional Speakers for Events",
    image: "/images/home/blog2.jpg",
  },
  {
    category: "Education",
    name: "Diyar Sharma",
    pfp: "/images/home/blog-pfp3.jpg",
    title: "Top 10 Traits of a Great Public Speaker",
    image: "/images/home/blog3.jpg",
  },
  {
    category: "Law & Legal Studies",
    name: "Priya Rao",
    pfp: "/images/home/blog-pfp4.jpg",
    title: "Why Diversity in Event Speakers Matters",
    image: "/images/home/blog4.jpg",
  },
  {
    category: "Technology",
    name: "Aryan Kapoor",
    pfp: "/images/blogs/pfp-aryan.jpg",
    title: "The Future of Conferences: Integrating VR and AR",
    image: "/images/blogs/blog-tech.jpg",
  },
  {
    category: "Education",
    name: "Sanya Mirza",
    pfp: "/images/blogs/pfp-sanya.jpg",
    title: "Using Humour Effectively in Corporate Presentations",
    image: "/images/blogs/blog-humour.jpg",
  },
  {
    category: "Healthcare & Medicine",
    name: "Rahul Verma",
    pfp: "/images/blogs/pfp-rahul.jpg",
    title: "Overcoming Stage Fright: A Guide for Executive Leaders",
    image: "/images/blogs/blog-stagefright.jpg",
  },
  {
    category: "Law & Legal Studies",
    name: "Ishaan Malhotra",
    pfp: "/images/blogs/pfp-ishaan.jpg",
    title: "Moderating Panel Discussions Like a Pro",
    image: "/images/blogs/blog-panel.jpg",
  },
  {
    category: "Finance & Banking",
    name: "Neha Singh",
    pfp: "/images/blogs/pfp-neha.jpg",
    title: "Building Your Personal Brand Through Public Speaking",
    image: "/images/blogs/blog-branding.jpg",
  },
  {
    category: "Technology",
    name: "Karthik Iyer",
    pfp: "/images/blogs/pfp-karthik.jpg",
    title: "Sustainable Events: Reducing Carbon Footprints in 2026",
    image: "/images/blogs/blog-sustainability.jpg",
  },
  {
    category: "Education",
    name: "Ananya Roy",
    pfp: "/images/blogs/pfp-ananya.jpg",
    title: "Mastering Voice Modulation for Maximum Impact",
    image: "/images/blogs/blog-voice.jpg",
  },
  {
    category: "Law & Legal Studies",
    name: "Suresh Patel",
    pfp: "/images/blogs/pfp-suresh.jpg",
    title: "Leadership Communication in Times of Crisis",
    image: "/images/blogs/blog-crisis.jpg",
  },
  {
    category: "Finance & Banking",
    name: "Pooja Hegde",
    pfp: "/images/blogs/pfp-pooja.jpg",
    title: "Networking Strategies for Introverted Speakers",
    image: "/images/blogs/blog-networking.jpg",
  },
  {
    category: "Education",
    name: "Manish Tiwari",
    pfp: "/images/blogs/pfp-manish.jpg",
    title: "Keynote Speaking Trends to Watch This Year",
    image: "/images/blogs/blog-trends.jpg",
  },
  {
    category: "Technology",
    name: "Riya Sen",
    pfp: "/images/blogs/pfp-riya.jpg",
    title: "Death by PowerPoint: Designing Slides that Engage",
    image: "/images/blogs/blog-design.jpg",
  },
  {
    category: "Education",
    name: "Aditya Joshi",
    pfp: "/images/blogs/pfp-aditya.jpg",
    title: "Interactive Techniques to Keep Audiences Awake",
    image: "/images/blogs/blog-interactive.jpg",
  },
];

const featuredCoursesList = [
  {
    name: "Anil Deshmukh",
    pfp: "/images/home/blog-pfp1.jpg",
    title: "The Complete Guide to Organizing Virtual and Hybrid Study.",
    image: "/images/courses/courses1.jpg",
  },
  {
    name: "Vikram Mehta",
    pfp: "/images/home/blog-pfp2.jpg",
    title: "Event Planning Essentials: From Concept to Execution",
    image: "/images/courses/courses2.jpg",
  },
  {
    name: "Diyar Sharma",
    pfp: "/images/home/blog-pfp3.jpg",
    title: "Public Speaking Trends: Staying Ahead in a Changing Industry",
    image: "/images/courses/courses3.jpg",
  },
  {
    name: "Priya Rao",
    pfp: "/images/home/blog-pfp4.jpg",
    title: "Negotiating Speaker Fees: Strategies for Every Event Budget",
    image: "/images/courses/courses4.jpg",
  },
];

const trendingCoursesList = [
  {
    name: "Rohan Gupta",
    pfp: "/images/blogs/fpfp1.jpg",
    title: "Mastering Digital Leadership: Leading Remote Teams Effectively",
    image: "/images/courses/courses5.jpg",
  },
  {
    name: "Meera Iyer",
    pfp: "/images/blogs/fpfp2.jpg",
    title: "The Psychology of Negotiation: Closing Deals with Confidence",
    image: "/images/courses/courses6.jpg",
  },
  {
    name: "Arjun Nair",
    pfp: "/images/blogs/fpfp3.jpg",
    title: "Corporate Training: Bridging the Skills Gap",
    image: "/images/courses/courses7.jpg",
  },
  {
    name: "Kavita Reddy",
    pfp: "/images/blogs/fpfp4.jpg",
    title: "Sustainable Business Strategies: Green Innovation for 2026",
    image: "/images/courses/courses8.jpg",
  },
];

const coursesCategoryList = [
  "Technology",
  "Education",
  "Healthcare & Medicine",
  "Law & Legal Studies",
  "Finance & Banking",
  "View all",
];

export const allCoursesList = [
  {
    category: "Education",
    name: "Anil Deshmukh",
    pfp: "/images/home/blog-pfp1.jpg",
    title: "The Complete Guide to Organizing Virtual and Hybrid Study",
    image: "/images/courses/courses1.jpg",
  },
  {
    category: "Education",
    name: "Vikram Mehta",
    pfp: "/images/home/blog-pfp2.jpg",
    title: "Event Planning Essentials: From Concept to Execution",
    image: "/images/courses/courses2.jpg",
  },
  {
    category: "Education",
    name: "Diyar Sharma",
    pfp: "/images/home/blog-pfp3.jpg",
    title: "Public Speaking Trends: Staying Ahead in a Changing Industry",
    image: "/images/courses/courses3.jpg",
  },
  {
    category: "Finance & Banking",
    name: "Priya Rao",
    pfp: "/images/home/blog-pfp4.jpg",
    title: "Negotiating Speaker Fees: Strategies for Every Event Budget",
    image: "/images/courses/courses4.jpg",
  },
  {
    category: "Technology",
    name: "Rohan Gupta",
    pfp: "/images/blogs/fpfp1.jpg",
    title: "Mastering Digital Leadership: Leading Remote Teams Effectively",
    image: "/images/courses/courses5.jpg",
  },
  {
    category: "Law & Legal Studies",
    name: "Meera Iyer",
    pfp: "/images/blogs/fpfp2.jpg",
    title: "The Psychology of Negotiation: Closing Deals with Confidence",
    image: "/images/courses/courses6.jpg",
  },
  {
    category: "Education",
    name: "Arjun Nair",
    pfp: "/images/blogs/fpfp3.jpg",
    title: "Corporate Training: Bridging the Skills Gap",
    image: "/images/courses/courses7.jpg",
  },
  {
    category: "Finance & Banking",
    name: "Kavita Reddy",
    pfp: "/images/blogs/fpfp4.jpg",
    title: "Sustainable Business Strategies: Green Innovation for 2026",
    image: "/images/courses/courses8.jpg",
  },
  {
    category: "Technology",
    name: "Aryan Kapoor",
    pfp: "/images/blogs/pfp-aryan.jpg",
    title: "Artificial Intelligence: Practical Applications in Business",
    image: "/images/courses/courses-ai.jpg",
  },
  {
    category: "Healthcare & Medicine",
    name: "Sanya Mirza",
    pfp: "/images/blogs/pfp-sanya.jpg",
    title: "Mental Health Resilience for High-Performance Teams",
    image: "/images/courses/courses-health.jpg",
  },
  {
    category: "Law & Legal Studies",
    name: "Rahul Verma",
    pfp: "/images/blogs/pfp-rahul.jpg",
    title: "Intellectual Property 101: Protecting Your Creative Work",
    image: "/images/courses/courses-law.jpg",
  },
  {
    category: "Finance & Banking",
    name: "Ishaan Malhotra",
    pfp: "/images/blogs/pfp-ishaan.jpg",
    title: "Crypto & Blockchain: Understanding the Future of Money",
    image: "/images/courses/courses-crypto.jpg",
  },
  {
    category: "Technology",
    name: "Neha Singh",
    pfp: "/images/blogs/pfp-neha.jpg",
    title: "Cybersecurity Fundamentals: Safe Practices for Enterprises",
    image: "/images/courses/courses-cyber.jpg",
  },
  {
    category: "Healthcare & Medicine",
    name: "Karthik Iyer",
    pfp: "/images/blogs/pfp-karthik.jpg",
    title: "Nutrition and Wellness: Optimizing Productivity",
    image: "/images/courses/courses-nutrition.jpg",
  },
  {
    category: "Law & Legal Studies",
    name: "Ananya Roy",
    pfp: "/images/blogs/pfp-ananya.jpg",
    title: "Corporate Law Essentials: Compliance and Contracts",
    image: "/images/courses/courses-corp-law.jpg",
  },
  {
    category: "Finance & Banking",
    name: "Suresh Patel",
    pfp: "/images/blogs/pfp-suresh.jpg",
    title: "Personal Wealth Management: Investing for the Long Term",
    image: "/images/courses/courses-wealth.jpg",
  },
  {
    category: "Education",
    name: "Pooja Hegde",
    pfp: "/images/blogs/pfp-pooja.jpg",
    title: "Advanced Curriculum Design for Modern Educators",
    image: "/images/courses/courses-edu-design.jpg",
  },
  {
    category: "Technology",
    name: "Manish Tiwari",
    pfp: "/images/blogs/pfp-manish.jpg",
    title: "Data Visualization: Telling Stories with Big Data",
    image: "/images/courses/courses-data.jpg",
  },
  {
    category: "Healthcare & Medicine",
    name: "Riya Sen",
    pfp: "/images/blogs/pfp-riya.jpg",
    title: "Emergency Response Training for Corporate Environments",
    image: "/images/courses/courses-emergency.jpg",
  },
  {
    category: "Law & Legal Studies",
    name: "Aditya Joshi",
    pfp: "/images/blogs/pfp-aditya.jpg",
    title: "Conflict Resolution and Mediation in the Workplace",
    image: "/images/courses/courses-mediation.jpg",
  },
];

const featuredPodcastsList = [
  {
    name: "Anil Deshmukh",
    pfp: "/images/home/blog-pfp1.jpg",
    title:
      "The Remote Work Revolution: Conversations on the Future of Business",
    image: "/images/podcasts/podcast1.jpg",
  },
  {
    name: "Vikram Mehta",
    pfp: "/images/home/blog-pfp2.jpg",
    title: "Behind the Curtain: Stories from Top Event Planners",
    image: "/images/podcasts/podcast2.jpg",
  },
  {
    name: "Diyar Sharma",
    pfp: "/images/home/blog-pfp3.jpg",
    title: "Speak Up: Mastering the Art of Communication",
    image: "/images/podcasts/podcast3.jpg",
  },
  {
    name: "Priya Rao",
    pfp: "/images/home/blog-pfp4.jpg",
    title: "The Deal Maker: Negotiation Tactics for Creative Professionals",
    image: "/images/podcasts/podcast4.jpg",
  },
];

const trendingPodcastsList = [
  {
    name: "Rohan Gupta",
    pfp: "/images/blogs/fpfp1.jpg",
    title: "The Virtual Boardroom: Strategies for Modern Leadership",
    image: "/images/podcasts/podcast5.jpg",
  },
  {
    name: "Meera Iyer",
    pfp: "/images/blogs/fpfp2.jpg",
    title: "Mind Over Market: The Science of Persuasion",
    image: "/images/podcasts/podcast6.jpg",
  },
  {
    name: "Arjun Nair",
    pfp: "/images/blogs/fpfp3.jpg",
    title: "The Upskill Hour: Bridging the Talent Gap",
    image: "/images/podcasts/podcast7.jpg",
  },
  {
    name: "Kavita Reddy",
    pfp: "/images/blogs/fpfp4.jpg",
    title: "Eco-nomics: The Future of Green Business",
    image: "/images/podcasts/podcast8.jpg",
  },
];

const podcastsCategoryList = [
  "Technology",
  "Education",
  "Healthcare & Medicine",
  "Law & Legal Studies",
  "Finance & Banking",
  "View all",
];

const allPodcastsList = [
  {
    category: "Technology",
    name: "Anil Deshmukh",
    pfp: "/images/home/blog-pfp1.jpg",
    title:
      "The Remote Work Revolution: Conversations on the Future of Business",
    image: "/images/podcasts/podcast1.jpg",
  },
  {
    category: "Education",
    name: "Vikram Mehta",
    pfp: "/images/home/blog-pfp2.jpg",
    title: "Behind the Curtain: Stories from Top Event Planners",
    image: "/images/podcasts/podcast2.jpg",
  },
  {
    category: "Education",
    name: "Diyar Sharma",
    pfp: "/images/home/blog-pfp3.jpg",
    title: "Speak Up: Mastering the Art of Communication",
    image: "/images/podcasts/podcast3.jpg",
  },
  {
    category: "Finance & Banking",
    name: "Priya Rao",
    pfp: "/images/home/blog-pfp4.jpg",
    title: "The Deal Maker: Negotiation Tactics for Creative Professionals",
    image: "/images/podcasts/podcast4.jpg",
  },
  {
    category: "Technology",
    name: "Rohan Gupta",
    pfp: "/images/blogs/fpfp1.jpg",
    title: "The Virtual Boardroom: Strategies for Modern Leadership",
    image: "/images/podcasts/podcast5.jpg",
  },
  {
    category: "Finance & Banking", 
    name: "Meera Iyer",
    pfp: "/images/blogs/fpfp2.jpg",
    title: "Mind Over Market: The Science of Persuasion",
    image: "/images/podcasts/podcast6.jpg",
  },
  {
    category: "Education",
    name: "Arjun Nair",
    pfp: "/images/blogs/fpfp3.jpg",
    title: "The Upskill Hour: Bridging the Talent Gap",
    image: "/images/podcasts/podcast7.jpg",
  },
  {
    category: "Finance & Banking",
    name: "Kavita Reddy",
    pfp: "/images/blogs/fpfp4.jpg",
    title: "Eco-nomics: The Future of Green Business",
    image: "/images/podcasts/podcast8.jpg",
  },
  {
    category: "Technology",
    name: "Aryan Kapoor",
    pfp: "/images/blogs/pfp-aryan.jpg",
    title: "The VR Frontier: Podcasting in the Metaverse",
    image: "/images/podcasts/podcast-vr.jpg",
  },
  {
    category: "Education",
    name: "Sanya Mirza",
    pfp: "/images/blogs/pfp-sanya.jpg",
    title: "EdTech Talks: Gamifying the Classroom Experience",
    image: "/images/podcasts/podcast-edtech.jpg",
  },
  {
    category: "Healthcare & Medicine",
    name: "Rahul Verma",
    pfp: "/images/blogs/pfp-rahul.jpg",
    title: "The MedTech Pulse: Innovations in Digital Health",
    image: "/images/podcasts/podcast-health.jpg",
  },
  {
    category: "Law & Legal Studies",
    name: "Ishaan Malhotra",
    pfp: "/images/blogs/pfp-ishaan.jpg",
    title: "Legal Eagles: Intellectual Property in the AI Age",
    image: "/images/podcasts/podcast-law.jpg",
  },
  {
    category: "Finance & Banking",
    name: "Neha Singh",
    pfp: "/images/blogs/pfp-neha.jpg",
    title: "Market Watch: Decoding Crypto Regulations",
    image: "/images/podcasts/podcast-crypto.jpg",
  },
  {
    category: "Technology",
    name: "Karthik Iyer",
    pfp: "/images/blogs/pfp-karthik.jpg",
    title: "Green Tech: Engineering a Carbon-Neutral Future",
    image: "/images/podcasts/podcast-green.jpg",
  },
  {
    category: "Education",
    name: "Ananya Roy",
    pfp: "/images/blogs/pfp-ananya.jpg",
    title: "Voice of Authority: The Science of Vocal Projection",
    image: "/images/podcasts/podcast-voice.jpg",
  },
  {
    category: "Law & Legal Studies",
    name: "Suresh Patel",
    pfp: "/images/blogs/pfp-suresh.jpg",
    title: "Crisis Management: Legal Strategies for Startups",
    image: "/images/podcasts/podcast-crisis.jpg",
  },
  {
    category: "Finance & Banking",
    name: "Pooja Hegde",
    pfp: "/images/blogs/pfp-pooja.jpg",
    title: "Wealth Wisdom: Financial Freedom for Millennials",
    image: "/images/podcasts/podcast-wealth.jpg",
  },
  {
    category: "Education",
    name: "Manish Tiwari",
    pfp: "/images/blogs/pfp-manish.jpg",
    title: "Keynote Chronicles: What Makes a Speech Viral?",
    image: "/images/podcasts/podcast-keynote.jpg",
  },
  {
    category: "Technology",
    name: "Riya Sen",
    pfp: "/images/blogs/pfp-riya.jpg",
    title: "Design Matters: Visual Storytelling for Audio",
    image: "/images/podcasts/podcast-design.jpg",
  },
  {
    category: "Law & Legal Studies",
    name: "Aditya Joshi",
    pfp: "/images/blogs/pfp-aditya.jpg",
    title: "The Mediator: Conflict Resolution in Real Time",
    image: "/images/podcasts/podcast-conflict.jpg",
  },
];

export {
  mobileNavLinks,
  mobileNavAuth,
  footerList,
  footerSocialLinks,
  featuredExpertsList,
  trendingExpertsList,
  steps,
  trendingBlogsList,
  testimonialsList,
  faqDetails,
  featuredBlogsList,
  allBlogsList,
  blogsCategoryList,
  featuredCoursesList,
  trendingCoursesList,
  coursesCategoryList,
  allCoursesList,
  featuredPodcastsList,
  trendingPodcastsList,
  podcastsCategoryList,
  allPodcastsList,
};
