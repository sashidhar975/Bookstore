
const express = require('express');
const router = express.Router();
const {
  addNewbook,
  getNewbook,
  specificBook,
  updateBook,
  deleteBook,
} = require('../controllers/bookController');

router.post('/add', addNewbook);
router.get('/get', getNewbook);
router.get('/:id', specificBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);

module.exports = router;
