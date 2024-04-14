function lightmode() {
    const theme = document.getElementById("body");
    theme.className = "theme-light";
  }
  
  function darkmode() {
    const theme = document.getElementById("body");
    theme.className = "theme-dark";
  }
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');

  function showSlide(n) {
      slides.forEach(slide => {
          slide.style.display = 'none';
      });
      slides[n].style.display = 'block';
  }

  function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
  }

  // Initial slide display
  showSlide(currentSlide);

  // Automatic slideshow
  setInterval(nextSlide, 2000);


  
    function expandCard(cardId) {
      const card = document.getElementById(cardId);
      const overlay = document.getElementById('overlay');
      const descriptionCard = document.getElementById('descriptionCard');
      const overlayTitle = document.getElementById('overlayTitle');
      const overlayContent = document.getElementById('overlayContent');

      switch (cardId) {
          case 'card1':
              overlayTitle.innerText = 'Family-friendly Environment';
              overlayContent.innerHTML = `
                  We value work-life balance and support a family-friendly environment with flexible hours and remote work options.<br>
                  Our team understands the importance of spending time with loved ones and encourages a supportive workplace.<br>
                  Employees have the freedom to manage their schedules, promoting a healthier work-life balance.
              `;
              break;
          case 'card2':
              overlayTitle.innerText = '401k Plan';
              overlayContent.innerHTML = `
                  Our 401k plan offers a 4% match and immediate vesting, allowing you to secure your financial future.<br>
                  Employees can take advantage of this generous benefit to plan for retirement and achieve financial stability.<br>
                  The immediate vesting ensures that you own your contributions and employer matches right from the start.
              `;
              break;
          case 'card3':
              overlayTitle.innerText = 'Healthcare Plans';
              overlayContent.innerHTML = `
                  We provide generous healthcare, dental, and vision plans to ensure you and your family's well-being.<br>
                  Our comprehensive coverage includes a range of services to meet your healthcare needs.<br>
                  We believe in investing in our employees' health, providing access to quality healthcare services.
              `;
              break;
          case 'card4':
              overlayTitle.innerText = 'Paid Leave';
              overlayContent.innerHTML = `
                  Take advantage of paid sabbaticals and parental leave to support your well-being.<br>
                  We understand the importance of taking time off to recharge and spend with family.<br>
                  Our paid leave policies are designed to provide flexibility and support during important life events.
              `;
              break;
          case 'card5':
              overlayTitle.innerText = 'Travel Opportunities';
              overlayContent.innerHTML = `
                  Explore opportunities to travel and visit our nonprofit partners around the world.<br>
                  We encourage employees to engage with our partners, fostering collaboration and learning.<br>
                  Traveling offers unique experiences and perspectives, enriching both personal and professional growth.
              `;
              break;
          case 'card6':
              overlayTitle.innerText = 'Office Perks';
              overlayContent.innerHTML = `
                  Enjoy free soda, coffee, and participate in fun cook-offs with the team.<br>
                  Our office environment promotes camaraderie and creativity.<br>
                  We believe in making the workplace enjoyable and offer various perks to enhance your experience.
              `;
              break;
      }

      overlay.style.display = 'flex';
  }

  function closeOverlay() {
      const overlay = document.getElementById('overlay');
      overlay.style.display = 'none';
  }
function showAlert() {
  alert('Thank you for showing your interest,we will guide you further.');
}

