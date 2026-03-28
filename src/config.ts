// ============================================================================
// Site Configuration
// ============================================================================

export interface SiteConfig {
  title: string;
  description: string;
  language: string;
}

export const siteConfig: SiteConfig = {
  title: "Resume ATS Checker | Optimize Your Resume for Applicant Tracking Systems",
  description: "Advanced AI-powered resume ATS checker. Scan, analyze, and optimize your resume to pass Applicant Tracking Systems and land more interviews.",
  language: "en",
};

// ============================================================================
// Navigation Configuration
// ============================================================================

export interface NavItem {
  label: string;
  href: string;
}

export interface NavigationConfig {
  logo: string;
  items: NavItem[];
}

export const navigationConfig: NavigationConfig = {
  logo: "ATS SCAN PRO",
  items: [
    { label: "Scan Resume", href: "#upload" },
    { label: "Features", href: "#services" },
    { label: "Success Stories", href: "#works" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
};

// ============================================================================
// Hero Section Configuration
// ============================================================================

export interface HeroConfig {
  title: string;
  subtitle: string;
  backgroundImage: string;
  servicesLabel: string;
  copyright: string;
}

export const heroConfig: HeroConfig = {
  title: "ATS SCAN PRO",
  subtitle: "Beat the Bots. Get Hired.",
  backgroundImage: "/hero-main.jpg",
  servicesLabel: "Scan | Analyze | Optimize",
  copyright: "© 2024 ATS Scan Pro",
};

// ============================================================================
// About Section Configuration
// ============================================================================

export interface AboutConfig {
  titleLine1: string;
  titleLine2: string;
  description: string;
  image1: string;
  image1Alt: string;
  image2: string;
  image2Alt: string;
  authorImage: string;
  authorName: string;
  authorBio: string;
}

export const aboutConfig: AboutConfig = {
  titleLine1: "75% of resumes never reach human eyes",
  titleLine2: "defeated by ATS algorithms before review.",
  description: "Applicant Tracking Systems filter resumes using keyword matching, formatting rules, and parsing algorithms. Our advanced scanner identifies exactly what ATS bots look for, helping you optimize every section of your resume to pass automated screening and reach hiring managers.",
  image1: "/about-1.jpg",
  image1Alt: "Resume analysis dashboard showing ATS compatibility score",
  image2: "/about-2.jpg",
  image2Alt: "AI-powered resume optimization in action",
  authorImage: "/founder.jpg",
  authorName: "Sarah Mitchell",
  authorBio: "Former tech recruiter who reviewed 10,000+ resumes. Built ATS Scan Pro to level the playing field for job seekers.",
};

// ============================================================================
// Works Section Configuration
// ============================================================================

export interface WorkItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

export interface WorksConfig {
  title: string;
  subtitle: string;
  projects: WorkItem[];
}

export const worksConfig: WorksConfig = {
  title: "Success Stories",
  subtitle: "Real results from professionals who optimized their resumes with our ATS checker.",
  projects: [
    { id: 1, title: "Marketing Director", category: "Fortune 500", image: "/work-1.jpg" },
    { id: 2, title: "Software Engineer", category: "Tech Giants", image: "/work-2.jpg" },
    { id: 3, title: "Financial Analyst", category: "Investment Banking", image: "/work-3.jpg" },
    { id: 4, title: "Product Manager", category: "Startups", image: "/work-4.jpg" },
  ],
};

// ============================================================================
// Services Section Configuration
// ============================================================================

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface ServicesConfig {
  title: string;
  subtitle: string;
  services: ServiceItem[];
}

export const servicesConfig: ServicesConfig = {
  title: "Our Technology",
  subtitle: "Enterprise-grade ATS scanning powered by advanced AI and machine learning.",
  services: [
    { 
      id: "01", 
      title: "Keyword Analysis", 
      description: "Identify missing industry keywords and skills that ATS systems prioritize for your target role.", 
      image: "/service-1.jpg" 
    },
    { 
      id: "02", 
      title: "Format Validation", 
      description: "Detect formatting issues that confuse ATS parsers - tables, headers, graphics, and fonts.", 
      image: "/service-2.jpg" 
    },
    { 
      id: "03", 
      title: "Score Optimization", 
      description: "Get a detailed compatibility score with actionable recommendations to improve your match rate.", 
      image: "/service-3.jpg" 
    },
    { 
      id: "04", 
      title: "Job Match Engine", 
      description: "Compare your resume against specific job descriptions to calculate match percentage.", 
      image: "/service-4.jpg" 
    },
  ],
};

// ============================================================================
// Testimonials Section Configuration
// ============================================================================

export interface TestimonialItem {
  id: number;
  name: string;
  title: string;
  quote: string;
  image: string;
}

export interface TestimonialsConfig {
  title: string;
  testimonials: TestimonialItem[];
}

export const testimonialsConfig: TestimonialsConfig = {
  title: "Client Voices",
  testimonials: [
    { 
      id: 1, 
      name: "Jennifer Chen", 
      title: "Product Manager at Google", 
      quote: "After 6 months of silence, I used ATS Scan Pro and got 4 interviews in 2 weeks. The keyword suggestions were game-changing.", 
      image: "/testimonial-1.jpg" 
    },
    { 
      id: 2, 
      name: "Marcus Johnson", 
      title: "Senior Developer at Microsoft", 
      quote: "I discovered my fancy resume template was killing my chances. The format checker saved my job search.", 
      image: "/testimonial-2.jpg" 
    },
    { 
      id: 3, 
      name: "Emily Rodriguez", 
      title: "Marketing Director at Adobe", 
      quote: "The job match feature helped me tailor my resume for each application. My callback rate went from 5% to 40%.", 
      image: "/testimonial-3.jpg" 
    },
  ],
};

// ============================================================================
// Pricing Section Configuration
// ============================================================================

export interface PricingPlan {
  id: number;
  name: string;
  price: number;
  unit: string;
  featured: boolean;
  features: string[];
}

export interface PricingConfig {
  title: string;
  subtitle: string;
  ctaButtonText: string;
  plans: PricingPlan[];
}

export const pricingConfig: PricingConfig = {
  title: "Investment",
  subtitle: "Choose the plan that fits your career goals. All plans include our core ATS scanning technology.",
  ctaButtonText: "Get Started",
  plans: [
    { 
      id: 1, 
      name: "Basic", 
      price: 0, 
      unit: "forever", 
      featured: false, 
      features: [
        "3 resume scans per month",
        "Basic ATS compatibility score",
        "Format validation",
        "Keyword suggestions",
        "PDF & Word support"
      ] 
    },
    { 
      id: 2, 
      name: "Professional", 
      price: 19, 
      unit: "per month", 
      featured: true, 
      features: [
        "Unlimited resume scans",
        "Detailed compatibility report",
        "Job description matching",
        "Industry-specific keywords",
        "Priority support",
        "Resume templates",
        "Cover letter analysis"
      ] 
    },
    { 
      id: 3, 
      name: "Enterprise", 
      price: 49, 
      unit: "per month", 
      featured: false, 
      features: [
        "Everything in Professional",
        "LinkedIn profile optimization",
        "Multiple resume versions",
        "Recruiter network access",
        "1-on-1 resume review",
        "Interview preparation",
        "Salary negotiation guide"
      ] 
    },
  ],
};

// ============================================================================
// FAQ Section Configuration
// ============================================================================

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQConfig {
  title: string;
  faqs: FAQItem[];
}

export const faqConfig: FAQConfig = {
  title: "FAQ",
  faqs: [
    { 
      question: "How does the ATS scanner work?", 
      answer: "Our scanner uses the same parsing technology as major ATS platforms like Workday, Taleo, and Greenhouse. It analyzes your resume's structure, extracts text, checks formatting compatibility, and compares keywords against job descriptions to predict your match rate." 
    },
    { 
      question: "What file formats are supported?", 
      answer: "We support PDF, DOCX, and DOC formats. PDF is recommended for most applications as it preserves formatting across devices. Our scanner detects when PDFs contain images instead of searchable text, which ATS systems cannot read." 
    },
    { 
      question: "Can I scan the same resume multiple times?", 
      answer: "Yes! We encourage iterative optimization. After making changes based on our recommendations, rescan your resume to see your improved score. Professional and Enterprise plans include unlimited scans." 
    },
    { 
      question: "How accurate is the job match feature?", 
      answer: "Our job match engine analyzes job descriptions using natural language processing to extract required skills, experience levels, and qualifications. It then compares these against your resume with 95%+ accuracy compared to actual ATS filtering." 
    },
    { 
      question: "Is my resume data secure?", 
      answer: "Absolutely. We use bank-level encryption for all uploads and scans. Your resume is processed in memory and never stored permanently on our servers unless you explicitly save it to your account. We never share your data with third parties." 
    },
    { 
      question: "What's the difference between free and paid plans?", 
      answer: "Free plans include basic scanning with limited monthly scans. Professional plans unlock unlimited scans, detailed reports, job matching, and templates. Enterprise adds LinkedIn optimization, recruiter access, and personalized coaching." 
    },
  ],
};

// ============================================================================
// Blog Section Configuration
// ============================================================================

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  image: string;
  category: string;
}

export interface BlogConfig {
  title: string;
  subtitle: string;
  allPostsLabel: string;
  readMoreLabel: string;
  readTimePrefix: string;
  posts: BlogPost[];
}

export const blogConfig: BlogConfig = {
  title: "Career Insights",
  subtitle: "Expert advice on navigating ATS systems and advancing your career.",
  allPostsLabel: "All Posts",
  readMoreLabel: "Read More",
  readTimePrefix: "Read ",
  posts: [
    { 
      id: 1, 
      title: "Top 10 ATS Resume Mistakes Costing You Interviews", 
      excerpt: "Discover the most common formatting and content errors that cause resumes to be rejected before human review.", 
      readTime: "6 min", 
      date: "Mar 20, 2024", 
      image: "/blog-1.jpg", 
      category: "ATS Tips" 
    },
    { 
      id: 2, 
      title: "How to Beat AI Resume Screeners in 2024", 
      excerpt: "Latest strategies for optimizing your resume as AI-powered screening becomes more sophisticated.", 
      readTime: "8 min", 
      date: "Mar 15, 2024", 
      image: "/blog-2.jpg", 
      category: "Industry Trends" 
    },
  ],
};

// ============================================================================
// Contact Section Configuration
// ============================================================================

export interface ContactFormOption {
  value: string;
  label: string;
}

export interface ContactConfig {
  title: string;
  subtitle: string;
  nameLabel: string;
  emailLabel: string;
  projectTypeLabel: string;
  projectTypePlaceholder: string;
  projectTypeOptions: ContactFormOption[];
  messageLabel: string;
  submitButtonText: string;
  image: string;
}

export const contactConfig: ContactConfig = {
  title: "Let's Optimize Your Resume",
  subtitle: "Have questions? Our career experts are here to help you land your dream job.",
  nameLabel: "Name *",
  emailLabel: "Email *",
  projectTypeLabel: "Inquiry Type",
  projectTypePlaceholder: "Select...",
  projectTypeOptions: [
    { value: "support", label: "Technical Support" },
    { value: "billing", label: "Billing Question" },
    { value: "enterprise", label: "Enterprise Inquiry" },
    { value: "partnership", label: "Partnership Opportunity" },
    { value: "other", label: "Other" },
  ],
  messageLabel: "Message",
  submitButtonText: "Send Message",
  image: "/contact.jpg",
};

// ============================================================================
// Footer Configuration
// ============================================================================

export interface FooterLink {
  label: string;
  href: string;
  icon?: string;
}

export interface FooterConfig {
  marqueeText: string;
  marqueeHighlightChars: string[];
  navLinks1: FooterLink[];
  navLinks2: FooterLink[];
  ctaText: string;
  ctaHref: string;
  copyright: string;
  tagline: string;
}

export const footerConfig: FooterConfig = {
  marqueeText: "Every Resume Deserves to Be Seen",
  marqueeHighlightChars: ["R", "S"],
  navLinks1: [
    { label: "Home", href: "#hero" },
    { label: "Features", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  navLinks2: [
    { label: "LinkedIn", href: "#", icon: "Linkedin" },
    { label: "Twitter", href: "#", icon: "Twitter" },
  ],
  ctaText: "Scan Your Resume",
  ctaHref: "#hero",
  copyright: "© 2024 ATS Scan Pro. All rights reserved.",
  tagline: "Powered by AI. Built for job seekers.",
};
