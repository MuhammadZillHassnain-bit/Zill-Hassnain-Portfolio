/**
 * MUHAMMAD ZILL HASSNAIN - PORTFOLIO INTERACTION ENGINE
 * Vanilla JavaScript (ES6+) • Zero External Framework Dependencies
 */

/* ===================================================================
   1. CENTRALIZED CONFIGURATION & DATA SOURCE
   Easily update contact information, links, and project entries here.
   =================================================================== */
const portfolioConfig = {
  owner: {
    fullName: "Muhammad Zill Hassnain",
    headline: "Full-Stack Developer | Android Developer | AI & Machine Learning Enthusiast",
    rotatingTitles: [
      "Full-Stack Developer",
      "Android App Developer",
      "AI & Machine Learning Enthusiast",
      "Software Engineering Student"
    ],
    email: "zillhassnain005@gmail.com",
    phone: "+92 340 6915473",
    whatsappUrl: "https://wa.me/923406915473",
    location: "Sillanwali / Sargodha, Punjab, Pakistan",
    githubUrl: "https://github.com/MuhammadZillHassnain-bit",
    linkedinUrl: "https://www.linkedin.com/in/muhammad-zill-hassnain-9442bb259",
    resumePath: "assets/resume/Muhammad_Zill_Hassnain_Resume.pdf"
  },

  projects: {
    "medaug-fyp": {
      title: "MedAug: Diffusion-Based Medical Image Augmentation (FYP)",
      category: "AI & Machine Learning",
      categoryTag: "Final Year Project • Deep Learning",
      status: "FYP In Progress",
      statusType: "progress",
      image: "assets/images/project-iris-classifier.svg",
      shortDesc: "Final Year Project: Generative diffusion models for synthetic medical image augmentation (MRI/CT scans) to solve dataset scarcity in diagnostics.",
      fullDesc: "MedAug is my university Final Year Project (FYP) utilizing state-of-the-art Denoising Diffusion Probabilistic Models (DDPMs) to synthetically generate high-fidelity, anatomically consistent medical imagery. Addresses extreme dataset scarcity and class imbalance in clinical diagnostic classification pipelines.",
      architecture: "Conditional Denoising Diffusion Probabilistic Model (DDPM) pipeline coupled with convolutional U-Net backbones and attention layers for multi-modal medical scan generation.",
      features: [
        "Conditional synthetic MRI / CT medical scan generation.",
        "State-of-the-art Denoising Diffusion Probabilistic Models (DDPM) architecture.",
        "Anatomical feature preservation preventing hallucinated medical artifacts.",
        "Benchmarked using Fréchet Inception Distance (FID) and SSIM metric scores."
      ],
      techStack: ["Python", "PyTorch", "Diffusion Models", "Deep Learning", "Computer Vision", "NumPy"],
      githubUrl: "https://github.com/MuhammadZillHassnain-bit/MedAug-Diffusion-Based-Medical-Image-Augmentation",
      demoUrl: null
    },

    "pdf-generator": {
      title: '"I Love PDF" – Web Application',
      category: "Web Development",
      categoryTag: "Full-Stack Web Application",
      status: "Academic Project",
      statusType: "completed",
      image: "assets/images/project-pdf-generator.svg",
      shortDesc: "A comprehensive PDF management and manipulation tool allowing users to process documents efficiently directly in the browser.",
      fullDesc: "Designed and developed an end-to-end PDF processing suite inspired by modern document tools. The platform enables users to perform file transformations including document merging, compression, page extraction/splitting, and conversion to images or Word formats without client-side lag.",
      architecture: "Modular client-server architecture utilizing React for the interactive UI, file queue state management, and Node.js for streaming file buffers and memory-safe processing.",
      features: [
        "Batch file upload dropzone with real-time file size & page count validation.",
        "Lossless PDF compression engine reducing document size while preserving layout fidelity.",
        "Visual drag-and-drop page reordering and custom range splitting.",
        "Responsive, dark-mode user interface optimized for desktop and mobile browsers."
      ],
      techStack: ["React.js", "JavaScript (ES6+)", "Node.js", "Express", "CSS3", "File APIs"],
      githubUrl: "https://github.com/MuhammadZillHassnain-bit/PDF-GENERATOR",
      demoUrl: null
    },

    "library-system": {
      title: "Library Management System",
      category: "Software Engineering",
      categoryTag: "Enterprise Desktop / Systems",
      status: "Completed",
      statusType: "completed",
      image: "assets/images/project-library-system.svg",
      shortDesc: "An automated management system to catalog books, track member borrowings, calculate fines, and manage inventory efficiently.",
      fullDesc: "An academic enterprise system architected in Java applying strict Object-Oriented Programming (OOP) principles. It handles transactional operations between student library cardholders, active loans, and book catalog inventories with robust SQL Server database integration.",
      architecture: "3-tier desktop application architecture comprising Data Access Object (DAO) pattern, Business Logic layer, and user presentation interfaces.",
      features: [
        "Normalized relational database schema ensuring ACID transactional guarantees.",
        "Real-time catalog search filtering by ISBN, book title, author, and departmental subject.",
        "Automated overdue fine computation engine and membership expiration alerts.",
        "Detailed audit logging of check-out, renewal, and check-in history."
      ],
      techStack: ["Java", "OOP Principles", "SQL Server", "JDBC", "Data Structures"],
      githubUrl: "https://github.com/MuhammadZillHassnain-bit/LibraryManagementSystem-main",
      demoUrl: null
    },

    "food-ordering": {
      title: "Food Ordering Web Application",
      category: "Web Development",
      categoryTag: "Full-Stack Web App",
      status: "Completed",
      statusType: "completed",
      image: "assets/images/project-portfolio-website.svg",
      shortDesc: "Interactive food ordering web platform featuring dynamic menus, persistent cart management, live price calculation, and smooth checkout.",
      fullDesc: "A modern responsive food ordering web application designed for seamless customer experience. Users can browse categorized menus, customize quantities, add items to a dynamic shopping cart, and place orders with instant status feedback.",
      architecture: "Component-based modular JavaScript architecture with state-driven cart synchronization and persistent browser storage.",
      features: [
        "Dynamic categorized food menu filtering with real-time keyword search.",
        "Interactive slide-out cart drawer with instant subtotal and tax calculation.",
        "Quantity modifier controls and persistent cart storage across browser refreshes.",
        "Clean modern UI designed with responsive CSS Grid and Flexbox."
      ],
      techStack: ["JavaScript (ES6+)", "HTML5", "CSS3", "Local Storage", "Responsive UI"],
      githubUrl: "https://github.com/MuhammadZillHassnain-bit/Food-Ordering-WEb-App",
      demoUrl: null
    },

    "online-shopping": {
      title: "Online Shopping & E-Commerce System",
      category: "Web Development",
      categoryTag: "E-Commerce Application",
      status: "Completed",
      statusType: "completed",
      image: "assets/images/project-library-system.svg",
      shortDesc: "Full-featured online shopping platform with product catalogs, shopping cart, filter options, and seamless checkout flow.",
      fullDesc: "An online retail and shopping system designed for scalable product management, product search, multi-category navigation, cart management, and order placement.",
      architecture: "Multi-page e-commerce architecture with client-side state handling and transactional data modeling.",
      features: [
        "Comprehensive product catalog with category and price range filters.",
        "Persistent shopping cart with dynamic tax and subtotal calculations.",
        "User checkout interface with shipping and billing details validation.",
        "Order tracking summary and confirmation screens."
      ],
      techStack: ["JavaScript", "HTML5", "CSS3", "E-Commerce", "UI/UX"],
      githubUrl: "https://github.com/MuhammadZillHassnain-bit/Online-Shopping--System",
      demoUrl: null
    },

    "student-system": {
      title: "Student Information & Attendance System",
      category: "Software Engineering",
      categoryTag: "Academic Records Suite",
      status: "Academic Project",
      statusType: "completed",
      image: "assets/images/project-student-system.svg",
      shortDesc: "Dedicated software for admissions management, attendance ratios, performance metrics, and administrative status reporting.",
      fullDesc: "Built to streamline day-to-day cohort administration. Allows professors and Class Representatives to record attendance, calculate monthly percentages, track performance indicators, and flag at-risk students before final examinations.",
      architecture: "Relational client with normalized tables, transactional update scripts, and export modules.",
      features: [
        "Automated attendance percentage calculations with warning indicators below 75%.",
        "Student record management with batch filtering by semester, section, and status.",
        "Academic standing metrics and grade report generation.",
        "Robust input validation preventing duplicate student registration numbers."
      ],
      techStack: ["Java", "C++", "SQL Database", "OOP Design"],
      githubUrl: "https://github.com/MuhammadZillHassnain-bit/Student-Management-System-main",
      demoUrl: null
    },

    "quiz-app": {
      title: "Interactive Quiz Application",
      category: "Web Development",
      categoryTag: "Interactive Frontend Engine",
      status: "Completed",
      statusType: "completed",
      image: "assets/images/project-quiz-app.svg",
      shortDesc: "A dynamic quiz challenge application with timed rounds, multiple topics, streak multipliers, and instant score feedback.",
      fullDesc: "A responsive interactive web application built with pure Vanilla JavaScript to assess technical subjects (Data Structures, OOP, Web Development). Features smooth animated timer rings, instant option validation, and persistent high-score tracking.",
      architecture: "Event-driven DOM engine with modular state management handling question randomization, timer ticks, and score calculations.",
      features: [
        "Custom SVG circular countdown timer with animated dashoffset transitions.",
        "Dynamic question shuffling and randomized answer key ordering.",
        "Streak calculation with visual multiplier badges and sound/visual cue toggles.",
        "Detailed score summary breakdown with review of missed questions."
      ],
      techStack: ["JavaScript", "HTML5", "CSS3", "DOM Engine", "Web Storage API"],
      githubUrl: "https://github.com/MuhammadZillHassnain-bit/quiz_app",
      demoUrl: null
    },

    "iris-classifier": {
      title: "Iris Botanical Species Classifier",
      category: "AI & Machine Learning",
      categoryTag: "Machine Learning Model",
      status: "Completed",
      statusType: "completed",
      image: "assets/images/project-iris-classifier.svg",
      shortDesc: "Supervised classification model trained to predict iris flower species using sepal and petal features with 98.6% accuracy.",
      fullDesc: "Implemented machine learning classification algorithms in Python using Scikit-Learn. Explored feature extraction, normalization, and model benchmarking between K-Nearest Neighbors (KNN), Logistic Regression, and Decision Trees on botanical datasets.",
      architecture: "Data pipeline involving data pre-processing, feature scaling, 80/20 train-test split, cross-validation, and metrics evaluation.",
      features: [
        "High classification accuracy (98.6%) verified with k-fold cross validation.",
        "Scatter plot matrix and decision boundary visualization using Matplotlib.",
        "Confusion matrix generation with Precision, Recall, and F1-score evaluation.",
        "Feature importance scoring identifying petal dimensions as key discriminators."
      ],
      techStack: ["Python", "Scikit-Learn", "NumPy", "Pandas", "Matplotlib", "Jupyter"],
      githubUrl: "https://github.com/MuhammadZillHassnain-bit/Iris-Species-Classifier",
      demoUrl: null
    },

    "ml-scikit-learn": {
      title: "Machine Learning With Scikit-Learn",
      category: "AI & Machine Learning",
      categoryTag: "Data Science & Modeling",
      status: "Completed",
      statusType: "completed",
      image: "assets/images/project-student-analytics.svg",
      shortDesc: "Comprehensive Scikit-Learn repository implementing classification, regression, clustering, and data preprocessing pipelines in Python.",
      fullDesc: "A hands-on machine learning portfolio repository demonstrating practical implementation of supervised and unsupervised learning algorithms with Scikit-Learn. Includes EDA, feature engineering, cross-validation, hyperparameter tuning, and performance evaluation metrics.",
      architecture: "Modular Python data science workflow covering data hygiene, exploratory visual analysis, model training pipelines, and scoring.",
      features: [
        "Supervised algorithms: Linear Regression, Logistic Regression, Decision Trees, KNN, Random Forests.",
        "Unsupervised clustering models including K-Means and PCA dimensionality reduction.",
        "Cross-validation scoring, ROC-AUC curve plots, and precision-recall trade-offs.",
        "Interactive Jupyter Notebooks with reproducible workflows."
      ],
      techStack: ["Python", "Scikit-Learn", "NumPy", "Pandas", "Matplotlib", "Seaborn"],
      githubUrl: "https://github.com/MuhammadZillHassnain-bit/Machine-Learning-With-Scikit-Learn-main",
      demoUrl: null
    },

    "tic-tac-toe": {
      title: "Tic-Tac-Toe Interactive Game",
      category: "Web Development",
      categoryTag: "Interactive Web Game",
      status: "Completed",
      statusType: "completed",
      image: "assets/images/project-quiz-app.svg",
      shortDesc: "A fully functional two-player Tic-Tac-Toe game built with JavaScript featuring win detection, draw handling, and animated UI feedback.",
      fullDesc: "A classic browser-based Tic-Tac-Toe game built with Vanilla JavaScript, HTML5, and CSS3. Implements complete game logic including turn management, win-condition checking for all rows, columns, and diagonals, and draw detection with a polished animated user interface.",
      architecture: "Event-driven vanilla JavaScript with DOM manipulation, state-based game loop, and CSS transitions for visual feedback.",
      features: [
        "Two-player local multiplayer with clear turn indicator.",
        "Automatic win detection for all 8 winning combinations.",
        "Draw detection and game restart functionality.",
        "Animated cell selections with color-coded player feedback."
      ],
      techStack: ["JavaScript", "HTML5", "CSS3", "DOM APIs"],
      githubUrl: "https://github.com/MuhammadZillHassnain-bit/Tic-Tac-Toe-Game--main",
      demoUrl: null
    },

    "image-compressor": {
      title: "Image Compressor Tool",
      category: "Software Engineering",
      categoryTag: "Python Utility & Automation",
      status: "Completed",
      statusType: "completed",
      image: "assets/images/project-pdf-generator.svg",
      shortDesc: "A Python-based image compression utility that reduces image file sizes while preserving visual quality using advanced compression algorithms.",
      fullDesc: "Developed an image compression tool using Python's Pillow library that allows users to compress images in bulk or individually. The tool supports multiple formats (JPEG, PNG, WebP) and provides configurable quality settings, enabling significant file size reduction without noticeable quality loss.",
      architecture: "Python script-based utility with PIL/Pillow image processing pipeline, supporting batch operations and configurable output quality.",
      features: [
        "Support for JPEG, PNG, and WebP image formats.",
        "Configurable quality settings from lossless to high compression.",
        "Batch processing for compressing multiple images in a directory.",
        "Before/after file size comparison reporting."
      ],
      techStack: ["Python", "Pillow (PIL)", "File I/O", "Image Processing"],
      githubUrl: "https://github.com/MuhammadZillHassnain-bit/Image_Compressor-main",
      demoUrl: null
    },

    "ai-chatbot": {
      title: "AI Conversational ChatBot",
      category: "AI & Machine Learning",
      categoryTag: "AI / NLP Application",
      status: "Completed",
      statusType: "completed",
      image: "assets/images/project-iris-classifier.svg",
      shortDesc: "An intelligent conversational AI chatbot powered by natural language processing and machine learning models for contextual response generation.",
      fullDesc: "Built an AI-powered chatbot application integrating NLP capabilities to understand user queries and generate contextually relevant responses. The bot handles multi-turn conversations, maintains context across exchanges, and leverages ML models to improve response accuracy over time.",
      architecture: "NLP pipeline with intent classification, entity recognition, and response generation modules integrated into a conversational interface.",
      features: [
        "Natural language understanding with intent classification.",
        "Multi-turn conversation context management.",
        "Configurable response patterns and knowledge base.",
        "Real-time response generation with ML-powered inference."
      ],
      techStack: ["Python", "NLP", "Machine Learning", "AI APIs"],
      githubUrl: "https://github.com/MuhammadZillHassnain-bit/ai_chatBot-main",
      demoUrl: null
    },

    "fittrack": {
      title: "FitTrack – Workout & Fitness Tracker",
      category: "Mobile Apps",
      categoryTag: "Flutter / Mobile Application",
      status: "Completed",
      statusType: "completed",
      image: "assets/images/project-student-system.svg",
      shortDesc: "Cross-platform mobile application built with Flutter to track daily workouts, exercise routines, set personal records, and visualize health progress.",
      fullDesc: "FitTrack is an intuitive fitness and workout tracker built in Flutter. Designed to help users record weight training sets, cardio sessions, track personal records, and maintain workout streaks with clean material design charts.",
      architecture: "State management with Provider/Bloc, persistent SQLite storage for offline activity logging, and responsive UI components.",
      features: [
        "Workout routine planner with exercise categorization.",
        "Daily progress tracking and personal record logging.",
        "Cross-platform Flutter architecture for iOS and Android.",
        "Clean, modern mobile user interface with smooth animations."
      ],
      techStack: ["Flutter", "Dart", "Mobile App", "SQLite", "Material Design"],
      githubUrl: "https://github.com/MuhammadZillHassnain-bit/fittrack-main",
      demoUrl: null
    },

    "calculator-flutter": {
      title: "Flutter Modern Calculator App",
      category: "Mobile Apps",
      categoryTag: "Flutter Mobile App",
      status: "Completed",
      statusType: "completed",
      image: "assets/images/project-quiz-app.svg",
      shortDesc: "Clean, modern mathematical calculator built with Flutter featuring real-time expression evaluation and sleek tactile UI buttons.",
      fullDesc: "A mobile calculator application constructed with Google Flutter and Dart. Supports standard arithmetic, operator precedence evaluation, error trapping (such as divide by zero), and instant result rendering.",
      architecture: "Stateless and Stateful Flutter widget hierarchy using algorithmic expression parsing.",
      features: [
        "Real-time expression parsing and instant visual calculations.",
        "Responsive keypad layout adapted to varying screen densities.",
        "History log of recent computations.",
        "Sleek dark neumorphic-inspired mobile design."
      ],
      techStack: ["Flutter", "Dart", "Mobile UI", "Algorithms"],
      githubUrl: "https://github.com/MuhammadZillHassnain-bit/calculator_application-flutter",
      demoUrl: null
    },

    "tour-management": {
      title: "Tour Management System",
      category: "Software Engineering",
      categoryTag: "Systems / Travel Management",
      status: "Completed",
      statusType: "completed",
      image: "assets/images/project-university-system.svg",
      shortDesc: "Software application managing travel packages, tourist bookings, destination itineraries, and payment transactions.",
      fullDesc: "An end-to-end tour and travel management software system engineered to automate tourist bookings, travel package selection, hotel reservations, transport scheduling, and bill generation.",
      architecture: "Object-Oriented modular software architecture with persistent relational database records and comprehensive validation.",
      features: [
        "Tour package catalog with custom itinerary builder.",
        "Automated booking management and tourist verification.",
        "Billing generation with automated invoice calculation.",
        "Role-based administrative controls for package and booking status updates."
      ],
      techStack: ["Java", "OOP", "SQL Database", "Systems Design"],
      githubUrl: "https://github.com/MuhammadZillHassnain-bit/tour-management-system",
      demoUrl: null
    },

    "portfolio-website": {
      title: "Personal Brand & Engineering Portfolio",
      category: "Web Development",
      categoryTag: "Modern Frontend Architecture",
      status: "Live Website",
      statusType: "live",
      image: "assets/images/project-portfolio-website.svg",
      shortDesc: "Cinematic, high-performance personal portfolio built from scratch with pure HTML5, CSS3, and JavaScript.",
      fullDesc: "A modern, responsive, and accessible personal portfolio engineered to showcase technical projects, academic credentials, and development focus. Built with zero runtime frameworks for lightning-fast delivery and optimal SEO.",
      architecture: "Modular CSS token architecture with reusable CSS variables, responsive viewport queries, and event-driven JavaScript modules.",
      features: [
        "Dark cyber-tech aesthetic with glowing gradients, ambient orbs, and light mode switch.",
        "Zero-dependency JavaScript engine for typing animation, project modals, and scroll reveals.",
        "Direct GitHub repo links on project card click.",
        "Integrated client-side contact validation and direct resume download setup."
      ],
      techStack: ["HTML5", "CSS3", "Vanilla JavaScript", "SVG Graphics", "UI/UX Design"],
      githubUrl: "https://github.com/MuhammadZillHassnain-bit/portfolio",
      demoUrl: "#hero"
    }
  }
};

