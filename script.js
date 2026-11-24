// 1. Unicode-Safe Base64 Helpers (Handles Emojis & Special Characters)
function utf8ToBase64(str) {
    const bytes = new TextEncoder().encode(str);
    const binString = Array.from(bytes, byte => String.fromCharCode(byte)).join("");
    return btoa(binString);
}

function base64ToUtf8(base64) {
    const binString = atob(base64);
    const bytes = Uint8Array.from(binString, (m) => m.charCodeAt(0));
    return new TextDecoder().decode(bytes);
}

// 2. Core Caesar Cipher Function
function caesarCipher(text, shift, decrypt = false) {
    if (decrypt) {
        shift = (26 - (shift % 26)) % 26;
    } else {
        shift = shift % 26;
    }

    return text.replace(/[a-zA-Z]/g, (char) => {
        const base = char <= 'Z' ? 65 : 97; // ASCII 'A' = 65, 'a' = 97
        return String.fromCharCode(((char.charCodeAt(0) - base + shift) % 26) + base);
    });
}

// 3. Grab HTML Elements
const messageInput = document.getElementById("messageInput");
const shiftKeyInput = document.getElementById("shiftKey");
const base64Toggle = document.getElementById("base64Toggle");
const outputText = document.getElementById("outputText");
const encryptBtn = document.getElementById("encryptBtn");
const decryptBtn = document.getElementById("decryptBtn");
const copyBtn = document.getElementById("copyBtn");

// 4. Encrypt Event Listener
encryptBtn.addEventListener("click", () => {
    const text = messageInput.value;
    const shift = parseInt(shiftKeyInput.value, 10) || 0;

    if (!text) return;

    try {
        // Step A: Apply Caesar Cipher
        let result = caesarCipher(text, shift, false);

        // Step B: Apply Base64 layer if checked
        if (base64Toggle.checked) {
            result = utf8ToBase64(result);
        }

        outputText.value = result;
    } catch (error) {
        outputText.value = "Error during encryption.";
    }
});

// 5. Decrypt Event Listener
decryptBtn.addEventListener("click", () => {
    const text = messageInput.value.trim();
    const shift = parseInt(shiftKeyInput.value, 10) || 0;

    if (!text) return;

    try {
        let processedText = text;

        // Step A: Decode Base64 first if checked
        if (base64Toggle.checked) {
            processedText = base64ToUtf8(processedText);
        }

        // Step B: Reverse Caesar Cipher
        const result = caesarCipher(processedText, shift, true);
        outputText.value = result;
    } catch (error) {
        outputText.value = "Decryption failed! Check your ciphertext or shift key.";
    }
});

// 6. Copy to Clipboard Functionality
copyBtn.addEventListener("click", () => {
    if (!outputText.value) return;

    navigator.clipboard.writeText(outputText.value).then(() => {
        const originalText = copyBtn.textContent;
        copyBtn.textContent = "✅ Copied to Clipboard!";
        setTimeout(() => {
            copyBtn.textContent = originalText;
        }, 2000);
    });
});