const core = require('@actions/core');

const RUN_ALL_IDENTIFIER = 'all'

try {
  // Get input value
  const inputString = core.getInput('value');
  const inputDelimter = core.getInput('delimiter');
  const runAllDefaultValues = core.getInput('run-all-default-values');

  let inputValueToSplit = inputString;

  if (inputString.toLowerCase() === RUN_ALL_IDENTIFIER) {
    inputValueToSplit = runAllDefaultValues;
  }

  const splittedString = inputValueToSplit.split(inputDelimter || ',').filter(Boolean);

  // Set an output value
  if (splittedString.length) {
    core.setOutput('parsed', splittedString);
    core.setOutput('is-empty', false);
  } else {
    core.setOutput('is-empty', true);
  }

} catch (error) {
  core.setFailed(error.message);
}
