// ===================================================================
//  PROFESSIONAL PORTFOLIO - JAVASCRIPT
// ===================================================================

// -----------------------------------------------------
// THEME TOGGLE
// -----------------------------------------------------
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Load saved theme from localStorage
function loadTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark");
    updateThemeIcon(true);
  } else {
    updateThemeIcon(false);
  }
}

// Update theme icon
function updateThemeIcon(isDark) {
  const icon = toggleBtn.querySelector("i");
  if (isDark) {
    icon.className = "fas fa-sun";
  } else {
    icon.className = "fas fa-moon";
  }
}

// Toggle theme
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  const isDark = body.classList.contains("dark");
  
  updateThemeIcon(isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Initialize theme on load
loadTheme();

// -----------------------------------------------------
// MOBILE MENU TOGGLE
// -----------------------------------------------------
const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const navCenter = document.querySelector(".nav-center");

mobileMenuToggle.addEventListener("click", () => {
  navCenter.classList.toggle("mobile-active");
  const icon = mobileMenuToggle.querySelector("i");
  
  if (navCenter.classList.contains("mobile-active")) {
    icon.className = "fas fa-times";
  } else {
    icon.className = "fas fa-bars";
  }
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (navCenter.classList.contains("mobile-active")) {
      navCenter.classList.remove("mobile-active");
      const icon = mobileMenuToggle.querySelector("i");
      icon.className = "fas fa-bars";
    }
  });
});

// -----------------------------------------------------
// ACTIVE NAVIGATION LINK ON SCROLL
// -----------------------------------------------------
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]");
  const scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute("id");
    const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

    if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach(link => link.classList.remove("active"));
      navLink.classList.add("active");
    }
  });
});

// -----------------------------------------------------
// SMOOTH SCROLL FOR ANCHOR LINKS
// -----------------------------------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    
    if (target) {
      const offset = 80; // Navbar height
      const targetPosition = target.offsetTop - offset;
      
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }
  });
});

// -----------------------------------------------------
// SCROLL ANIMATIONS (Fade in on scroll)
// -----------------------------------------------------
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe elements for animation
const animateOnScroll = document.querySelectorAll(
  ".skill-category, .project-card, .timeline-item, .education-card, .stat-item"
);

animateOnScroll.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(20px)";
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(el);
});

// -----------------------------------------------------
// NAVBAR SCROLL EFFECT
// -----------------------------------------------------
const navbar = document.getElementById("navbar");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  // Add shadow when scrolled
  if (currentScroll > 10) {
    navbar.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.15)";
  } else {
    navbar.style.boxShadow = "0 2px 8px var(--shadow)";
  }

  lastScroll = currentScroll;
});

// -----------------------------------------------------
// CONTACT FORM HANDLING WITH WEB3FORMS
// -----------------------------------------------------
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);

    // Show loading state
    const submitBtn = contactForm.querySelector(".btn-submit");
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;

    try {
      // Submit to Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        // Show success message
        formStatus.textContent = "Thank you! Your message has been sent successfully. I'll get back to you soon!";
        formStatus.className = "success";
        
        // Reset form
        contactForm.reset();
        
        // Hide success message after 8 seconds
        setTimeout(() => {
          formStatus.style.display = "none";
          formStatus.className = "";
        }, 8000);
        
      } else {
        throw new Error(data.message || "Submission failed");
      }
      
    } catch (error) {
      console.error("Form submission error:", error);
      
      // Show error message
      formStatus.textContent = "Oops! Something went wrong. Please try again or email me directly at muntazirmomin000@gmail.com";
      formStatus.className = "error";
      
      setTimeout(() => {
        formStatus.style.display = "none";
        formStatus.className = "";
      }, 8000);
    } finally {
      // Restore button
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }
  });
}

// -----------------------------------------------------
// TYPING EFFECT FOR HERO TITLE (Optional Enhancement)
// -----------------------------------------------------
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.textContent = "";
  
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// Uncomment to enable typing effect on hero title
// window.addEventListener("load", () => {
//   const heroTitle = document.querySelector(".hero-title");
//   if (heroTitle) {
//     const originalText = heroTitle.textContent;
//     typeWriter(heroTitle, originalText, 50);
//   }
// });

// -----------------------------------------------------
// SCROLL TO TOP BUTTON (Optional - can be added to HTML)
// -----------------------------------------------------
function createScrollToTopButton() {
  const button = document.createElement("button");
  button.innerHTML = '<i class="fas fa-arrow-up"></i>';
  button.className = "scroll-to-top";
  button.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: var(--accent-gradient);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    box-shadow: var(--shadow-lg);
    transition: all 0.3s ease;
    z-index: 999;
  `;
  
  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      button.style.display = "flex";
    } else {
      button.style.display = "none";
    }
  });
  
  document.body.appendChild(button);
}

// Initialize scroll to top button
createScrollToTopButton();

// -----------------------------------------------------
// CONSOLE MESSAGE
// -----------------------------------------------------
console.log(
  "%cWelcome to Muntazir's Portfolio! 🚀",
  "color: #667eea; font-size: 20px; font-weight: bold;"
);
console.log(
  "%cInterested in working together? Let's connect!",
  "color: #764ba2; font-size: 14px;"
);
