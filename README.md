# GNews App 📰

Welcome to the **GNews** repository, a news aggregation app built using **React Native** and **Expo**. The app allows users to explore top headlines, search for news by category, and save articles to read later.

## 🚀 Features

- **Home Feed**: Explore the top headlines right when you open the app.
- **Discover**: Filter news by categories or search for specific keywords.
- **Article Details**: Read the full article with a clean reading interface, plus the ability to adjust the font size.
- **Saved Articles**: Bookmark articles to read later. The article state is saved globally.

## 🛠️ Technologies and Libraries

This project was built using modern technologies and the best practices of the React/React Native ecosystem:

- **Framework**: [Expo SDK 54](https://expo.dev/) & [React Native 0.81](https://reactnative.dev/)
- **Routing**: [Expo Router](https://docs.expo.dev/router/introduction/) (Folder-based navigation using the `app/` directory)
- **Styling**: [NativeWind](https://www.nativewind.dev/) (Tailwind CSS for React Native)
- **State Management**: [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction) (To manage the list of saved articles)
- **Data Fetching**: [React Query (TanStack Query)](https://tanstack.com/query/latest) & [Axios](https://axios-http.com/)
- **Other libraries**: `dayjs` (date formatting), `@expo/vector-icons` (icons).

## 🏗️ Architecture (MVVM)

This project adopts the **Model-View-ViewModel (MVVM)** architecture pattern, which promotes a clear Separation of Concerns:

The project structure within `src/` is as follows:

- **`features/`**: The core of the application. Each main screen/feature (Home, Discover, Article, Saved) is a module here.
  - **View (`*.view.tsx`)**: The visual UI component. It contains no business rules.
  - **Model/ViewModel (`*.model.tsx`/hook)**: Manages state and business rules for the `View`. It interacts with `services` and the `store`.
- **`app/`**: Contains the application routing using Expo Router, serving as the entry points for screens.
- **`components/`**: Reusable components across the project (e.g., news cards).
- **`service/`**: Axios configuration and functions that make external API calls (e.g., `news/index.ts` connecting with the NewsAPI).
- **`store/`**: Global application state using Zustand (`useSavedArticlesStore.ts`).

## ⚙️ How to Setup and Run the Project Locally

Follow the steps below to configure and run the development environment on your machine.

### Prerequisites
- Have **Node.js** (v18+) installed.
- A free account and API key from [NewsAPI](https://newsapi.org/).

### Step-by-Step

1. **Clone this repository** and enter the project folder:
    ```bash
    git clone <repository-url>
    cd my-expo-app
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Environment Variables Configuration**:
    - Rename the `.exemple.env` file to `.env` (or create a new `.env` file in the project root).
    - Insert your API key obtained from NewsAPI:
    ```env
    EXPO_PUBLIC_API_KEY=your_api_key_here
    ```

4. **Start the Expo development server**:
    ```bash
    npx expo start
    ```

5. **Access the application**:
    - Press `i` in the terminal to run on the **iOS** simulator (macOS only).
    - Press `a` to run on the **Android** emulator.
    - Or scan the generated QR code in the terminal using the **Expo Go** app on your physical mobile device.

---
Developed with 💙 using Expo.
