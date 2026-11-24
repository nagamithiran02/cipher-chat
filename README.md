# 🔐 CipherChat — Client-Side Private Message Encoder

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=111827)
![Privacy](https://img.shields.io/badge/Processing-100%25%20Client--Side-238636?style=flat-square)

A lightweight, zero-dependency web application for encoding and decoding private text messages directly in the browser using a configurable Caesar Cipher paired with an optional Unicode-safe Base64 stealth layer.

🔗 **Live Demo:** [nagamithiran02.github.io/cipher-chat](https://nagamithiran02.github.io/cipher-chat/)

---

## 🚀 Features

- **100% Client-Side Execution:** All encoding and decoding happen locally in the browser—no messages or keys are ever transmitted to a server.
- **Configurable Caesar Cipher (`1–25`):** Shifts alphabetic characters cleanly across uppercase and lowercase ASCII ranges while preserving punctuation and numbers.
- **Unicode-Safe Base64 Stealth Layer:** Uses `TextEncoder` and `TextDecoder` UTF-8 byte conversions so emojis, spaces, and special characters encode without corruption.
- **One-Click Clipboard Copy:** Instant copy workflow with visual confirmation feedback.

---

## 🛠️ Project Structure

```text
cipher-chat/
│
├── index.html   # Semantic UI layout and input/output controls
├── style.css    # Dark-mode responsive interface styling
└── script.js    # UTF-8 Base64 helpers, Caesar cipher logic, and DOM events