/* ===================================================================
   2. TYPEWRITER ROTATING HEADLINE ENGINE
   =================================================================== */
class Typewriter {
  constructor(element, words, waitTime = 2200) {
    this.element = element;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.waitTime = parseInt(waitTime, 10);
    this.isDeleting = false;
    this.type();
  }

  type() {
    const current = this.wordIndex % this.words.length;
    const fullTxt = this.words[current];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    if (this.element) {
      this.element.textContent = this.txt;
    }

    let typeSpeed = 90;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      typeSpeed = this.waitTime;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.wordIndex++;
      typeSpeed = 450;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

/* ===================================================================
   3. NAVIGATION BAR & SCROLL SPY
   =================================================================== */
function initNavigation() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const mobileToggleBtn = document.getElementById('mobile-toggle-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  // Sticky navbar shadow on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    updateActiveNavLink();
  }, { passive: true });

  // Mobile menu toggle & overlay handler
  const mobileDrawerOverlay = document.getElementById('mobile-drawer-overlay');

  const closeDrawer = () => {
    if (!mobileToggleBtn || !mobileDrawer) return;
    mobileToggleBtn.setAttribute('aria-expanded', 'false');
    mobileToggleBtn.classList.remove('active');
    mobileDrawer.classList.remove('active');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    if (mobileDrawerOverlay) {
      mobileDrawerOverlay.classList.remove('active');
    }
    document.body.style.overflow = '';
  };

