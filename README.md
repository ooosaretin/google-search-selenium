# Google Search Selenium Automated Test (JavaScript)

This repository contains an automated test for **Google Search** using **Selenium WebDriver** in **JavaScript** along with a video recording of the test execution. The test automates a Google search query and validates search results.

## Table of Contents
1. [Overview](#overview)
2. [Features](#features)
3. [Prerequisites](#prerequisites)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Video Recording](#video-recording)

## Overview
This project demonstrates how to use **Selenium WebDriver** in **JavaScript** to perform automated testing on Google Search. The test performs a search query and checks for specific elements on the results page. This helps with debugging and visual verification.

## Features
- **Selenium WebDriver** for automated testing.
- Validates Google search results.
- **Video recording** of test execution.
- Supports headless browser mode for CI/CD.
- Easy to set up and run using **Node.js** and **NPM**.

## Prerequisites
Before running the test, you need to have the following installed:

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [Selenium WebDriver](https://www.npmjs.com/package/selenium-webdriver/) for JavaScript

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/google-search-selenium.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd GoogleTestSelenium
   ```

3. **Install dependencies**:
   Run the following command to install all the required Node.js dependencies:
   ```bash
   npm install
   ```

4. **Download the WebDriver**:
   - Ensure that **Selenium WebDriver** or the appropriate WebDriver for your browser is installed and available in your system’s PATH.
   - You can download **Selenium WebDriver** from [here](https://www.npmjs.com/package/selenium-webdriver/) , which contains this command for installation:
     ```bash
     npm install selenium-webdriver
     ```

## Usage

1. **Run the test**:
   To execute the test, use the following command:
   ```bash
   node GoogleSearchTest/GoogleSearchSelenium.js
   ```

2. By default, the tests will run in headless mode (without opening a browser window). If you prefer to see the test execution in the browser, you can change the browser options in your test script to run in non-headless mode.

3. The tests will execute, and you can track progress in the terminal.

## Video Recording

https://github.com/user-attachments/assets/752516d1-20b0-40da-be73-af6fb3ca1555



