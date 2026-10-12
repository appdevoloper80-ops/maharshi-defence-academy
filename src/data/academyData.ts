import { Course, TrainingPillar, Facility, Testimonial, DailyRoutineItem, SocialChannel } from '../types';

export const ACADEMY_INFO = {
  name: "Maharshi Defence Academy",
  shortName: "MDA Piler",
  tagline: "Discipline • Dedication • Distinction",
  founded: "Piler, Andhra Pradesh",
  address: "Kammollapalli, Pileru, Tirupati Road, Agraharam, Andhra Pradesh – 517214",
  landmark: "Near Kammollapalli Circle, on Main Tirupati Highway, Pileru",
  phonePrimary: "+91 94402 85671",
  phoneSecondary: "+91 89785 41230",
  whatsappNumber: "919340609793",
  whatsappDisplay: "+91 93406 09793",
  email: "admissions@maharshidefencepiler.com",
  operatingHours: "Open Daily: 05:00 AM – 09:30 PM",
  admissionsHelpline: "+91 94402 85671 / +91 89785 41230",
  startingFee: "₹10,000",
  logo: "/logo.jpg",
};

export const TRUST_STATS = [
  { value: "₹10,000+", label: "Affordable Fee Packages", subtext: "Tailored for middle-class families" },
  { value: "130+", label: "Selections & Rally Clears", subtext: "Army, Navy, SSC GD & Police" },
  { value: "400m", label: "Dedicated Running Ground", subtext: "With full military obstacles" },
  { value: "100%", label: "Hostel & Mess Facility", subtext: "Clean accommodation & protein diet" },
];