  const openDrawer = () => {
    if (!mobileToggleBtn || !mobileDrawer) return;
    mobileToggleBtn.setAttribute('aria-expanded', 'true');
    mobileToggleBtn.classList.add('active');
    mobileDrawer.classList.add('active');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    if (mobileDrawerOverlay) {
      mobileDrawerOverlay.classList.add('active');
    }
    document.body.style.overflow = 'hidden';
  };

  if (mobileToggleBtn && mobileDrawer) {
    mobileToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isExpanded = mobileToggleBtn.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });

    // Close mobile drawer when any link is clicked
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeDrawer();
      });
    });

    // Close when clicking overlay
    if (mobileDrawerOverlay) {
      mobileDrawerOverlay.addEventListener('click', closeDrawer);
    }

    // Close when clicking outside drawer
    document.addEventListener('click', (e) => {
      if (mobileDrawer.classList.contains('active') && 
          !mobileDrawer.contains(e.target) && 
          !mobileToggleBtn.contains(e.target)) {
        closeDrawer();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileDrawer.classList.contains('active')) {
        closeDrawer();
      }
    });
  }

  // Active Link Highlighter on Scroll
  function updateActiveNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 140;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
        mobileNavLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
}

/* ===================================================================
   4. SCROLL REVEAL (INTERSECTION OBSERVER)
   =================================================================== */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('[data-reveal]');

  if (!('IntersectionObserver' in window)) {
    revealElements.forEach(el => el.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = el.getAttribute('data-delay');
        if (delay) {
          setTimeout(() => {
            el.classList.add('revealed');
          }, parseInt(delay, 10));
        } else {
          el.classList.add('revealed');
        }
        observerInstance.unobserve(el);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

/* ===================================================================
   5. PROJECT CATEGORY FILTERING
   =================================================================== */
function initProjectFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedFilter = btn.getAttribute('data-filter');

      // Update button state
      filterButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      // Filter project cards with smooth transitions
      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (selectedFilter === 'all' || cardCategory === selectedFilter) {
          card.classList.remove('filter-hidden');
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 30);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(16px)';
          setTimeout(() => {
            card.classList.add('filter-hidden');
          }, 200);
        }
      });
    });
  });
}

