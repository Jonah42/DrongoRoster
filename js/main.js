import { StepHeader } from './StepHeader.js';

document.addEventListener('DOMContentLoaded', function() {
  const stepHeaderText = ['Create shifts', 'Enter people', 'Generate roster!']
  const stepHeaders = document.querySelectorAll('[role=StepHeader]');
  stepHeaders.forEach((stepHeader, i) => {
    new StepHeader(stepHeader, i+1, stepHeaderText[i]);
  });
});