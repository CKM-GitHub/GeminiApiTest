#   API Test (Groq API)

A collection of HTML tools to test and interact with Groq's Llama 3.1 API. Generate product advertising prompts or have general conversations with AI.

## 🔗 Live Demo
[View Live Project](https://aungtz.github.io/GeminiApiTest)


## Files Overview
**DefaultPlusUserPrompt.html**   Main tool - Generate detailed product advertising prompts with layout selection, model framing, header modes & more 
 **index.html**  Simple chat interface for general conversations 
 **GroqAPITest.html** | Enhanced chat with conversation history 
---
## 🔑 Getting Your Groq API Key

### Step 1: Create an Account
Go to [Groq Console](https://console.groq.com/keys) and sign up / log in.

### Step 2: Generate API Key
- Click **"Create API Key"**
- Give it a name (e.g., "My Test App")
- Copy the generated key (starts with `gsk_`)

### Step 3: Add Key to the Code
Open any `.html` file and find this line:

JavaScript Code
const GROQ_API_KEY = "gsk_existing_key_here";
Replace it with your new key:

javascript
const GROQ_API_KEY = "gsk_your_new_key_here";

## ⚠️ Important: API Key Errors

**If you encounter an API key error:**

1. **Check your API key** - Make sure you copied it correctly from [Groq Console](https://console.groq.com/keys)
2. **Verify the key format** - Should start with `gsk_` followed by random characters
3. **Replace the key** - Find `GROQ_API_KEY` variable in the code and paste your new key