/* ===================================================================
   6. INTERACTIVE PROJECT DETAILS MODAL
   =================================================================== */
function initProjectModal() {
  const modal = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalBody = document.getElementById('modal-body-content');
  const detailButtons = document.querySelectorAll('.btn-details');

  if (!modal || !modalBody) return;

  function openModal(projectId) {
    const data = portfolioConfig.projects[projectId];
    if (!data) return;

    let featuresHtml = '';
    data.features.forEach(feat => {
      featuresHtml += `<li><i class="fa-solid fa-circle-check"></i> <span>${feat}</span></li>`;
    });

    let techHtml = '';
    data.techStack.forEach(tech => {
      techHtml += `<span class="tech-tag">${tech}</span>`;
    });

    let demoButtonHtml = '';
    if (data.demoUrl) {
      demoButtonHtml = `
        <a href="${data.demoUrl}" class="btn btn-sm btn-primary" target="_blank" rel="noopener noreferrer">
          <i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
        </a>
      `;
    }

    modalBody.innerHTML = `
      <img src="${data.image}" alt="${data.title}" class="modal-preview-img">
      <div class="modal-meta-row">
        <span class="project-category-tag">${data.categoryTag}</span>
        <span class="project-status-badge badge-${data.statusType}">
          <i class="fa-solid fa-circle-info"></i> ${data.status}
        </span>
      </div>
      <h2 class="modal-title" id="modal-title">${data.title}</h2>
      <p class="modal-desc">${data.fullDesc}</p>

      <h4 class="modal-section-title">System Architecture &amp; Engineering</h4>
      <p class="modal-desc">${data.architecture}</p>

      <h4 class="modal-section-title">Key Capabilities &amp; Features</h4>
      <ul class="modal-features-list">
        ${featuresHtml}
      </ul>

      <h4 class="modal-section-title">Technologies Used</h4>
      <div class="project-tech-stack" style="border: none; padding: 0;">
        ${techHtml}
      </div>

      <div class="modal-actions-row">
        ${demoButtonHtml}
        <a href="${data.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-glass">
          <i class="fa-brands fa-github"></i> View GitHub Repository
        </a>
      </div>
    `;

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  detailButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const pid = btn.getAttribute('data-modal');
      openModal(pid);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/* ===================================================================
   7. CONTACT FORM VALIDATION & INTERACTIVE SUBMISSION
   =================================================================== */
function initContactForm() {
  const form = document.getElementById('portfolio-contact-form');
  const submitBtn = document.getElementById('contact-submit-btn');

  if (!form) return;

  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const subjectInput = document.getElementById('contact-subject');
  const messageInput = document.getElementById('contact-message');

  const nameGroup = document.getElementById('group-name');
  const emailGroup = document.getElementById('group-email');
  const subjectGroup = document.getElementById('group-subject');
  const messageGroup = document.getElementById('group-message');

  // Remove error state on input
  [nameInput, emailInput, subjectInput, messageInput].forEach(input => {
    if (!input) return;
    input.addEventListener('input', () => {
      const group = input.closest('.form-group');
      if (group) group.classList.remove('has-error');
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    // Validate Name
    if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
      nameGroup.classList.add('has-error');
      isValid = false;
    } else {
      nameGroup.classList.remove('has-error');
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
      emailGroup.classList.add('has-error');
      isValid = false;
    } else {
      emailGroup.classList.remove('has-error');
    }

    // Validate Subject
    if (!subjectInput.value.trim() || subjectInput.value.trim().length < 3) {
      subjectGroup.classList.add('has-error');
      isValid = false;
    } else {
      subjectGroup.classList.remove('has-error');
    }

    // Validate Message
    if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      messageGroup.classList.add('has-error');
      isValid = false;
    } else {
      messageGroup.classList.remove('has-error');
    }

    if (!isValid) {
      showToast("Please correct the errors in the highlighted fields.", "error");
      return;
    }

    // Simulating processing state
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.classList.remove('loading');
      submitBtn.disabled = false;

      // Compose mailto fallback URL
      const senderName = encodeURIComponent(nameInput.value.trim());
      const senderEmail = encodeURIComponent(emailInput.value.trim());
      const subject = encodeURIComponent(`[Portfolio Inquiry] ${subjectInput.value.trim()}`);
      const body = encodeURIComponent(
        `Hello Muhammad,\n\n${messageInput.value.trim()}\n\n---\nFrom: ${decodeURIComponent(senderName)} (${decodeURIComponent(senderEmail)})`
      );

      const mailtoLink = `mailto:${portfolioConfig.owner.email}?subject=${subject}&body=${body}`;

      showToast("Message prepared! Launching your email client...", "success");

      // Open email client
      setTimeout(() => {
        window.location.href = mailtoLink;
      }, 700);

      // Reset form
      form.reset();
    }, 700);
  });
}

