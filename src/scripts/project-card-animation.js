const showCard = (entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      console.log("intersection")
    }
  }
}

const options = {
  rootMargin: "0px",
  threshold: 0.2,
};


const cardObserver = new IntersectionObserver(showCard, options);

const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card) => {
  cardObserver.observe(card);
})