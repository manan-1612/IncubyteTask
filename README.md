# IncubyteTask

# String Calculator

A simple string calculator implemented in JavaScript, following Test-Driven Development (TDD) principles. This calculator can sum up numbers in a string, handling various delimiters and special cases.

## Features

- Returns `0` for an empty string
- Returns the number itself for a single number string
- Sums up multiple numbers separated by commas
- Handles new lines between numbers
- Supports custom delimiters specified in the format `//[delimiter]\n[numbers…]`
- Throws an exception for negative numbers, listing all negative numbers in the error message

## Requirements

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/manan-1612/IncubyteTask.git
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

## Running Tests

The project uses Jest for testing. To run the tests, use the following command:

```bash
npm test

