For a **Google Search Selenium Automated Test** written in **JavaScript** with video recording, the README should be clear and informative, guiding users through the installation, usage, and viewing of test results. Here's a detailed example of what to include in the README file:

---

# Google Search Selenium Automated Test (JavaScript)

This repository contains an automated test for **Google Search** using **Selenium WebDriver** in **JavaScript**. The test automates a Google search query, validates search results, and captures **video** during the execution to visualize and debug the process.

## Table of Contents
1. [Overview](#overview)
2. [Features](#features)
3. [Prerequisites](#prerequisites)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Video Recording](#video-recording)

## Overview
This project demonstrates how to use **Selenium WebDriver** in **JavaScript** to perform automated testing on Google Search. The test performs a search query, checks for specific elements on the results page, and saves video recording of the test execution. This helps with debugging and visual verification.

## Features
- **Selenium WebDriver** for automated testing.
- Validates Google search results.
- **Video recording** of test execution.
- **Screenshots** captured at key moments in the test.
- Supports headless browser mode for CI/CD.
- Easy to set up and run using **Node.js** and **NPM**.

## Prerequisites
Before running the test, you need to have the following installed:

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [Selenium WebDriver](https://www.selenium.dev/documentation/en/webdriver/) for JavaScript
- [ChromeDriver](https://sites.google.com/a/chromium.org/chromedriver/) (or another driver if using a different browser)
- [Monosnap](https://monosnap.com/) for video recording (if you're capturing videos)

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/google-search-selenium.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd google-search-selenium
   ```

3. **Install dependencies**:
   Run the following command to install all the required Node.js dependencies:
   ```bash
   npm install
   ```

4. **Download the WebDriver**:
   - Ensure that **ChromeDriver** or the appropriate WebDriver for your browser is installed and available in your system’s PATH.
   - You can download **ChromeDriver** from [here](https://sites.google.com/a/chromium.org/chromedriver/).

5. **Set up Monosnap for video recording**:
   - If you're using **Monosnap** for video recording, make sure it's installed on your system. You can download it from [Monosnap’s website](https://monosnap.com/download/win).

## Usage

1. **Run the test**:
   To execute the test, use the following command:
   ```bash
   node GoogleSearchTest/GoogleSearchSelenium.js
   ```

2. By default, the tests will run in headless mode (without opening a browser window). If you prefer to see the test execution in the browser, you can change the browser options in your test script to run in non-headless mode.

3. The tests will execute, and you can track progress in the terminal. Upon completion, video file will be saved in designated directories.

## Video Recording

https://github.com/user-attachments/assets/752516d1-20b0-40da-be73-af6fb3ca1555