export const COURSES: Course[] = [
  {
    id: "indian-army",
    wing: "Army",
    title: "Indian Army (Agniveer & Reg.)",
    badge: "Most Popular",
    description: "Rigorous 1600m timed rally preparation with complete physical obstacle drills and comprehensive written examination syllabus.",
    eligibility: "10th Pass (45% aggregate) / 12th for Tech & Clerk | Age: 17.5 – 21 Years",
    duration: "3 to 6 Months Fast-Track & Regular Batches",
    posts: ["Agniveer General Duty (GD)", "Agniveer Technical", "Agniveer Clerk / Storekeeper", "Agniveer Tradesman"],
    features: [
      "1600m running target under 5:20 mins",
      "Pull-up beam conditioning (10/10 target)",
      "Daily 4-hour written classes in Telugu & English",
      "Weekly mock OMR tests & previous year papers"
    ],
    batchStatus: "New Batch Starting Every Monday",
    comparison: {
      durationDetailed: "3 to 6 Months (Fast-Track Rally Batch or 6-Month Comprehensive)",
      intensityLevel: "Extreme",
      physicalIntensity: "10/10 - Peak Aerobic & Upper Body",
      academicIntensity: "7/10 - Foundational Arithmetic & General Science",
      primaryFocusAreas: [
        "1.6 km ground time cut-down (Target Group 1: < 5m 30s)",
        "Beam pull-ups (10/10 count for full 40 marks)",
        "9-feet ditch clearance & zig-zag balance mastery",
        "OMR written test speed drilling (Telugu & English)"
      ],
      keySubjects: ["Arithmetic (Speed Maths)", "General Science (Physics/Chemistry/Bio)", "General Knowledge & Static GK", "Reasoning Aptitude"],
      physicalBenchmarks: [
        "1600m Run: Under 5 mins 30 secs (Group 1 - 60 Marks)",
        "Pull-Ups: 10 repetitions (40 Marks)",
        "Ditch Jump: 9 Feet ditch clean leap",
        "Balance: Zig-zag military beam clearing"
      ],
      dailyClassHours: "4.5 Hours classroom instruction + 1.5 Hours evening self-study library",
      dailyGroundHours: "3.5 Hours daily (05:30 - 08:00 AM & 05:15 - 06:15 PM)",
      selectionProcess: ["Online CEE Written Exam", "Rally PFT & PMT Ground", "Adaptability Assessment", "Detailed Medical Examination (DME)"],
      examMode: "Computer Based Test (CEE) followed by Outdoor Physical Rally",
      recommendedFor: "Cadets aiming for frontline soldier, GD, technical or clerk roles who want maximum ground stamina training."
    }
  },
  {
    id: "indian-navy",
    wing: "Navy",
    title: "Indian Navy (Agniveer SSR & MR)",
    badge: "High Selection Rate",
    description: "Specialized training for Sailor recruitment including computer-based online test preparation and swimming/endurance conditioning.",
    eligibility: "10th (MR) / 12th with Maths & Physics (SSR) | Age: 17.5 – 21 Years",
    duration: "4 to 6 Months Comprehensive",
    posts: ["Agniveer SSR (Senior Secondary Recruit)", "Agniveer MR (Matric Recruit - Chef & Steward)", "Musician Wing"],
    features: [
      "Special Physics & Mathematics problem-solving labs",
      "Computer CBT mock examination practice",
      "1.6 km run in 6.5 mins + 20 squats + 12 push-ups standard",
      "English comprehension & grammar mastery"
    ],
    batchStatus: "Admissions Open",
    comparison: {
      durationDetailed: "4 to 6 Months (Includes CBT Computer Lab Training)",
      intensityLevel: "High",
      physicalIntensity: "7.5/10 - Endurance & Calisthenics",
      academicIntensity: "9/10 - Higher Maths (10+2) & Physics",
      primaryFocusAreas: [
        "10+2 level Calculus, Algebra & Mechanics problem solving",
        "English grammar, error spotting & comprehension passage",
        "1.6 km run within 6.5 minutes + 20 uthak baithak squats",
        "Computer-based test (CBT) time management"
      ],
      keySubjects: ["Intermediate Mathematics", "Physics (Kinematics, Optics, Electricity)", "English Language & Grammar", "General Awareness & Science"],
      physicalBenchmarks: [
        "1600m Run: Within 6 minutes 30 seconds",
        "Squats (Uthak Baithak): 20 continuous reps",
        "Push-ups: 12 clean strict form reps",
        "Swimming familiarity orientation"
      ],
      dailyClassHours: "5.5 Hours daily (Advanced Physics & Maths modules)",
      dailyGroundHours: "2.5 Hours daily (Focus on running pace and core endurance)",
      selectionProcess: ["Computer Based INET Stage I", "Stage II Written + PFT at Naval Base", "Recruitment Medical Examination at INS Chilka"],
      examMode: "Bilingual CBT (Computer-Based Test) & Practical PFT",
      recommendedFor: "Students with 10+2 MPC background seeking technical sailor careers and high academic test scores."
    }
  },
  {
    id: "indian-air-force",
    wing: "AirForce",
    title: "Indian Air Force (Agniveer Vayu)",
    badge: "Science & Non-Science",
    description: "Targeted training for Science & Non-Science subjects, Phase-1 Online Test, Phase-2 Physical Fitness, and Group Discussion (GD).",
    eligibility: "10+2 with Maths, Physics, English (50%) OR Non-Science with 50% | Age: 17.5 – 21 Years",
    duration: "4 to 6 Months",
    posts: ["Agniveer Vayu (Science Subjects)", "Agniveer Vayu (Other Than Science)", "Adaptability Test Mentorship"],
    features: [
      "Speed coaching for RAGA (Reasoning & General Awareness)",
      "Daily communication & Spoken English for IAF GD rounds",
      "1.6 km run in 7 mins + push-ups + sit-ups drills",
      "Psychological & Adaptability Test 1 & 2 preparation"
    ],
    batchStatus: "Admissions Open",
    comparison: {
      durationDetailed: "4 to 6 Months (Phase 1 CBT + Phase 2 GD & Adaptability Labs)",
      intensityLevel: "High",
      physicalIntensity: "7/10 - Moderate Physical Running & Calisthenics",
      academicIntensity: "8.5/10 - Technical Science / RAGA & Spoken GD",
      primaryFocusAreas: [
        "RAGA speed solving (Reasoning and General Awareness)",
        "Spoken English communication & Current Affairs GD rounds",
        "1.6 km run in 7 minutes + 10 push-ups + 10 sit-ups + 20 squats",
        "Adaptability Test 1 (SRT) & Test 2 (Group Discussion)"
      ],
      keySubjects: ["Physics / Maths (for Science stream)", "English (Mandatory 50% cutoff)", "Reasoning Aptitude", "General Awareness & Current Affairs"],
      physicalBenchmarks: [
        "1600m Run: Within 7 minutes",
        "Push-ups: 10 repetitions within 1 minute",
        "Sit-ups: 10 repetitions within 1 minute",
        "Squats: 20 repetitions within 1 minute"
      ],
      dailyClassHours: "5 Hours academic class + 1 Hour Spoken English & GD practice",
      dailyGroundHours: "2.5 Hours daily (Fitness track conditioning & form drills)",
      selectionProcess: ["Phase 1 Online Written Exam", "Phase 2 PFT + Adaptability Test 1 (SRT)", "Adaptability Test 2 (GD)", "Medical Examination at AFMC/Airforce Stations"],
      examMode: "Online CBT + In-person GD & Physical Evaluation",
      recommendedFor: "Candidates wanting white-collar defence technical roles, communication grooming, and Air Force lifestyle."
    }
  },
  {
    id: "ssc-gd-constable",
    wing: "Paramilitary",
    title: "SSC GD Constable & CAPF",
    badge: "Maximum Vacancies",
    description: "End-to-end coaching for central armed police forces with intensive 5km physical running stamina and high-scoring written syllabus.",
    eligibility: "10th Class pass from recognized board | Age: 18 – 23 Years",
    duration: "3 to 5 Months Targeted Batch",
    posts: ["BSF (Border Security Force)", "CISF (Central Industrial Security)", "CRPF", "ITBP & SSB", "Assam Rifles (AR)"],
    features: [
      "5 km running preparation for male (under 24 mins)",
      "1.6 km running for female cadets (under 8.5 mins)",
      "Complete Arithmetic, Reasoning, GK & General English/Hindi",
      "Bi-weekly grand tests with real exam scoring simulation"
    ],
    batchStatus: "New Batch Enrolling Now",
    comparison: {
      durationDetailed: "3 to 5 Months (Intensive 5KM Road Running + Speed Aptitude)",
      intensityLevel: "Very High",
      physicalIntensity: "9/10 - High Aerobic Stamina (5 Kilometer Run)",
      academicIntensity: "7.5/10 - High-Speed 80-Question CBT Scoring",
      primaryFocusAreas: [
        "5 Kilometer long-distance road running endurance (< 24 mins for Male)",
        "1.6 Kilometer track running (< 8.5 mins for Female cadets)",
        "Short-cut arithmetic and rapid non-verbal reasoning",
        "Telugu-to-English grammar tricks & static GK coverage"
      ],
      keySubjects: ["General Intelligence & Reasoning", "General Knowledge & Awareness", "Elementary Mathematics", "English or Hindi Comprehension"],
      physicalBenchmarks: [
        "Male: 5 KM Road Run in 24 minutes",
        "Female: 1.6 KM Track Run in 8.5 minutes",
        "Height: 170cm (Male) / 157cm (Female - relaxed for reserved categories)",
        "Chest: 80cm unexpanded + 5cm expansion (Male)"
      ],
      dailyClassHours: "4.5 Hours core subject classes + 2 Hours full length mock exam practice",
      dailyGroundHours: "3 Hours daily (Pacing strategy, pacing pacing & hill cross-country)",
      selectionProcess: ["Computer Based Examination (CBE - 160 Marks)", "Physical Efficiency Test (PET - 5km)", "Physical Standard Test (PST)", "Detailed Medical Exam (DME)"],
      examMode: "Online CBE (Regional languages available including Telugu) & Road PET",
      recommendedFor: "Cadets wanting maximum job security in BSF, CISF, CRPF with high vacancy opportunities and 10th pass qualification."
    }
  },
  {
    id: "ap-ts-police",
    wing: "Police",
    title: "AP & TS Police (Constable & SI)",
    badge: "State Cadre Focus",
    description: "Dedicated Telugu & English medium coaching for AP Police Constable, SI, and Excise/Forest departments with scientific event training.",
    eligibility: "Intermediate for Constable | Degree for Sub-Inspector | Age as per AP govt notifications",
    duration: "4 to 8 Months Foundation & Prelims/Mains",
    posts: ["AP Civil Police Constable", "AP Special Police (APSP)", "Sub-Inspector of Police (Civil / AR)", "Excise & Forest Beat Officer"],
    features: [
      "1600m (Men) / 800m (Women) sprint & endurance timing",
      "Long jump (3.80m / 4.00m) & 100m sprint expert technique",
      "In-depth Indian Constitution, AP History, Arithmetic & Reasoning",
      "Personalized physical progress tracking by certified coaches"
    ],
    batchStatus: "Fresh Batch Commencing",
    comparison: {
      durationDetailed: "4 to 8 Months (Prelims + Physical Events + Mains Master Batch)",
      intensityLevel: "Very High",
      physicalIntensity: "9/10 - Multi-Event Technical Ground Skills",
      academicIntensity: "9/10 - In-depth Indian Polity, History, Arithmetic & English",
      primaryFocusAreas: [
        "1600 meters run (Men) / 800 meters run (Women) timing optimization",
        "Long Jump technique (approach run, take-off board & landing landing)",
        "100 meters explosive sprint start technique",
        "Indian Constitution, AP/Telangana Movement, Reasoning & Arithmetic"
      ],
      keySubjects: ["Arithmetic & Quantitative Aptitude", "Test of Reasoning & Mental Ability", "General Studies (Polity, History, Geography, Economy)", "English & Telugu descriptive/objective"],
      physicalBenchmarks: [
        "1600m Run: Under 8 minutes (Constable) or high score qualifying",
        "100m Sprint: Within 15 seconds (Male) / 18 seconds (Female)",
        "Long Jump: 3.80m to 4.00m clean qualification",
        "Height: 167.6 cm (Men) / 152.5 cm (Women)"
      ],
      dailyClassHours: "5.5 Hours deep-dive GS & Arithmetic lectures",
      dailyGroundHours: "3 Hours daily (Event-specific coaches for Sprint & Long Jump)",
      selectionProcess: ["Preliminary Written Test (PWT)", "Physical Measurement Test (PMT)", "Physical Efficiency Test (PET - Events)", "Final Written Examination (FWE)"],
      examMode: "OMR Offline Prelims & Mains (Telugu & English medium) + State Ground Events",
      recommendedFor: "Aspirants passionate about Andhra Pradesh / Telangana Police service, civil uniform, and state government security."
    }
  },
  {
    id: "nda-cds",
    wing: "Officer",
    title: "NDA & CDS (Officer Entry)",
    badge: "Officer Cadre",
    description: "Premium academic mentorship for prestigious UPSC NDA & CDS examinations with personality development and SSB interview orientation.",
    eligibility: "10+2 appearing/passed for NDA | Graduation for CDS | Age: 16.5 – 19.5 (NDA), 19 – 24 (CDS)",
    duration: "6 Months to 1 Year Intensive",
    posts: ["National Defence Academy (Khadakwasla)", "Indian Military Academy (IMA)", "Air Force Academy (AFA)", "Naval Academy (INA)"],
    features: [
      "Conceptual Mathematics, English & General Ability Test (GAT)",
      "Current Affairs & Defence strategic knowledge sessions",
      "Officer Like Qualities (OLQ) grooming and lecturette practice",
      "Physical stamina and leadership task simulation"
    ],
    batchStatus: "Limited Seats Available",
    comparison: {
      durationDetailed: "6 Months to 1 Year (UPSC Written Syllabus + SSB Interview Orientation)",
      intensityLevel: "High",
      physicalIntensity: "7/10 - Balanced Fitness, Agility & Mental Stamina",
      academicIntensity: "10/10 - Rigorous UPSC Standard Higher Mathematics & GAT",
      primaryFocusAreas: [
        "Advanced Higher Mathematics (Trigonometry, Calculus, Matrices, Vectors)",
        "General Ability Test: World History, Indian Polity, Geography, Physics, Chemistry",
        "SSB Interview Orientation: Screening (OIR + PPDT), Psychological tests, GTO tasks",
        "Personality grooming, English lecturette, group discussions & interview demeanor"
      ],
      keySubjects: ["UPSC NDA Mathematics (300 Marks)", "General Ability Test - English (200 Marks)", "General Ability Test - GK & Science (400 Marks)", "Current Affairs & Strategic Defence"],
      physicalBenchmarks: [
        "2.4 km running within 15 minutes",
        "Push-ups: 20 repetitions",
        "Sit-ups: 20 repetitions",
        "Chin-ups: Minimum 8 repetitions & Rope Climbing"
      ],
      dailyClassHours: "6 Hours intensive conceptual coaching & problem sets",
      dailyGroundHours: "2 Hours disciplined sports, obstacle clearing & team tasks",
      selectionProcess: ["UPSC Written Examination (900 Marks)", "5-Day SSB Interview (Services Selection Board - 900 Marks)", "Medical Examination at Military Hospital (SMB)"],
      examMode: "UPSC National Pen & Paper Examination followed by 5-Day SSB",
      recommendedFor: "Ambitious students aiming for Commissioned Officer ranks (Lieutenant / Flying Officer / Sub-Lieutenant) in the Armed Forces."
    }
  }
];

