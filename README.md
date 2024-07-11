# Softhesis README

## Overview

Brief overview of the project and its purpose.

## Setup Decisions

### State Management with Redux

I chose to implement state management using Redux due to its centralized store and predictable state changes. Redux is well-suited for applications with complex state needs, providing a single source of truth that simplifies data flow and enhances maintainability.

### Mock Data Usage

To simulate backend interactions and test application functionality without a live backend, I opted to use mock data. This approach allows for rapid development and testing of frontend features, ensuring that components can handle various data scenarios.

### Other Decisions

- **Component Architecture**: Implemented using the atomic design methodology to promote reusability and maintainability of UI components.
  
- **Form Validation**: Utilized form validation to enhance user experience and ensure data integrity.
  
- **CSS-in-JS**: Leveraged [Library Name] for styling to maintain component-specific styles and improve CSS management.

## Atomic Design Component Breakdown

### Atoms
- **Button**: A basic button component used throughout the application.
- **Img**: A simple image component for displaying images.
- **Input**: An input field component for user inputs.
- **Heading**: A heading component for titles and headings.
- **Text**: A text component for paragraphs and other text elements.

### Molecules
- **ContextMenu**: A contextual menu component that displays additional options.
- **UserProfile**: A component displaying user profile information.
- **SelectBox**: A dropdown select box component for selecting options.

### Organisms
- **Header/Navbar**: The header or navigation bar component.
- **Table**: A table component for displaying tabular data.
- **Sidebar**: A sidebar component for navigation and additional options.

## Routes

### /login

- **Description**: The login page allows users to authenticate by providing their credentials.
- **Features**:
  - User authentication form with validation.
  - Error messages for incorrect login attempts.
  - Redirect to the dashboard upon successful login.

### /userdetails

- **Description**: The user details page displays information about the logged-in user.
- **Features**:
  - Displays user profile information.
  - Allows users to update their profile details.
  - Fetches and updates user data from the Redux store.

### /dashboard

- **Description**: The dashboard page serves as the main landing page after login.
- **Features**:
  - Overview of user-specific data and activities.
  - Navigation links to other parts of the application.
  - Interactive components like tables and charts displaying relevant information.

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your local development machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your/repository.git
   cd project-directory
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Running the Application

To start the Next.js application:

```bash
npm run dev
```

Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

### Additional Scripts

- `npm run build`: Build the production-ready application.
- `npm run start`: Start the production server (after building).
