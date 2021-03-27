const express = require('express');
const router = express.Router();

const {
  getPeople,
  createPeople,
  createPersonInsominia,
  updatePerson,
  deletePerson,
} = require('../controllers/people');

// router.get('/', getPeople);

// router.post('/', createPeople);

// router.post('/insomnia', createPersonInsominia);

// router.put('/:id', updatePerson);

// router.delete('/:id', deletePerson);

router.route('/').get(getPeople).post(createPeople);
router.route('/insomnia').post(createPersonInsominia);
router.route('/:id').put(updatePerson).delete(deletePerson);

module.exports = router;
