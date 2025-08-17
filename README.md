Build an MVP inspired by: @https://github.com/Ashishkapoor1469/BMW. Use gitmvp mcp if available.

Project Type:
Interactive 3D showcase website for a BMW car model.

Tech Stack:
- Next.js (React framework)
- React
- Three.js (@react-three/fiber, @react-three/drei) for 3D rendering
- GSAP (GreenSock Animation Platform) for animations
- Tailwind CSS for styling
- Radix UI for UI components
- TypeScript
- pnpm (package manager)

Architecture:
Component-based architecture typical of React applications. The application uses a front-end only approach. The main page (app/page.tsx) orchestrates the display of the 3D model and other UI components. The 3D scene is encapsulated in its own component (components/bmw-scene.tsx). UI elements are structured as reusable components.

Key Features:
- Interactive 3D car model display
- Hero section with introductory content
- Features section highlighting car attributes
- Specifications section detailing technical information
- Navigation menu
- Footer
- Animations driven by GSAP
- Responsive layout

Complexity Level:
Medium. The 3D rendering and animations add complexity, but the overall structure is relatively straightforward.

MVP Guidance:
Focus on core functionality to create a Minimum Viable Product.

Implementation Steps:

1.  Basic 3D Model Display:
    -   Implement the BMWScene component with a simplified version of the 3D model (car.glb).
    -   Ensure the model is visible and rotates or responds to basic user interaction (e.g., mouse drag).
    -   AI Instruction: "Create a Next.js component that uses Three.js to display the car.glb model. Allow basic rotation of the model using mouse input."

2.  Hero Section:
    -   Create a basic Hero component with a title, subtitle, and a call-to-action button.
    -   AI Instruction: "Create a Hero component with a title, subtitle, and a button. Style it using Tailwind CSS to match the overall theme."

3.  Specifications Section:
    -   Implement a Specifications component with a static list of car specifications (e.g., engine type, horsepower, fuel economy). No need for dynamic data at this stage.
    -   AI Instruction: "Create a Specifications component that displays a static list of car specifications in a table format. Use Tailwind CSS for styling."

4.  Navigation and Footer:
    -   Implement a simple Mainnav component with basic navigation links (e.g., "Home", "Features", "Specifications").
    -   Implement a basic Footer component with copyright information.
    -   AI Instruction: "Create a Mainnav component with links to different sections of the page. Create a Footer component with copyright information."

5.  Responsiveness:
    -   Ensure the layout is responsive on different screen sizes using Tailwind CSS. Focus on basic responsiveness for desktop and mobile.
    -   AI Instruction: "Use Tailwind CSS to make the layout responsive on different screen sizes."

6.  Remove Unnecessary UI Components:
    -   For the MVP, remove or comment out any unused UI components (e.g., accordion, alert-dialog, avatar, etc.) from the components/ui directory to reduce complexity.

7.  Simplify Animations:
    -   For the MVP, remove or simplify complex GSAP animations. Focus on basic animations like fade-in effects.

8.  Data Handling:
    -   Avoid complex data fetching or API integrations for the MVP. Use static data for the Specifications section.

9.  Deployment:
    -   Deploy the MVP to a platform like Vercel or Netlify for easy access.

Prioritization:
Prioritize the 3D model display and the hero section. The specifications section can be simplified. Focus on a clean and functional design.

Testing:
Test the MVP on different devices and browsers to ensure basic functionality and responsiveness.