export const TRAINING_PILLARS: TrainingPillar[] = [
  {
    title: "Written Exam Coaching",
    subtitle: "Classroom & Digital Learning",
    iconName: "BookOpen",
    color: "amber",
    points: [
      "Dedicated subject specialists for Arithmetic, Pure Maths, Physics, General Science, and Reasoning",
      "Bilingual study material provided in both Telugu and English for easy rural comprehension",
      "Daily 1-hour speed calculation & trick-based problem solving for competitive exams",
      "Weekly OMR-based model exams simulating real defence test conditions and negative marking"
    ],
    schedule: "Daily: 09:30 AM – 01:00 PM & 02:00 PM – 05:00 PM"
  },
  {
    title: "Physical Fitness Training",
    subtitle: "Endurance & Stamina Building",
    iconName: "Footprints",
    color: "emerald",
    points: [
      "Early morning cross-country road runs and track interval sprints under expert drill masters",
      "Progressive 1600m conditioning aimed to clear Army Rally 'Group-1' timing (under 5:30 mins)",
      "Strict pull-ups beam drills, core abdominal conditioning, and push-up stamina building",
      "Breathing management, injury prevention, muscle recovery, and post-drill stretching routines"
    ],
    schedule: "Morning: 05:30 AM – 08:00 AM | Evening: 05:15 PM – 06:45 PM"
  },
  {
    title: "Ground Obstacle Practice",
    subtitle: "Official Military Layout",
    iconName: "ShieldCheck",
    color: "blue",
    points: [
      "Full setup of standard military obstacles: 9-foot ditch jump, zigzag balancing beam, and monkey rope",
      "AP & TS Police long jump pits with scientific takeoff techniques and landing safety",
      "High jump and vertical rope climbing techniques practiced under protective sand setups",
      "Pre-medical examination screening for flat foot, knock knees, chest expansion, and posture"
    ],
    schedule: "Integrated into morning & evening practical sessions"
  }
];

