var fireballSize = 22;

var getFireballSpeed = function(left) {
  return left ? 2 : 5
}

wizardSpeed = 3;

wizardWidth = 70;

var getWizardHeight = function() {
  return 2.337 * wizardWidth;
}

var getWizardX = function(width) {
  return (width * 0.5) - (wizardWidth * 0.5);
}
