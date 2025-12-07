# 📧 Contact Form Setup Instructions

Your contact form is now configured to send emails to **muntazirmomin000@gmail.com**!

## 🚀 Quick Setup (2 minutes)

### Step 1: Get Your Free Access Key

1. Go to **[Web3Forms.com](https://web3forms.com)**
2. Enter your email: `muntazirmomin000@gmail.com`
3. Click **"Create Access Key"**
4. Check your email inbox for the access key (it arrives instantly)
5. Copy the access key (it looks like: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`)

### Step 2: Add the Access Key to Your Form

1. Open `Muntazir.html` in your editor
2. Find this line (around line 293):
   ```html
   <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
   ```
3. Replace `YOUR_ACCESS_KEY_HERE` with your actual access key
4. Save the file

### Step 3: Test Your Form!

1. Open `Muntazir.html` in your browser
2. Scroll to the Contact section
3. Fill out the form with test data
4. Click "Send Message"
5. Check your Gmail inbox - you should receive the form submission!

## ✨ Features Included

- ✅ **Email notifications** sent to muntazirmomin000@gmail.com
- ✅ **Spam protection** with honeypot field
- ✅ **Loading animations** while sending
- ✅ **Success/error messages** for user feedback
- ✅ **Form validation** to ensure required fields are filled
- ✅ **Auto-reset** after successful submission
- ✅ **Custom subject line**: "New Contact Form Submission from Portfolio"

## 📝 What Information You'll Receive

When someone submits the form, you'll receive an email with:
- **Sender's Name**
- **Sender's Email** (you can reply directly)
- **Phone Number** (optional)
- **Message**
- **Submission Date & Time**

## 🔒 Privacy & Security

- Web3Forms is **100% free** and GDPR compliant
- No data is stored on their servers (emails sent instantly)
- Includes spam protection
- No signup required (just email verification)

## 🆘 Troubleshooting

### Form not sending?
1. Make sure you replaced `YOUR_ACCESS_KEY_HERE` with your actual key
2. Check browser console (F12) for errors
3. Verify your email is confirmed with Web3Forms

### Not receiving emails?
1. Check your spam folder
2. Verify the access key is active on Web3Forms
3. Try submitting the form again

### Want to change the email address?
Simply create a new access key with a different email address and update the form.

## 🎨 Customization Options

You can customize the form behavior in `Muntazir.html`:

```html
<!-- Change the email subject -->
<input type="hidden" name="subject" value="Your Custom Subject">

<!-- Change the "from" name -->
<input type="hidden" name="from_name" value="Your Name">

<!-- Add a custom redirect after submission -->
<input type="hidden" name="redirect" value="https://yoursite.com/thank-you">
```

## 📚 Additional Resources

- [Web3Forms Documentation](https://docs.web3forms.com)
- [Web3Forms FAQ](https://web3forms.com/faq)

---

**That's it!** Once you add your access key, your contact form will be fully functional and ready to receive messages from potential employers and clients! 🎉

