const animeBoy = document.getElementById("anime-boy");
const body = document.getElementById("body");
const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");
const thereName = document.getElementById("name");
const thereMessage = document.getElementById("proposal-message");

let name = prompt("Enter Their Name ❤: ");
let messege = prompt("What Do You Want To Ask Them? 💭: ");

// adding there name
thereName.innerHTML += " " + name;
thereMessage.innerHTML = messege;

// Function to handle the "Yes" button hover effect
const handleYesButtonHover = () => {
  animeBoy.src = "assert/yes.gif";
  body.removeEventListener("mousemove", () => {
    repelNoButton(event);
  });
};

const handleYesButtonClick = () => {
    animeBoy.src = "assert/yeah.gif";
    document.getElementById("message").innerHTML = "<h1 style='color: #0e2db8'>Ooh Dear! ❤ <br>Let's make it work! 🎉</h1>";
    document.getElementById("button-container").innerHTML = "";
    document.getElementById('fireworks').style.display = "block";
    fadeOut(document.getElementById('fireworks'), 3000); // Fades out over 2000 milliseconds (3 seconds)
    // Other Stuffs

  };

// Function to handle the "Yes" button hover exit effect
const handleYesButtonHoverExit = () => {
  animeBoy.src = "assert/no.gif";
};

// Function to handle the "No" button hover effect
const handleNoButtonHover = () => {
  animeBoy.src = "assert/no.gif";
  body.addEventListener("mousemove", () => {
    repelNoButton(event);
  });
};

function fadeOut(element, duration = 1000) {
    let opacity = 1;
    const interval = 1000; // 10 milliseconds
    const steps = duration / interval;
    const opacityReduction = 1 / steps;
    const fadeOutInterval = setInterval(() => {
      opacity -= opacityReduction;
      element.style.opacity = opacity;
      if (opacity <= 0) {
        clearInterval(fadeOutInterval);
        element.style.display = 'none';
      }
    }, interval);
  }

  
particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#ff4d4d" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
        image: { src: "img/github.svg", width: 100, height: 100 },
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: { enable: true, speed: 0.5, opacity_min: 0.1, sync: false },
      },
      size: {
        value: 7,
        random: true,
        anim: { enable: true, speed: 2, size_min: 0.1, sync: false },
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 3,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true,
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
    },
    retina_detect: true,
  });

// Function to repel the "No" button
const repelNoButton = (event) => {
    const { top, left, width, height } = noButton.getBoundingClientRect();
    const cursorX = event.clientX;
    const cursorY = event.clientY;
    const distanceX = cursorX - left - width / 2;
    const distanceY = cursorY - top - height / 2; // Use height instead of width for vertical distance
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
    const repelForce = 15000;
    const repelPower = repelForce / distance ** 2;
  
    // Calculate repelling distances in X and Y directions
    const repelX = distanceX * repelPower;
    const repelY = distanceY * repelPower;
  
    // Calculate the new position within the viewport
    const newX = Math.min(Math.max(left + repelX, 0), window.innerWidth - width);
    const newY = Math.min(Math.max(top + repelY, 0), window.innerHeight - height);
  
    // Apply the translation
    noButton.style.transform = `translate(${-(newX - left)}px, ${-(newY - top)}px)`;
  };
  