export const FACILITIES: Facility[] = [
  {
    id: "hostel-facility",
    title: "Secure Accommodation & Hostel",
    category: "Student Living",
    highlight: "Safe, disciplined hostel campus in Pileru",
    description: "Well-ventilated, hygienic hostel rooms for boys and dedicated arrangements for girls travelling from Rayachoty, Madanapalle, Tirupati, Chittoor, and Kadapa districts.",
    bullets: [
      "Clean bed spaces with dedicated study desks and lockable storage",
      "24/7 CCTV surveillance, boundary walls, and resident warden oversight",
      "Pure RO drinking water dispensers and uninterrupted power backup",
      "Strict discipline, mandatory night study hours, and early lights out"
    ],
    badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
    icon: "Building2",
    stat: "Safe & Disciplined",
    statLabel: "For outstation cadets"
  },
  {
    id: "mess-food-facility",
    title: "Nutritious Mess & Wholesome Diet",
    category: "Cadet Nutrition",
    highlight: "Hygienic, high-protein daily food",
    description: "Defence cadets burn massive calories during morning and evening drills. Our mess prepares fresh, balanced South Indian meals designed to build stamina and muscle.",
    bullets: [
      "Morning post-workout nutritious refreshment: boiled eggs / sprouted grains & milk",
      "Wholesome afternoon & night meals: Rice, Dal, Sambhar, Rasam, and fresh green vegetables",
      "Special high-protein chicken / egg curry provided twice weekly for muscle recovery",
      "Prepared in an open, spotless commercial kitchen maintaining high hygiene standards"
    ],
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    icon: "Utensils",
    stat: "High-Protein Diet",
    statLabel: "Fueling daily stamina"
  },
  {
    id: "affordable-fee-structure",
    title: "Affordable Value for Middle Class",
    category: "Social Mission",
    highlight: "Starting at just ₹10,000",
    description: "Unlike commercial corporate institutes charging ₹40,000–₹60,000, Maharshi Defence Academy was established with a singular mission: empower farmers, middle-class parents, and rural youth with genuine affordable coaching.",
    bullets: [
      "Total packages starting from ₹10,000 with flexible installment options",
      "No hidden costs for ground access, mock tests, or physical obstacle practice",
      "Special fee concessions for children of Ex-Servicemen, Martyrs, and economically poor students",
      "Complete uniform, physical kit, and Telugu/English study material included"
    ],
    badgeColor: "bg-amber-100 text-amber-900 border-amber-200",
    icon: "BadgePercent",
    stat: "Starts ₹10,000",
    statLabel: "No heavy financial burden"
  },
  {
    id: "ground-training-facility",
    title: "Dedicated Physical Training Ground",
    category: "Ground Infrastructure",
    highlight: "400m Track & Obstacle Course",
    description: "A full-scale military training ground with natural dirt running track, obstacle stations, and police event pits situated in fresh air along the Tirupati road corridor.",
    bullets: [
      "Standard 400m circuit for timed 1600m and 5km endurance runs",
      "Multiple pull-up bars (steel beams) calibrated to official Army rally standards",
      "Long jump pits, high jump foam pads, and 9-foot ditch training station",
      "Zig-zag balance logs and rope climbing station for complete obstacle agility"
    ],
    badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-200",
    icon: "Award",
    stat: "400m Dirt Track",
    statLabel: "Official rally dimensions"
  }
];

