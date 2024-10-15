const core = require('@actions/core');

try {
  // Get input value
  const inpputString = core.getInput('value');
  const splittedString = inpputString.split(',');

  // Set an output value
  const exampleOutput = `Output derived from ${splittedString}`;
  console.log("🚀 ~ exampleOutput:", exampleOutput)
  core.setOutput('parsed', splittedString);

} catch (error) {
  core.setFailed(error.message);
}
