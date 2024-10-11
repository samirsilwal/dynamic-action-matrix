const core = require('@actions/core');

try {
  // Get input value
  const exampleInput = core.getInput('value');
  console.log(`Received input: ${exampleInput}`);

  // Set an output value
  const exampleOutput = `Output derived from ${exampleInput}`;
  core.setOutput('parsed', exampleOutput);

} catch (error) {
  core.setFailed(error.message);
}