export const CADET_ROUTINE: DailyRoutineItem[] = [
  { time: "05:00 AM – 05:30 AM", activity: "Morning Bugle & Warm-up Hydration", category: "Rest", details: "Waking up, hydration with warm water, freshening up, assembling in sports kit" },
  { time: "05:30 AM – 08:00 AM", activity: "Ground Physical Training & Cross-Country", category: "PT", details: "1600m / 5km runs, sprint intervals, pull-ups, push-ups, and military obstacle training" },
  { time: "08:15 AM – 09:00 AM", activity: "Post-Workout Diet & Breakfast", category: "Diet", details: "Boiled eggs/sprouts, hot milk, idli/upma/dosa with nutritious chutneys" },
  { time: "09:30 AM – 01:00 PM", activity: "Morning Academic Session (Written Classes)", category: "Study", details: "Arithmetic, Reasoning, Physics & General Knowledge with concept breakdowns" },
  { time: "01:00 PM – 02:00 PM", activity: "Nutritious Lunch & Rest", category: "Diet", details: "Hot rice, dal, seasonal vegetables, sambhar, curd, and fresh buttermilk" },
  { time: "02:00 PM – 04:45 PM", activity: "Afternoon Class & Speed Test Practice", category: "Study", details: "English language classes, short-trick solving, and daily 50-mark timed OMR test" },
  { time: "05:15 PM – 06:45 PM", activity: "Evening Ground Drills & Games", category: "PT", details: "Stamina building, long jump practice, volleyball/football for agility and teamwork" },
  { time: "07:30 PM – 08:30 PM", activity: "Dinner in Mess Hall", category: "Diet", details: "Freshly cooked dinner with balanced carbohydrates and proteins" },
  { time: "08:45 PM – 10:00 PM", activity: "Supervised Self-Study & Doubt Clearing", category: "Study", details: "Revision of day's syllabus with faculty available for one-on-one help" },
  { time: "10:15 PM", activity: "Roll Call & Lights Out", category: "Rest", details: "Mandatory rest for cellular recovery and stamina recharge for next morning" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "K. Venkatesh",
    village: "Rayachoty (Kadapa Dist)",
    examCleared: "Indian Army Agniveer GD (Tirupati Rally)",
    wing: "Army",
    rating: 5,
    review: "Best academy for middle class people with great training, food, and accommodation! Coming from an agricultural family, other institutes in big cities quoted ₹45,000 which was impossible for us. Maharshi Academy in Piler gave top-level coaching at an affordable fee of just ₹10,000+. I cleared 1600m in 5:18 minutes in the first attempt.",
    verified: true,
    avatarText: "KV"
  },
  {
    id: "2",
    name: "B. Rajesh Naidu",
    village: "Madanapalle",
    examCleared: "SSC GD Constable (CISF Selection)",
    wing: "Paramilitary",
    rating: 5,
    review: "Super coaching at an affordable fee! The mess food is very clean and hygienic with daily eggs and milk which gave me great stamina for the 5km run. Instructors take personal care for each cadet instead of treating us like numbers. Highly recommended for every rural youth in Rayalaseema.",
    verified: true,
    avatarText: "BR"
  },
  {
    id: "3",
    name: "S. Mohan Reddy",
    village: "Pileru / Kammollapalli",
    examCleared: "AP Police Constable (Selected)",
    wing: "Police",
    rating: 5,
    review: "Ground training at Maharshi Academy is unbeatable. The coaches corrected my long jump technique and running posture within 3 weeks. Written exam classes in Telugu and English made arithmetic very easy. Thanks to Maharshi Academy, I am now wearing the uniform.",
    verified: true,
    avatarText: "SM"
  },
  {
    id: "4",
    name: "N. Suresh Babu (Father)",
    village: "Chittoor Rural",
    examCleared: "Parent of Agniveer Recruit N. Pradeep",
    wing: "Parent",
    rating: 5,
    review: "As a middle-class parent, my biggest worry was safety, discipline, and fee. Maharshi Academy director took care of my son like his own family. The hostel is disciplined, the food is homely, and the fee did not put us in debt. My son is now serving the Indian Army.",
    verified: true,
    avatarText: "NS"
  },
  {
    id: "5",
    name: "C. Hari Krishna",
    village: "Vayalpadu (Valmikipuram)",
    examCleared: "Indian Navy Agniveer SSR",
    wing: "Navy",
    rating: 5,
    review: "The math and physics faculty here are phenomenal. They cover standard 12th syllabus with short tricks, and the online mock exams gave me full confidence. Physical push-up and squat sessions ensured I passed the Navy physical exam effortlessly.",
    verified: true,
    avatarText: "CH"
  }
];

