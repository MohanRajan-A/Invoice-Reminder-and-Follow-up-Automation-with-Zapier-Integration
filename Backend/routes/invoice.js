const router = require('express').Router();

// Dummy data for invoice details
const invoices = [
    { id: 1, amount: 100, dueDate: '2024-06-30', recipient: 'Customer A' },
    { id: 2, amount: 200, dueDate: '2024-07-15', recipient: 'Customer B' }
];

router.get('/', (req, res) => {
    if (!req.isAuthenticated()) {
        return res.redirect('/auth/google');
    }
    res.json(invoices);
});

module.exports = router;
