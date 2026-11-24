Markdown
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
💡 How It Works (Under the Hood)
Encryption Pipeline: Applies modular alphabetic rotation (
𝐸
(
𝑥
)
=
(
𝑥
+
𝑘
)
mod
26
E(x)=(x+k)mod26) using the chosen shift key 
𝑘
k, then optionally wraps the UTF-8 byte stream in Base64 to obfuscate word lengths and special characters.

Decryption Pipeline: Reverses the layers in strict LIFO order—decoding the Base64 payload back into UTF-8 text first (when enabled) before applying the inverse modular shift (
𝐷
(
𝑥
)
=
(
𝑥
−
𝑘
+
26
)
mod
26
D(x)=(x−k+26)mod26).

Security Note: Designed as an educational cryptography and obfuscation utility; for high-security communications, pair with modern authenticated encryption (e.g., AES-GCM via the Web Crypto API).

📦 Running Locally
Clone or download the repository:

Bash
git clone [https://github.com/nagamithiran02/cipher-chat.git](https://github.com/nagamithiran02/cipher-chat.git)
Open index.html directly in any modern web browser—no build tools or dependencies required.


---

### 4. Bonus Catch on Your `password-entropy-analyzer` Repo
Notice in `image_7a3843.png` that your repo includes **`app.py`** alongside `main.py`, `analyzer.py`, `generator.py`, and `common_passwords.txt`[cite: 5]—if `app.py` is your Streamlit interface, you can optionally add `├── app.py # Streamlit web UI` into the `Project Structure` tree of that README too so it matches the repo 1:1[cite: 5].

Once `cipher-chat` is live, let me know if you'd like to add it as a second featured card right next to **Password Entropy Analyzer** on your main profile `README.md`!