export const FAQS = [
  {
    q: "Where exactly is Maharshi Defence Academy located in Piler?",
    a: "We are located along Tirupati Road, Kammollapalli, Pileru, Agraharam, Andhra Pradesh – 517214. It is directly accessible by RTC buses and auto-rickshaws from Pileru Bus Stand and Railway Station (approx. 5 minutes drive towards Tirupati Highway)."
  },
  {
    q: "Why is Maharshi Defence Academy known as the best for middle-class families?",
    a: "Our founder’s mission is ensuring no passionate youth is denied a defence uniform due to lack of money. Our comprehensive course fee begins around ₹10,000, inclusive of ground access, study books, and daily training, with affordable hostel and mess options."
  },
  {
    q: "What is the food quality and mess schedule for hostel cadets?",
    a: "Cadets receive hygienic South Indian meals 3 times a day, plus morning post-ground protein diet (boiled eggs, sprouts, and hot milk). We serve high-protein non-veg (chicken curry) twice weekly to aid muscle growth."
  },
  {
    q: "Is pre-medical check-up included before rally recruitment?",
    a: "Yes! We conduct preliminary physical and medical screening for height, chest measurement, vision, knock knees, flat feet, and varicose veins so cadets can rectify minor conditions well before official rally medical tests."
  },
  {
    q: "What items should a new student bring when joining the hostel?",
    a: "Students should bring: 10th/Inter original marksheets & copies, Aadhaar card, 10 passport size photos, sports running shoes (2 pairs recommended), track pants/shorts, white T-shirts, bedsheet, and personal toiletries. Academy uniform and study kits are issued at admission."
  }
];

