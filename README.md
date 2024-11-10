# CANMAS Enterprises Web & Mobile Application

Welcome to the CANMAS Enterprises application repository! This document outlines the specifications for each page, providing a comprehensive guide for developers and designers to understand the content structure, key design elements, and error messages across the app.

---

## 📋 Table of Contents
- [Screens Overview](#screens-overview)
  - [Login Screen](#1-login-screen)
  - [Register Screen](#2-register-screen)
  - [Forgot Password Screen](#3-forgot-password-screen)
  - [Enter OTP Screen](#4-enter-otp-screen)
  - [Create a New Password Screen](#5-create-a-new-password-screen)
  - [Password Reset Success Screen](#6-password-reset-success-screen)
  - [Password Reset Failed Screen](#7-password-reset-failed-screen)
  - [Dashboard](#dashboard)
    - [Dashboard – Home](#dashboard-home)
    - [Dashboard – Client](#dashboard-client)
    - [Dashboard – Settings](#dashboard-settings)
    - [Dashboard – Order](#dashboard-order)
    - [Dashboard – Order View 1](#dashboard-order-view-1)
    - [Dashboard – Order View 2](#dashboard-order-view-2)
    - [Dashboard – Order Place Steps](#dashboard-order-place-steps)
    - [Dashboard – Supplier](#dashboard-supplier)
    - [Dashboard – Product Management](#dashboard-product-management)   
- [Contributing](#contributing)
- [License](#license)
---

## Screens Overview

### 🔐 1. Login Screen
**Description:**  
The login screen is the entry point for users. It includes fields for username/email and password, along with "Forgot Password" and "Sign Up" options.

**Components:**
- **📄 Fields:**
  - ** Username/Email Field:** User input required
  - ** Password Field:** User input required
- **🔘 Buttons:**
  - **Login:** Initiates authentication
  - **Forgot Password:** Redirects to password recovery flow
  - **Sign Up:** Redirects to the registration screen

**⚠️ Error Messages:**
- "Invalid username or password. Please try again."
- "Username and password cannot be empty."

**Content:**  
> "Connecting you with fresh, high-quality produce straight from our farms to your doorstep. Discover our wide range of fruits, vegetables, and more. Join us on the journey to a healthier lifestyle."

---

### 📝 2. Register Screen
**Description:**  
The registration screen collects user information to create a new account.

**Components:**
- **📄 Fields:**  
  - **First Name**
  - **Last Name**
  - **Email**
  - **Password**
  - **Confirm Password**
- **🔘 Buttons:**  
  - **Register:** Creates a new user account

**⚠️ Error Messages:**
- "Please fill in all required fields."
- "Passwords do not match."
- "Email already in use."

**✅ Success Message:**  
> "Account created successfully. You can now log in."

**Content:**  
> “Sign Up and Join the CANMAS Community”
> "Become a part of our growing community and experience the freshness of our produce. Sign up now and enjoy exclusive offers and personalized recommendations  
Explore"


---

### 🔑 3. Forgot Password Screen
**Description:**  
Allows users to initiate the password reset process by entering their registered email.

**Components:**
- **📄 Fields:**  
  - **Email:** Input the registered email for verification
- **🔘 Buttons:**  
  - ** Submit:** Triggers OTP to the provided email

**⚠️ Error Messages:**
- "Email not registered. Please check your email."
- "Please enter a valid email address."

**✅ Success Message:**  
> "Verification code sent to your email."

**Content:**  
> "Forgot your password? Enter your email below, and we'll send you a link to reset it."

---

### 🔢 4. Enter OTP Screen
**Description:**  
Prompts the user to enter the OTP sent to their email for identity verification.

**Components:**
- **📄 Fields:**  
  - ** OTP Input:** 6-digit code field
- **🔘 Buttons:**  
  - **➡Submit:** Validates OTP and proceeds to password reset

**⚠️ Error Messages:**
- "Invalid OTP. Please try again."
- "OTP has expired. Please request a new one."

**✅ Success Message:**  
> "OTP verified successfully."

**Content:**  
> "Enter the 6-digit code sent to your email to confirm your identity."

---

### 🔒 5. Create a New Password Screen
**Description:**  
Users are prompted to create a new password after OTP verification.

**Components:**
- **📄 Fields:**  
  - **New Password**
  - **Confirm Password**
- **🔘 Buttons:**  
  - **Reset Password:** Sets a new password

**⚠️ Error Messages:**
- "Passwords do not match."
- "Password must be at least 8 characters long."

**✅ Success Message:**  
> "Password reset successfully. You can now log in."

**Content:**  
> "Create a strong password to secure your account."

---

### ✅ 6. Password Reset Success Screen
**Description:**  
Confirms successful password reset.

**💬 Message:**  
> "Password reset successfully! You can now log in with your new password."

**🔘 Buttons:**  
- **Login:** Redirects to the login screen

**Content:**  
> "Your password has been successfully reset."

---

### ❌ 7. Password Reset Failed Screen
**Description:**  
Notifies the user if the password reset process fails.

**💬 Message:**  
> "Password reset failed. Please try again."

**🔘 Buttons:**  
- **Retry:** Redirects back to the password reset process

**Content:**  
> "We're sorry, something went wrong. Please try again."

---

## 📊 Dashboard

### Dashboard - Home
**Description:**  
The Home Dashboard provides an overview of business metrics and recent activities.

**📊 Metrics Display:**
- **•Earnings:** Total revenue
- **•Clients:** Number of clients
- **•Sales:** Total sales count
- **•Orders:** Active orders count
- **•Recent Orders:** List of the latest orders with clickable order IDs

**⚡ Quick Actions:**  
- **•Update Stock**
- **•View Orders**
- **•Reset Password**
- **•View Sales**
- **•Create New Order**

---

### 🗂️ Dashboard - Product Management
**Description:**  
Manage the product inventory, search, and update stock.

**Product States:**
- dashboard-product: Displays product list
- dashboard-product search: Shows search results
- dashboard-product not found: No products match the search
- dashboard-product success: Indicates successful updates
- dashboard-product failed: Indicates update failure
- dashboard-product updating: Loader shown during updates

**🔍 Search Functionality:**  
Users can filter products by name, category, or supplier.

---

### ⚙️ Dashboard - Settings
**Description:**  
The Settings section allows users to manage their profile and reset their password.

- **👤 Profile Settings:**  
  - ** Fields:** Name, Email, Contact Number
  

- **🔒 Password Reset Flow:**  
  -  Enter OTP
  -  Create New Password
  -  Display success or ❌ error message based on the outcome

**Content:**  
> "Manage your account details and keep your preferences updated. Personalized recommendations and notifications help enhance your experience."

--- 
 
 **Content:** 
**👤Profile - Main Section [Loram Ipsum]:**
"•Welcome to Your Canmas Enterprises Profile
"Here, you can manage your personal information and account settings to enhance your shopping experience with us. Keeping your profile up-to-date helps us serve you better with personalized recommendations,     exclusive offers, and seamless order tracking. Your satisfaction is our priority, and we're committed to delivering the freshest produce right to your doorstep."

**👤Profile Settings [Loram Ipsum]:**
"•Personalize Your Canmas Experience 
“Manage your account details effortlessly. Keep your name, contact information, and preferences updated to receive timely updates on new arrivals, special offers, and order notifications. Your profile settings are where you can ensure we deliver the best service tailored just for you.”

**🔑Reset Password [Loram Ipsum]:**
“Your security is important to us. If you've forgotten your password or simply wish to update it, you can reset it here quickly and easily. We recommend choosing a strong, unique password to keep your account safe.”

---

### 🧑‍💼 Dashboard – Client
**Overview Content:**
- **Total Clients Count**
- **Total Sales Count**
- **Welcome Message**
- **Search bar for clients**

**Table Columns:**
- Client ID
- Name
- Recipient (ATT)
- Address
- Payment
- Email
- Contact

**Actions:**
- Filter by client attributes
- Pagination controls
- Options for adding or updating client information

**⚠️ Error/Status Messages:**
- **No Data Found:** Displayed when no clients match the search or filter criteria.
- **Success Notification:** "Client details updated successfully."
- **Failed Notification:** "Failed to update client details. Please try again."

---

### 📦 Dashboard – Order
**Page Title:** Orders

**Overview Content:**
- **Total Sales This Week** (with a bar chart)
  
Content (Lorem Ipsum):
> "Track your sales at a glance! This weekly chart reveals top-performing days, helping you spot trends and plan smarter. Use it to boost profits, optimize resources, and make data-driven adjustments for a thriving business."

**Search Bar for Orders**
**Filters:**
- By Client
- Date From
- Date To

**Create New Order Button**

**Table Columns:**
- Order ID
- PO Number
- Company
- Date
- Status (e.g., Completed, In Progress)
- Contact
- Total Price (LKR)
- Payment Status
- Action button for viewing order details

**⚠️ Error/Status Messages:**
- **Order Placed Success:** "Order has been placed successfully."
- **Order Placed Failed Notification:** "Order placement failed. Please try again later."

---

### 🛒 Dashboard – Order View 1
**Page Title:** Order Details

**Content Sections:**
- Request Acceptance
- Collecting Items
- Packing
- Delivering
- Payment Done

**Order Information:**
- Order ID
- PO Number
- Order Date
- Item Count (25 included, 6 rejected)
- Company Name
- Contact Information
- Total Amount

**⚠️ Error/Status Messages:**
- **Success Notification:** "Order updated successfully."
- **Failed Notification:** "Failed to update order status."

---

### 🛒 Dashboard – Order View 2
Similar to Order View 1, with a condensed or alternative layout.

---

### 📦 Dashboard – Order Place Steps
Content (Lorem Ipsum)
**✅Order Information (STEP-1)**
> "Begin your order by providing the necessary details to ensure smooth processing. Completing all required information will help us move forward without delays.

**✅Prepare Order Items (STEP-2) **
> "Manage your order items here by adding or removing products. Review the details, apply any discounts, and the system will automatically calculate the final total. Confirm your bill before proceeding to the next step."

**✅Place an Order (STEP-3)**
> "You’re nearly there! Review your order details, including the recipient information and item list. Double-check the totals, discounts, and final bill. Once ready, click ‘Confirm and Submit Order’ to complete the process. You can go back to make any changes before finalizing."



**Step 1: Order Information**  
Purpose: Collect basic information about the order. 

Content (Lorem Ipsum):  
> "Begin your order by filling in the key details below. Accurate information helps us process your order without delays! Enter your PO number, contact details, recipient info, and delivery address. Remember to choose a payment method and set a due date. Complete all required fields to move forward seamlessly."

Fields for entering client details, order date, and any additional notes.

- PO Number, Contact, Recipient (ATT), Email, Address, Due date, Payment method (card)

**Step 2: Prepare Order Items Section**
- Add/Remove Items
- Order Request List
- Add/Remove items to/from the order
- Discount Options:
  - By amount
  - By percentage

**Step 3: Confirmation**
- Final order review with total amount, discount applied, and confirmation button.

**⚠️ Error/Status Messages:**
- **Add Item Success:** "Item added to the order successfully."
- **Add Item Failed:** "Failed to add item. Please try again."
- **Discount Success:** "Discount applied successfully."
- **Discount Failed:** "Failed to apply discount."

Content (Lorem Ipsum):  
> "Order Placed Successfully -
   Thank you! Your order has been successfully placed. A confirmation email with your purchase details will be sent shortly. We are processing your request and will keep you updated. For any questions, feel free to contact our support team.

**Order Placement Failed**
>  Oops! Something went wrong and we couldn’t process your order. This may be due to missing information or a network issue. Please double-check your details and try again. If the problem persists, contact our support team for help.
---

## 🤝 Contributing
 

## 📜 License
 

---

Thank you for being part of the CANMAS Enterprises mission to deliver fresh produce to your doorstep!

  
 
