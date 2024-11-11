
# BinGo - Smart Recycling Assistant

**BinGo** is a web application that leverages AI to simplify the recycling process. Users can scan and sort garbage, request pickups, and earn rewards—all from a single platform. This app promotes eco-friendly behavior by making recycling easy and rewarding.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Running the Project Locally](#running-the-project-locally)
- [Folder Structure](#folder-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## Features

1. **Scan & Sort Your Garbage**:
   - Users can snap a photo of their garbage, and BinGo's AI analyzes the image to identify recyclable items.
   - The AI instantly categorizes items to help users understand what can and cannot be recycled.

2. **Request a Pickup**:
   - After sorting their waste, users can request a pickup from nearby recycling centers.
   - BinGo notifies the nearest recycling center for quick and hassle-free collection.

3. **Get Paid for Recycling**:
   - Users earn rewards after recyclables are collected and processed.
   - BinGo tracks the user’s recycling efforts, showing their impact and earnings over time.

## Tech Stack

- **Frontend**: React, React Router, Tailwind CSS, Redux, React Slick for carousel, React Toastify for notifications, Framer Motion for animations
- **Backend**: Dfinity Internet Computer (ICP) with `@dfinity/agent`, `@dfinity/auth-client` for authentication and secure communication
- **Other Libraries**: Leaflet for maps, Moment for date formatting, Axios for HTTP requests

## Installation

### Prerequisites

- Node.js and npm
- Dfinity SDK (for deploying on Internet Computer)

1. Clone the repository:

   ```bash
   git clone git@github.com:georgegoldman/bingo.git
   cd bingo
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Initialize Dfinity:

   ```bash
   dfx start --background
   dfx deploy
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Visit the app at `http://localhost:8080`.

## Running the Project Locally

1. **Start the Dfinity Local Network**:

   ```bash
   dfx start --background
   ```

2. **Deploy the Canisters**:

   ```bash
   dfx deploy
   ```

3. **Run the Frontend Server**:

   ```bash
   npm start
   ```

Your application should now be running at `http://localhost:8080`.

## Folder Structure

```
bingo/
├── bingo_frontend/                 # Frontend code for Bingo app
│   ├── src/                        # Source code for the app
│   │   ├── components/             # Reusable components (carousel, header, etc.)
│   │   ├── assets/                 # Static assets (images, SVGs)
│   │   ├── pages/                  # Main app pages (Home, Profile, etc.)
│   │   ├── store/                  # Redux slices for managing state
│   │   ├── App.js                  # Main app component
│   │   ├── index.js                # Entry point for React app
│   │   └── styles/                 # CSS and styling files
│   ├── public/                     # Public files (index.html, etc.)
│   └── package.json                # Project dependencies and scripts
├── .gitignore                      # Git ignore file
├── README.md                       # Project documentation
└── package.json                    # Project dependencies and scripts

```

## Usage

1. **Scan Waste**:
   - On the homepage, click the "Scan Waste" button.
   - Use your camera to take a photo or upload an image of your waste.
   - BinGo’s AI will analyze the image and display recyclable items.

2. **Request Pickup**:
   - After sorting waste, go to the Pickup section.
   - Request a pickup, and the app will notify a nearby recycling center.

3. **Track Earnings**:
   - View your profile to track rewards, earnings, and your recycling impact over time.

## Contributing

Contributions are welcome! To get started:

1. Fork this repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License.

---

Enjoy using BinGo, and make a positive impact on the environment by recycling smartly!