Overview
This React app includes components to display updates, customer reviews, and interactive cards that can switch between a compact and expanded state. It uses libraries like framer-motion for animations, react-circular-progressbar for progress bars, and react-apexcharts for charts.

Prerequisites:
Node.js (v14 or higher)
npm (v6 or higher) 

SETUP:
1.Clone the repository:
git clone https://github.com/your-username/your-repo.git
cd your-repo
2.Install dependencies:
npm install

Running the App:
To start the development server, run:
npm start
//This will start the app and open it in your default web browser at http://localhost:3000.

src/
|--Assets/
| |--images
|-- components/
|   |-- Card/
|   |   |-- Card.jsx
|   |   |-- CircularProgress.css
|   |-- Cards/
|   |   |-- Cards.jsx
|   |-- MainDash/
|   |  |-- MainDash.jsx
|   |-- RightSide/
|   |  |-- RightSide.jsx  
|   |--Table/
|   |  |-- Table.jsx 
|   |-- Updates.jsx
|   |-- Home.jsx
|   |-- Sidebar.jsx 
|   |-- CustomerReview.jsx
|-- Data/
|   |-- CardData.jsx
|   |-- UpdatesData.jsx
|   |-- SidebarData.jsx 
|-- App.js
|-- index.js


Components
1. Card.js
This component displays a card that can switch between a compact and expanded state.
Props:
id (number): Unique identifier for the card.
title (string): Title of the card.
color (object): Background and shadow colors for the card.
barvalue (number): Value for the circular progress bar.
value (string): Value displayed on the card.
png (component): Icon component.
series (array): Data for the chart.
import Card from '../Card/Card';
import { CardsData } from '../../Data/CardData';

2. Cards.jsx
This component displays a collection of Card components.
3. Updates.jsx
This component displays a list of updates.
4. CustomerReview.jsx
This component displays a customer review chart using react-apexcharts.
5. RightSide.jsx
This component contains both the Updates and CustomerReview components.
6. MainDash.jsx
This component serves as the main dashboard, incorporating various sections such as cards, a table, and other widgets.
7. Table.jsx
This component displays data in a tabular format.
8. Home.jsx
This component serves as the home page of the application.
9. Sidebar.jsx
This component displays the sidebar navigation.

Data
1.CardData.js
Contains an array of objects with data for the cards.
2.UpdatesData.js
Contains an array of objects with data for the updates.
3.SidebarData.jsx
Contains an array of objects with data for the sidebar navigation

Custom CSS:
CircularProgress.css
Contains custom styles for the circular progress bar.

Dependencies:
framer-motion: For animations.
react-circular-progressbar: For circular progress bars.
react-apexcharts: For charts.
react-icons: For icons.

Install these dependencies using:
npm install framer-motion react-circular-progressbar react-apexcharts react-icons

reference:google,chatgpt


Conclusion
This documentation covers the installation, setup, and usage of the components in my React app. It provides an overview of the project structure, detailed explanations of the components...

