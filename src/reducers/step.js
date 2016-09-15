export default function step(currentStep) {
  return typeof currentStep === 'number' ? currentStep + 1 : 0
}
