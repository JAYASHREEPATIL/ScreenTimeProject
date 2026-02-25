# ScreenTimeProject

An end-to-end prototype demonstrating a **Daily Screen-Time Approval Workflow** across:

- Node.js Backend
- Native iOS Layer (Swift Native Module)
- React Native UI

---

## Architecture Flow

Backend → Swift Native Module → React Native UI

1. React Native calls the iOS Native Module.
2. The Swift module makes a network request to the Node.js backend.
3. Backend returns approval status.
4. Swift parses response.
5. React Native UI updates accordingly.

---

## Project Structure

ScreenTimeProject

1. node-express-ts → Backend API
2. ScreenTimeApp → React Native App (iOS Native Module)

---

## How To Run The Project

### 1. Start Backend

```bash
cd node-express-ts
npm install
npm start
```

Backend runs at: 

```bash
http://127.0.0.1:3000/approval
```

### 2. Start React Native App

```bash
cd ScreenTimeApp
npm install
cd ios
pod install
cd ..
npx react-native start
```

In another terminal:

```bash
npx react-native run-ios
```
