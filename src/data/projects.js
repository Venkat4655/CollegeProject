// ---------------------------------------------------------------------------
// Your project catalogue. Add / edit / remove entries freely.
//
// Each project needs:
//   id          unique number
//   title       project name
//   category    used by the filter bar (keep names consistent)
//   price       number in INR (rendered as ₹)
//   tech        array of technology tags
//   image       emoji or image URL used on the card
//   short       one-line summary shown on the card
//   description longer paragraph shown in the details view
//   features    bullet points shown in the details view
//   deliverables what the student receives
// ---------------------------------------------------------------------------
export const projects = [
  {
    id: 1,
    title: 'Online Voting System with Face Recognition',
    category: 'Python / AI',
    price: 6900,
    tech: ['Python', 'OpenCV', 'Flask', 'MySQL'],
    image: '🗳️',
    short: 'Secure e-voting using facial authentication to prevent fraud.',
    description:
      'A web-based voting platform that authenticates voters through real-time face recognition before allowing them to cast a vote. Admins can create elections, add candidates and view live results, while duplicate or fake votes are blocked automatically.',
    features: [
      'Face-recognition based voter login',
      'Admin dashboard to manage elections & candidates',
      'One-person-one-vote enforcement',
      'Live result charts',
    ],
    deliverables: ['Full source code', 'Project report (60+ pages)', 'PPT', 'Installation support'],
  },
  {
    id: 2,
    title: 'Smart Crop Recommendation System',
    category: 'Python / AI',
    price: 6399,
    tech: ['Python', 'Scikit-learn', 'Streamlit'],
    image: '🌾',
    short: 'ML model that suggests the best crop from soil & weather data.',
    description:
      'Uses a trained machine-learning model on soil nutrients (N, P, K), temperature, humidity, pH and rainfall to recommend the most suitable crop for a farmer. Includes an easy Streamlit interface for entering values and getting instant predictions.',
    features: [
      'Random Forest classifier with 99% accuracy',
      'Clean data-entry web UI',
      'Fertilizer suggestion module',
      'Downloadable prediction report',
    ],
    deliverables: ['Source code + dataset', 'Trained model', 'Report', 'PPT'],
  },
  {
    id: 3,
    title: 'E-Commerce Website (MERN Stack)',
    category: 'Web Development',
    price: 8900,
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    image: '🛒',
    short: 'Full-stack shopping site with cart, payments and admin panel.',
    description:
      'A complete online store built on the MERN stack featuring product listings, search & filters, shopping cart, Razorpay test-payment integration, user authentication and a full admin panel to manage products and orders.',
    features: [
      'JWT user authentication',
      'Cart & wishlist',
      'Razorpay payment (test mode)',
      'Admin product & order management',
    ],
    deliverables: ['Frontend + backend source', 'Database schema', 'Report', 'Deployment guide'],
  },
  {
    id: 4,
    title: 'IoT Based Smart Home Automation',
    category: 'IoT / Embedded',
    price: 7900,
    tech: ['Arduino', 'ESP32', 'Blynk', 'C++'],
    image: '🏠',
    short: 'Control lights, fans & appliances from your phone over WiFi.',
    description:
      'An ESP32-powered home automation kit that lets users switch appliances on/off, monitor temperature and detect gas leaks from a mobile app. Ideal for a hardware-based final year project with a working demo.',
    features: [
      'Mobile app control via Blynk',
      'Temperature & gas sensor monitoring',
      'Relay-based appliance switching',
      'Voice-assistant compatible',
    ],
    deliverables: ['Circuit diagram', 'Arduino code', 'Component list', 'Report + PPT'],
  },
  {
    id: 5,
    title: 'Fake News Detection using NLP',
    category: 'Python / AI',
    price: 6600,
    tech: ['Python', 'NLTK', 'TensorFlow', 'Flask'],
    image: '📰',
    short: 'Detects whether a news article is real or fake using deep learning.',
    description:
      'A natural-language-processing project that classifies news articles as genuine or fake. It cleans and vectorises text, trains an LSTM model and exposes a web page where a user can paste an article to check its authenticity.',
    features: [
      'Text preprocessing pipeline',
      'LSTM deep-learning model',
      'Confidence score output',
      'Web interface',
    ],
    deliverables: ['Source code + dataset', 'Trained model', 'Report', 'PPT'],
  },
  {
    id: 6,
    title: 'Hospital Management System',
    category: 'Web Development',
    price: 5900,
    tech: ['PHP', 'MySQL', 'Bootstrap'],
    image: '🏥',
    short: 'Manage patients, doctors, appointments and billing in one place.',
    description:
      'A classic database-driven management system for hospitals. Handles patient registration, doctor scheduling, appointment booking, prescription records and billing with role-based logins for admin, doctor and receptionist.',
    features: [
      'Role-based login (Admin / Doctor / Reception)',
      'Appointment scheduling',
      'Billing & invoice generation',
      'Patient history records',
    ],
    deliverables: ['Full source code', 'SQL database', 'Report', 'Installation guide'],
  },
  {
    id: 7,
    title: 'Driver Drowsiness Detection System',
    category: 'Python / AI',
    price: 7200,
    tech: ['Python', 'OpenCV', 'Dlib', 'Keras'],
    image: '🚗',
    short: 'Alerts a driver with an alarm when signs of sleep are detected.',
    description:
      'A real-time computer-vision system that monitors a driver’s eyes and mouth through a webcam. When prolonged eye-closure or yawning is detected, it triggers an audible alarm to prevent accidents caused by fatigue.',
    features: [
      'Real-time eye-aspect-ratio detection',
      'Yawn detection',
      'Audible buzzer alert',
      'Works with any webcam',
    ],
    deliverables: ['Source code', 'Pre-trained models', 'Report', 'PPT'],
  },
  {
    id: 8,
    title: 'Personal Finance Tracker App',
    category: 'Mobile App',
    price: 7400,
    tech: ['Flutter', 'Dart', 'Firebase'],
    image: '💰',
    short: 'Cross-platform app to track expenses, budgets and savings goals.',
    description:
      'A Flutter mobile application that helps users log income and expenses, set monthly budgets, categorise spending and visualise where their money goes with interactive charts. Data syncs in real time through Firebase.',
    features: [
      'Expense & income logging',
      'Category-wise pie charts',
      'Monthly budget alerts',
      'Firebase cloud sync',
    ],
    deliverables: ['Flutter source code', 'Firebase setup guide', 'Report', 'APK build'],
  },
]

// Unique category list for the filter bar (auto-generated from projects above).
export const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))]
