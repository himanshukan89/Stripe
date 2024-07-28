
# Stripe Shopping Cart

This project demonstrates how to create a shopping cart using Stripe for handling payments. The application allows users to add products to a cart and proceed to a Stripe Checkout session with the selected items.

## Prerequisites

- Node.js (version 12 or higher)
- npm (Node Package Manager)
- A Stripe account

## Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/stripe-shopping-cart.git
   cd stripe-shopping-cart

2.Goto Visual code studio and create a new project/folder
 open new terminal and execute below command (remember to execute this command once you re in directory of new project)

 npm init -y
 npm install express stripe body-parser
 
3. create server.js file and copy paste code from server.js file in above github project ( Dont forget to add your server stripe key)
4. create new folder public in your github project and copy paste index.html file ( Dont forget to add your stripe public key)
5. Now once above steps are completed, open new terminal (ensure your are in same projjct directory), execute command below, it will start local server on your machine
   
npm start

7. Now, as server is running, you can execute index.html and click submit, it will show you a shopping cart and once you click submit button at bottom, it will save your cart items and push them to checkout
Goto browser and hit http://localhost:4242 or http://localhost:4242/index.html
