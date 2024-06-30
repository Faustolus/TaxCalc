const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const expressLayouts = require('express-ejs-layouts');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(expressLayouts);
app.set('layout', 'layout');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('personalData/personalData', { title: 'Personal Data' });
});

app.get('/personalData', (req, res) => {
    res.render('personalData/personalData', { layout: false });
});

app.get('/bank', (req, res) => {
    res.render('personalData/bank', { layout: false });
});

app.get('/tax', (req, res) => {
    res.render('personalData/tax', { layout: false });
});

app.get('/children', (req, res) => {
    res.render('personalData/children', { layout: false });
});

app.get('/child', (req, res) => {
    res.render('personalData/child', { layout: false });
});

app.get('/employment', (req, res) => {
    res.render('personalData/employment', { layout: false });
});

app.get('/result', (req, res) => {
    res.render('personalData/result', { layout: false });
});

app.post('/submit', (req, res) => {
    const formData = req.body;
    console.log('Main Form Data:', formData);
    fs.appendFile('data.txt', JSON.stringify(formData) + '\n', (err) => {
        if (err) throw err;
        console.log('Data saved!');
    });
    res.send('Form submitted successfully!');
});

app.post('/submit-bank', (req, res) => {
    const bankData = req.body;
    console.log('Bank Form Data:', bankData);
    fs.appendFile('bank_data.txt', JSON.stringify(bankData) + '\n', (err) => {
        if (err) throw err;
        console.log('Bank data saved!');
    });
    res.send('Bank form submitted successfully!');
});

app.post('/submit-tax', (req, res) => {
    const taxData = req.body;
    console.log('Tax Form Data:', taxData);
    fs.appendFile('tax_data.txt', JSON.stringify(taxData) + '\n', (err) => {
        if (err) throw err;
        console.log('Tax data saved!');
    });
    res.send('Tax form submitted successfully!');
});

app.post('/submit-children', (req, res) => {
    const childrenData = req.body;
    console.log('Children Form Data:', childrenData);
    fs.appendFile('children_data.txt', JSON.stringify(childrenData) + '\n', (err) => {
        if (err) throw err;
        console.log('Children data saved!');
    });
    res.send('Children form submitted successfully!');
});

app.post('/submit-employment', (req, res) => {
    const employmentData = req.body;
    console.log('Employment Form Data:', employmentData);
    fs.appendFile('employment_data.txt', JSON.stringify(employmentData) + '\n', (err) => {
        if (err) throw err;
        console.log('Employment data saved!');
    });
    res.send('Employment form submitted successfully!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
