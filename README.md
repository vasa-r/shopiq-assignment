# E-commerce Website with Product Listing and Product Details Page

This is a fully functional and mobile-optimized e-commerce product listing page built with Next.js, integrated with a mock API. The project implements server-side rendering (SSR), client-side functionality, and a responsive design that works across various screen sizes.

## Features

- **Navbar:** Includes logo, menu options (Home, Categories, About, Contact).
- **Hero Section:** Carousel showcasing promotional images or banners with smooth transitions.
- **Product Listing Section:**
  - 12 products displayed initially.
  - "Show More" button loads 12 additional products at a time.
  - Responsive grid layout: 4 products per row on desktop, 2 per row on mobile.
- **Product Cards:** Includes image, title, price, and ratings.
- **Product Details Page:**
  - Image carousel for the product.
  - Displays title, price, description, ratings, and an "Add to Cart" button.
- **Server-side Rendering (SSR):** Ensures better SEO and performance for both the listing and individual product detail pages.
- **Scroll Position Persistence:** When navigating back to the listing page, the scroll position is preserved.

## API Integration

This project uses the following mock API for product data:

- **API Base URL:** [https://dummyjson.com/docs/products](https://dummyjson.com/docs/products)

The API provides information about products, including:

- Product image
- Title
- Price
- Ratings

## Functionality

1. **Show More Button:**

   - Dynamically loads 12 more products every time it is clicked.
   - The button disappears once all products are loaded.

2. **Error Handling:**

   - Displays loading state when data is being fetched.
   - Handles API errors and shows a message in case of failure.

3. **SSR (Server-Side Rendering):**

   - All pages (listing and product details) use SSR for optimal SEO and performance.

4. **Mobile Optimization:**
   - The website is optimized for mobile devices with a responsive design.

## Getting Started

To run the project locally, follow the instructions below.

### Prerequisites

- Node.js (version 14 or higher)
- npm (or yarn) installed

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/vasa-r/shopiq-assignment
   ```

2. Navigate to directory:

   ```bash
    cd shopiq-assignment
   ```

3. Install dependencies:

   ```bash
    npm install
   ```

4. Run App:

   ```bash
   npm run dev
   ```

## Video Link : [click here](https://drive.google.com/file/d/1vY6-LIvVKQGnwplS2MlyzdmwjKVhv17I/view?usp=sharing)

## Live Url : [click here](https://shopiq-assignment.vercel.app/)