/* ===================================================================
   8. TOAST NOTIFICATION SYSTEM
   =================================================================== */
function showToast(message, type = "info") {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  let icon = '<i class="fa-solid fa-circle-info"></i>';
  if (type === 'success') icon = '<i class="fa-solid fa-circle-check"></i>';
  if (type === 'error') icon = '<i class="fa-solid fa-circle-exclamation"></i>';

  toast.innerHTML = `${icon} <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 4000);
}

/* ===================================================================
   9. BACK TO TOP BUTTON WITH CIRCULAR PROGRESS
   =================================================================== */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top-btn');
  const progressCircle = document.getElementById('scroll-progress-circle');

  if (!backToTopBtn || !progressCircle) return;

  const totalLength = 125.6; // 2 * PI * r (r = 20)

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? scrollY / docHeight : 0;

    // Progress circle stroke update
    const offset = totalLength - (scrollPercent * totalLength);
    progressCircle.style.strokeDashoffset = offset;

    // Toggle button visibility
    if (scrollY > 350) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;

  const setIcon = (theme) => {
    const icon = toggleBtn.querySelector('i');
    if (!icon) return;
    if (theme === 'dark') {
      icon.className = 'fa-solid fa-moon';
      toggleBtn.setAttribute('aria-label', 'Switch to light mode');
    } else {
      icon.className = 'fa-solid fa-sun';
      toggleBtn.setAttribute('aria-label', 'Switch to dark mode');
    }
  };

  const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    if (document.body) {
      document.body.classList.remove('theme-dark', 'theme-light');
      document.body.classList.add(theme === 'dark' ? 'theme-dark' : 'theme-light');
    }
    setIcon(theme);
  };

  // Apply saved or system preference
  const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  applyTheme(savedTheme);

  // Toggle theme on click
  toggleBtn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = current === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  });
}

// Initialize project card click navigation to open GitHub repository directly
function initProjectLinks() {
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    const projectId = card.dataset.projectId;
    if (!projectId) return;
    const project = portfolioConfig.projects[projectId];
    const url = (project && project.githubUrl) ? project.githubUrl : portfolioConfig.owner.githubUrl;

    card.style.cursor = 'pointer';
    card.addEventListener('click', (e) => {
      // If user clicked the details modal button, let modal open
      if (e.target.closest('.btn-details')) {
        return;
      }
      // If user clicked any link or anywhere on the card, open GitHub repo directly
      e.preventDefault();
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  });
}



/* ===================================================================
   10. INITIALIZATION RUNNER
   =================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  // Start Typewriter
  const typewriterElem = document.getElementById('typewriter');
  if (typewriterElem) {
    new Typewriter(typewriterElem, portfolioConfig.owner.rotatingTitles, 2200);
  }

  // Initialize UI subsystems
  initNavigation();
  initScrollReveal();
  initProjectFilters();
  initProjectModal();
  initContactForm();
  initBackToTop();
  initProjectLinks();
  initThemeToggle();

  console.log(`%c[Muhammad Zill Hassnain Portfolio]%c v2.0 Initialized successfully.`, 
    'color: #00f2fe; font-weight: bold; background: #0f172a; padding: 4px 8px; border-radius: 4px;',
    'color: #94a3b8;'
  );
});
