const express = require('express');
const bodyParser = require('body-parser');
const stripe = require('stripe')('sk_test_51EzjnHFCLYHYBAUJcUqABuxehHiu7JjJJDvM9rSoQGbsyfvtNl5WTeTddosLJypMG4feqwKoEB5mywOu99QX2JoN00S2OnNRAw');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/products', async (req, res) => {
  try {
    const products = await stripe.products.list();
    const prices = await stripe.prices.list();

    const productList = products.data.map(product => {
      const productPrices = prices.data.filter(price => price.product === product.id);
      return {
        ...product,
        prices: productPrices
      };
    });

    res.json(productList);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/create-checkout-session', async (req, res) => {
  const { priceIds } = req.body;

  try {
    const line_items = priceIds.map(priceId => ({
      price: priceId,
      quantity: 1,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: 'http://localhost:4242/success.html',
      cancel_url: 'http://localhost:4242/cancel.html',
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(4242, () => console.log('Running on port 4242'));
