
<br><br>
<div align="center">
  <p width="100%">
    <img width="40%" src="public/MAGMA-white.svg">
  </p>
</div>
<h2 align="center">E-commerce Website built with Next.js 13+<br></h2>




## Table of Contents

- [Introduction](#introduction)
- [Goals and roadblocks](#goals-and-roadblocks)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Installation and Usage](#installation-and-usage)
- [Future Improvements](#future-improvements)
- [Sources](#sources)


## Introduction

This project constitutes of a fully responsive, full-stack e-commerce website built using Next.js 13, serving both frontend and backend functionalities. The website was crafted from the ground up. From conceptual product case designs to web design and the development of the webpage, every aspect of this platform has been carefully considered and executed.

The platform displays a sleek, modern design coupled with smooth animations and an array of advanced features, promising an immersive e-commerce experience. Key functionalities and features, include, but are not limited to pagination, search and sorting options, cart functionalities, user signup flows, and an array of additional capabilities.

The handling of payments is streamlined through Stripe integration, while product data is sourced from MongoDB. The website is architected following Next.js best practices, leveraging file-based routing, data fetching enabling server-side rendering and static generation, prioritized image loading for optimization, efficient data caching, and utilization of React server components.

Global state management is realized through the use of the React Context API. The integration with Stripe extends beyond basic payment handling, encompassing the management of shipping rates, coupon codes, and the entire checkout process, ensuring a comprehensive and user-friendly purchasing experience.

## Goals and roadblocks

The reason behind embarking on the development of an e-commerce website was grounded in my eagerness to apply and interlink my skills and understand how different development stages connect. My aim was to delve into a project requiring a database, requiring my focus on the backend development aspects, ultimately understanding the big picture of how front-end and back-end parts connect. E-commerce is essential for businesses, so I wanted to build one from scratch, as it presented the opportunity to grasp how it all works.

I aimed to challenge myself by using a new front-end framework. After considering options, I picked Next.js 13 for its features like image optimization, SEO, and server-side rendering. While I had some experience with MongoDB, I wanted to further improve my database skills.

The decision to vend phone accessories was inspired by a friend from Mozambique who sells them on social media but lacks a website. I saw an opportunity to create a functional website as an example of how it could help the individual’s business to grow.

The project's primary objectives were centered around a user-friendly interface, a modern look, a fully responsive design, extensive e-commerce functionalities, and prioritizing optimal performance in loading times.

The initial challenge was to understand how everything would fit together. Moreover, concerns regarding efficiency, programming decisions, database setup, and API calls were pivotal. Extensive research into database setup preferences, optimizing API calls, and minimizing redundancy formed the base for informed decision-making. Breaking down the project into manageable components eased the initiation phase, and allowed me to understand the interconnections between the smaller components.

I encountered some framework-specific challenges, including issues with the file system or rendering errors, but I quickly resolved them by identifying the root causes and taking corrective action. 

Other important choices that I took were to create dynamic routes for product pages and use global state management. All product pages have the same functionalities, so in order to avoid repetition by creating separate individual routes, all product pages are served from one file. The correct database information is retrieved based on the dynamic route parameters. Global state management with context was also necessary so that components that are not directly connected can communicate and pass information to each other.

## Tech Stack

The project was built using the latest features of Next.js 13 and takes advantage of the following technologies:

- MongoDB - used as the primary database: product details and contact information are stored here
- GCS - database for image URLs which are added to MongoDB
- Stripe - integration for handling payments
- Framer motion - motion library to add animations
- JSX- syntax extension to be able to combine JS logic with HTML, and use HTML for defining the layout
- CSS - styling is used in modules, so pages load the minimal CSS required to display the page
- npm - a command-line tool to help install the different packages and manage their dependencies
<br>
<br>

Other tools used:
- Figma - page designs and layouts were created entirely in Figma, also used for exporting assets 
- Photoshop - all case designs, and product images on the website were created using the PS editor

## Features

- **Pagination**: product listings were divided into separate pages to improve loading times and navigation.

- **Searching**:  the search bar allows for quick and direct access to items of interest without extensive browsing. Users can search by category or product names.

- **Sortation**: it allows users to organize and view products based on specific criteria such as recommended, newest models, or older models. This functionality enables customers to quickly arrange products to suit their needs and find the most relevant items efficiently.

- **Cart functionalities**: users can add or remove products from their cart and review the chosen items before proceeding to checkout. Features include the ability to adjust quantities, delete products, estimate shipping costs, and, initiate the checkout process.

- **Newsletter sign-up**: this feature enables visitors to subscribe to the company's newsletter. The emails collected are sent to the MongoDB database. After submitting the email, and the validation checks for the email provided pass, a successful React Toast pop-up appears. If something goes wrong an error pop-up will be visible.

- **Contact form**: this form collects user queries, which are then sent to the MongoDB database.

- **Coupon Code Addition at Stripe Checkout**: during the Stripe checkout process customers can enter valid coupon codes which then will recalculate the total cost and show the breakdown of the total.

## Installation and Usage

```bash
# Clone this repository
$ git clone https://github.com/PentekTimi/Magma-Ecommerce.git 

# Go into the repository
# Add .env file and fill in your variables
Note: this project uses the following variables:
APIURL= base URL
MONGODB_URI= MongoDB connection URL
STRIPE_SECRET_KEY= stripe secret key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY= stripe publishable key
FREE_SHIPPING= stripe free delivery string
STANDARD_DELIVERY= stripe standard delivery string

# Install dependencies and run the development server
$ npm install
$ npm run dev

# To run the app in production mode, use
$ npm run build
$ npm run start
```

#### Database setup in this project

Set up your MongoDB database. If you prefer to use another database, don’t forget to review and change accordingly the file where products are fetched, and the keywords that display the correct information. The reason for this is that the body of the response will be different and the keywords that are used to display the correct information on the page need to be changed.

> **Note**
>  Product images are retrieved from GCS in this project. If other external links are used it has to be added to the .next file.

```bash
# Sample of products collection in MongoDB:
> magmaData
	> earbudcases (subcollections)
	> laptopcases
	> phonecases
	> watchbands

# Sample of product data in MongoDB:
_id: ObjectId()
name: string
description: string
price: int32
images: Array
releaseDate: string
bestSeller: boolean
category: string
onSale: boolean
salePrice: double
onHomePage: boolean
```

Contact messages submitted from the website and sign-up emails are pushed to MongoDB collections.

```bash
# Sample of contact collection:
> contactData
	> contactMessage
	> subscription

# Sample contact message data:
_id: ObjectId()
firstName: string
lastName: string
email: string
message: string

# Sample subscription data:
_id: ObjectId()
email: string

```


## Future Improvements

To enhance the website and broaden its capabilities, potential areas for development include the creation of an account page dedicated to providing clients with access to their order history, order confirmations, and real-time order status updates. The implementation of an account page would also facilitate the implementation of “save for later” or the functionality of liking items for future reference.

Upon user login or registration, integration with an email system could be established to facilitate automated confirmations and features such as password recovery.

Optimizing the database architecture would enable real-time inventory management, allowing synchronization of client orders with the company's database for streamlined internal tracking.

Additionally, a feature to restrict the quantity of a single product that can be ordered may be incorporated as a supplementary enhancement.

## Sources

Some of the social images were taken from the tech accessories company Burga mainly from their Instagram page (https://uk.burga.com/). This project is only for the purposes of personal development and is not intended for commercial use.

All of the phone case patterns are pictures added on top of a mockup. The pictures for the patterns were downloaded from the Unsplash website, and from multiple creatives.


Made with 🩷 by Timea Pentek.

> GitHub [@PentekTimi](https://github.com/PentekTimi) &nbsp;&middot;&nbsp;
> LinkedIn [@TimeaPentek](https://www.linkedin.com/in/timea-pentek/)




