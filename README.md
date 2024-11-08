# CANMAS Enterprises Web & Mobile Application

This repository contains the design specifications and implementation details for each page of the CANMAS Enterprises web and mobile applications. It serves as a quick reference for developers and designers to understand content structure, key design elements, and error messages on each page.

---

## Table of Contents
- [Screens Overview](#screens-overview)
  - [Login Screen](#1-login-screen)
  - [Register Screen](#2-register-screen)
  - [Forgot Password Screen](#3-forgot-password-screen)
  - [Enter OTP Screen](#4-enter-otp-screen)
  - [Create a New Password Screen](#5-create-a-new-password-screen)
  - [Password Reset Success Screen](#6-password-reset-success-screen)
  - [Password Reset Failed Screen](#7-password-reset-failed-screen)
  - [Dashboard](#dashboard)
- [Contributing](#contributing)
- [License](#license)

---

## Screens Overview

### 1. Login Screen
**Description:** The login screen allows users to access the application with their credentials.  
**Components:**
  - **Fields:**
    - **Username/Email Field:** Required user input
    - **Password Field:** Required user input
  - **Buttons:**
    - **Login:** Initiates authentication
    - **Forgot Password:** Redirects to password recovery
    - **Sign Up:** Redirects to registration
  - **Error Messages:**
    - "Invalid username or password. Please try again."
    - "Username and password cannot be empty."
  
**Content:**  
"Connecting you with fresh, high-quality produce straight from our farms to your doorstep. Discover our wide range of fruits, vegetables, and more."
---

### 2. Register Screen
**Description:** Allows users to create a new account with basic information.  
**Components:**
  - **Fields:**
    - First Name, Last Name, Email, Password, Confirm Password
  - **Buttons:**
    - **Register:** Creates a new user account
  - **Error Messages:**
    - "Please fill in all required fields."
    - "Passwords do not match."
    - "Email already in use."
  - **Success Message:**
    - "Account created successfully. You can now log in."

**Content:**  
"Sign up and join the CANMAS community to enjoy exclusive offers and personalized recommendations."

---

### 3. Forgot Password Screen
**Description:** Initiates password reset process by entering a registered email.  
**Components:**
  - **Fields:**
    - **Email:** User inputs their registered email for verification
  - **Buttons:**
    - **Submit:** Triggers OTP to the provided email
  - **Error Messages:**
    - "Email not registered. Please check your email."
    - "Please enter a valid email address."
  - **Success Message:**
    - "Verification code sent to your email."

**Content:**  
"Forgot your password? Enter your email below, and we'll send you a link to reset it."

---

### 4. Enter OTP Screen
**Description:** Prompts the user to enter the OTP sent to their email for identity verification.  
**Components:**
  - **Fields:**  
    - **OTP Input:** 6-digit code field
  - **Buttons:**
    - **Submit:** Validates OTP and proceeds to password reset
  - **Error Messages:**
    - "Invalid OTP. Please try again."
    - "OTP has expired. Please request a new one."
  - **Success Message:**
    - "OTP verified successfully."

**Content:**  
"Enter the 6-digit code sent to your email to confirm your identity."

---

### 5. Create a New Password Screen
**Description:** Users create a new password after OTP verification.  
**Components:**
  - **Fields:**  
    - New Password, Confirm Password
  - **Buttons:**
    - **Reset Password:** Sets a new password
  - **Error Messages:**
    - "Passwords do not match."
    - "Password must be at least 8 characters."
  - **Success Message:**
    - "Password reset successfully. You can now log in."

**Content:**  
"Create a strong password to secure your account."

---

### 6. Password Reset Success Screen
**Description:** Confirms successful password reset.  
**Message:** "Password reset successfully! You can now log in with your new password."  
**Buttons:**  
  - **Login:** Redirects to the login screen

**Content:**  
"Your password has been successfully reset."

---

### 7. Password Reset Failed Screen
**Description:** Notifies the user if password reset fails.  
**Message:** "Password reset failed. Please try again."  
**Buttons:**  
  - **Retry:** Redirects back to the password reset process

**Content:**  
"We're sorry, something went wrong. Please try again."

---

## Dashboard

### Dashboard - Home
**Description:** Provides an overview of business metrics and recent activities.  
**Metrics Display:**
  - **Earnings:** Total revenue
  - **Clients:** Number of clients
  - **Sales:** Total sales count
  - **Orders:** Active orders count
  - **Recent Orders:** List of latest orders with clickable order IDs
  
**Quick Actions:**  
  - Update Stock
  - View Orders
  - Reset Password
  - View Sales
  - Create New Order

### Dashboard - Product Management
**Description:** Manage the product inventory.  
**Product States:**
  - **dashboard-product:** Displays product list
  - **dashboard-product search:** Shows search results
  - **dashboard-product not found:** No products match the search
  - **dashboard-product success:** Product updates successful
  - **dashboard-product failed:** Product updates failed
  - **dashboard-product updating:** Loader shown during updates
  
**Search Functionality:** Filter by name, category, or supplier.

### Dashboard - Settings
**Description:** Manage profile and reset password.  
  - **Profile Settings:** Fields include Name, Email, Contact Number, with an Avatar Upload option
  - **Password Reset Flow:**  
    - Enter OTP  
    - Create New Password  
    - Display success or error message based on the outcome
  
**Content:**  
"Manage your account details, update preferences, and personalize your experience."
