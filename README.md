
# 🔗 URL_PARSE_USING_NODE_JS

> Effortlessly parse and extract components from any URL using Node.js!

![Last Commit](https://img.shields.io/github/last-commit/saikatdasdeveloper/Url_Parse_using_Node_Js)
![Node.js](https://img.shields.io/badge/Node.js-100%25-green?logo=node.js)
![Languages](https://img.shields.io/github/languages/count/saikatdasdeveloper/Url_Parse_using_Node_Js)

Built with the tools and technologies:

![JavaScript](https://img.shields.io/badge/-JavaScript-yellow?logo=javascript)
![Node.js](https://img.shields.io/badge/-Node.js-green?logo=node.js)

---

## 📚 Table of Contents

- [Overview](#-overview)
- [Getting Started](#-getting-started)
  - [Prerequisites](#-prerequisites)
  - [Installation](#-installation)
  - [Usage](#-usage)
  - [Testing](#-testing)
- [Examples](#-examples)
- [License](#-license)

---

## 📝 Overview

**Url_Parse_using_Node_Js** is a simple Node.js project that demonstrates how to parse and manipulate URLs using the native `url` module in Node.js. It extracts components such as:

- Protocol
- Host
- Pathname
- Query Strings

This is useful for web developers and backend engineers who want to learn or implement URL parsing in a backend system.

---

## 🚀 Getting Started

### ✅ Prerequisites

- Node.js (v12+ recommended)
- Terminal or Command Prompt

---

### 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/saikatdasdeveloper/Url_Parse_using_Node_Js.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd Url_Parse_using_Node_Js
   ```

3. **Install dependencies**
   (No external dependencies required as it uses Node's built-in modules)

---

### 📌 Usage

Run the parser script using:

```bash
node index.js
```

You can customize the URL in the `index.js` file to test different outputs.

---

### 🧪 Testing

No external test framework is required. To test:

- Modify the `inputUrl` in `index.js`
- Observe the parsed components in the console output

Example:
```javascript
const inputUrl = 'https://example.com:8080/path/name?name=JohnDoe&age=25';
```

---

## 📊 Examples

### Given:
```javascript
https://example.com:8080/path/name?name=JohnDoe&age=25
```

### Output:
```
Protocol: https:
Host: example.com:8080
Pathname: /path/name
Query: name=JohnDoe&age=25
```

---

## 📄 License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).

---

> Built with ❤️ by [Saikat Das](https://github.com/saikatdasdeveloper)

![image](https://github.com/user-attachments/assets/ec24ca9b-edde-425c-ba4e-c598f62afbd5)
