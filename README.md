# Parse Inputs GitHub Action

A GitHub Action to parse string inputs using different delimiters and provide dynamic input to job matrix.

## Description

This GitHub Action takes a string input and parses it using a specified delimiter. The parsed output can be used to set up job matrices for running steps/jobs in parallel.

## Inputs

| Name                    | Description                                      | Required | Default Value |
|-------------------------|--------------------------------------------------|----------|---------------|
| `value`                 | A string input with or without delimiter.        | Yes      |               |
| `delimiter`             | A delimiter to parse the input string.           | No       | `,`           |
| `run-all-default-values`| A default value to return if `ALL` or `all` is passed as input. | No |               |

## Outputs

| Name         | Description                                                           |
|--------------|-----------------------------------------------------------------------|
| `parsed`     | A parsed input supported by the job matrix to run further steps/jobs in parallel. |
| `is-empty`   | A boolean value to check if the output is empty or not.               |

## Usage

Below is an example of how to use the **Parse Inputs** GitHub Action in your workflow:

```yaml
name: Example Workflow using Parse Inputs Action

on:
  push:
    branches:
      - main

jobs:
  parse-input:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Parse input values
        id: parse
        uses: samirsilwal/gh-input-parser@v1
        with:
          value: 'item1,item2,item3'
          delimiter: ','

      - name: Display parsed values
        run: echo "Parsed values are: ${{ steps.parse.outputs.parsed }}"

      - name: Check if output is empty
        run: echo "Is parsed output empty? ${{ steps.parse.outputs.is-empty }}"
```

### Example Explanation
- **value** : The input string is item1,item2,item3, which will be parsed using the delimiter specified.
- **delimiter** : This example uses a comma , as the delimiter, but you can specify any character.
- The output parsed will contain the list of items (item1, item2, item3) that can be used in other steps or jobs.
- The is-empty output will indicate if the parsed output is empty.

### Additional Notes
- If the `ALL` or `all` value is passed to the value input, the action will return the value set in run-all-default-values.
- This action is useful for creating dynamic job matrices in your workflows.
