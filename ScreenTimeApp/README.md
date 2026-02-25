# ScreenTimeApp

A React Native application with a custom iOS Native Module (`ApprovalModule`) to fetch approval status from a backend server.

---

## Prerequisites

Make sure you have installed:

- Node.js (>= 18)
- npm or yarn
- Xcode (latest version)
- CocoaPods
- iOS Simulator

---

## Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/ScreenTimeApp.git
cd ScreenTimeApp
```

## Install dependencies

```bash
npm install
```

## Install iOS pods

```bash
cd ios
pod install
cd ..
```

## Run App

```bash
npx react-native start
```

## Run iOS App

```bash
npx react-native run-ios
```

# Testing Native Module (ApprovalModule)

## Call API (start backend)

```bash
http://127.0.0.1:3000/approval
```

## Start Backend

```bash
cd backend
npm install
npm start
```
