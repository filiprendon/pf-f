function typeWriter(element, text, i = 0) {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      setTimeout(() => typeWriter(element, text, i + 1), typingSpeed);
    }
  }
  
  const element = document.querySelector(".typing-text");
  const text = "Filip Rendón - Web Developer";
  const typingSpeed = 40;
  
  typeWriter(element, text);