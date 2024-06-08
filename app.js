const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs'); // File system module to save data

const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Route to render the main form
app.get('/', (req, res) => {
    res.render('index');
});

// Route to render the bank form
app.get('/bank', (req, res) => {
    res.render('bank');
});

// Route to render the tax form
app.get('/tax', (req, res) => {
    res.render('tax');
});

// Route to render the children form
app.get('/children', (req, res) => {
    res.render('children');
});

// Route to serve the child form template
app.get('/child', (req, res) => {
    res.render('child');
});

// Route to render the employment form
app.get('/employment', (req, res) => {
    res.render('employment');
});

// Route to handle main form submission
app.post('/submit', (req, res) => {
    const formData = req.body;
    console.log('Main Form Data:', formData);

    // Save form data to a file (or handle it as needed)
    fs.appendFile('data.txt', JSON.stringify(formData) + '\n', (err) => {
        if (err) throw err;
        console.log('Data saved!');
    });

    res.send('Form submitted successfully!');
});

// Route to handle bank form submission
app.post('/submit-bank', (req, res) => {
    const bankData = req.body;
    console.log('Bank Form Data:', bankData);

    // Save bank data to a file (or handle it as needed)
    fs.appendFile('bank_data.txt', JSON.stringify(bankData) + '\n', (err) => {
        if (err) throw err;
        console.log('Bank data saved!');
    });

    res.send('Bank form submitted successfully!');
});

// Route to handle tax form submission
app.post('/submit-tax', (req, res) => {
    const taxData = req.body;
    console.log('Tax Form Data:', taxData);

    // Save tax data to a file (or handle it as needed)
    fs.appendFile('tax_data.txt', JSON.stringify(taxData) + '\n', (err) => {
        if (err) throw err;
        console.log('Tax data saved!');
    });

    res.send('Tax form submitted successfully!');
});

// Route to handle children form submission
app.post('/submit-children', (req, res) => {
    const childrenData = req.body;
    console.log('Children Form Data:', childrenData);

    // Save children data to a file (or handle it as needed)
    fs.appendFile('children_data.txt', JSON.stringify(childrenData) + '\n', (err) => {
        if (err) throw err;
        console.log('Children data saved!');
    });

    res.send('Children form submitted successfully!');
});

// Route to handle employment form submission
app.post('/submit-employment', (req, res) => {
    const employmentData = req.body;
    console.log('Employment Form Data:', employmentData);

    // Save employment data to a file (or handle it as needed)
    fs.appendFile('employment_data.txt', JSON.stringify(employmentData) + '\n', (err) => {
        if (err) throw err;
        console.log('Employment data saved!');
    });

    res.send('Employment form submitted successfully!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
