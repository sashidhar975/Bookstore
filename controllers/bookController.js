
const Book = require('../models/Book');

const addNewbook = async(req, res) => {
    try{
      const {title, author, summary} = req.body
  
      const book = new Book ({
        title,
        author,
        summary
      })
      await book.save()
      res.status(201).json(book);
    } catch (error) {
      console.log("Error in adding a new book", error)
      res.status(400).json({message: 'server error'});
  }

}


const getNewbook = async(req, res) => {
  try {
        const books = await Book.find();
        res.send(books);
      } catch (error) {
        console.log("Error in getNewbook", error)
        res.status(500).json({message: 'server error'})
      }
}

const specificBook = async (req, res) => { 
    try {
      const book = await Book.findById(id);
      if (!book) {
        return res.status(404).json('Book not found');
      }
      res.json(book);
    } catch (error) {
      console.log("Error in getting the book by id", error)
      res.status(500).json({message: 'server error'});
    }
}

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, summary } = req.body;

    // Find the book by ID and update its details
    const updatedBook = await Book.findByIdAndUpdate(
      id,
      { title, author, summary },
      { new: true } // Return the updated book
    );

    if (!updatedBook) {
      return res.status(404).json('Book not found');
    }

    res.json(updatedBook);
  } catch (error) {
    console.log('Error in updating the book', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the book by ID and remove it
    const deletedBook = await Book.findByIdAndRemove(id);

    if (!deletedBook) {
      return res.status(404).json('Book not found');
    }

    res.json(deletedBook);
  } catch (error) {
    console.log('Error in deleting the book', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { addNewbook, getNewbook, specificBook, updateBook, deleteBook };


