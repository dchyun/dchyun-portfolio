// Tracker
let ticking = false;

document.addEventListener('scroll', function(e) {
  let lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      updateTracker(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
})

function updateTracker(scrollPosition) {
  const trackerSteps = document.querySelectorAll('.tracker-step');
  const projectSections = document.querySelectorAll('.project__section');
  let topMargin = 40;
  let foundActve = false;

  projectSections.forEach(function(el, i) {
    let trackerStep = trackerSteps[i];
    let sectionPositionBottom = scrollPosition - topMargin + el.getBoundingClientRect().bottom;

    if (sectionPositionBottom < scrollPosition) {
      setStepComplete(trackerStep);
    } else if (foundActve) {
      setStepIncomplete(trackerStep)
    } else {
      setStepActive(trackerStep);
      foundActve = true;
    }
  })
}

function setStepComplete(step) {
  step.classList.remove('step-active');
  step.classList.remove('step-incomplete');
  step.classList.add('step-complete');
  removeActiveStepSrText(step);
}

function setStepActive(step) {
  step.classList.remove('step-complete');
  step.classList.remove('step-incomplete');
  step.classList.add('step-active');
  addActiveStepSrText(step);
}

function setStepIncomplete(step) {
  step.classList.remove('step-complete');
  step.classList.remove('step-active');
  step.classList.add('step-incomplete');
  removeActiveStepSrText(step);
}

function addActiveStepSrText(step) {
  let link = step.querySelector('a');
  const currentSrOnlyText = link.querySelector('.sr-only');
  if (!currentSrOnlyText) {
    let srOnlyText = document.createElement('div');
    srOnlyText.classList.add('sr-only');
    srOnlyText.innerText = 'active';
    link.appendChild(srOnlyText);
  }
}

function removeActiveStepSrText(step) {
  let link = step.querySelector('a');
  let srOnlyText = link.querySelector('.sr-only');
  if (srOnlyText) {
    link.removeChild(srOnlyText);
  }
}