export const SOCIAL_CHANNELS: SocialChannel[] = [
  {
    id: "youtube",
    name: "YouTube Channel",
    handle: "@Maharshi-Defence-Academy",
    url: "https://www.youtube.com/@Maharshi-Defence-Academy",
    icon: "youtube",
    badge: "Official Channel",
    description: "Watch 1600m rally running practice, pull-up drills, physical obstacle demonstrations, written exam classes, and rally selection celebrations.",
    followers: "440+ Cadets & Subscribers",
    highlightText: "25+ Video Drills & Ground Demonstrations",
    ctaText: "Subscribe & Watch Drills"
  },
  {
    id: "whatsapp",
    name: "WhatsApp Community & Helpline",
    handle: "+91 93406 09793",
    url: `https://wa.me/${ACADEMY_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Maharshi Defence Academy, I want to join the official updates channel and enquire about new batch coaching in Piler.')}`,
    icon: "whatsapp",
    badge: "Direct Helpline",
    description: "Direct chat with director & physical trainers. Get immediate syllabus breakdowns, batch start dates, hostel fee quotes, and instant rally notifications.",
    followers: "Daily Live Responses",
    highlightText: "Instant Admission Support on 9340609793",
    ctaText: "Connect on WhatsApp"
  },
  {
    id: "instagram",
    name: "Instagram Official",
    handle: "@maharshi_defence_academy_piler",
    url: "https://www.instagram.com/maharshi_defence_academy_piler/",
    icon: "instagram",
    badge: "Cadet Life & Reels",
    description: "Daily morning 5 AM assembly stories, high-intensity sprint reels, cadet mess meals, physical obstacle training clips, and inspirational defence motivation.",
    followers: "Daily Stories & Drills",
    highlightText: "Real-time Ground Training Stories",
    ctaText: "Follow on Instagram"
  }
];
