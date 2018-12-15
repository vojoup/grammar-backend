const express = require('express');

const router = express.Router();

const db = require('../assets/source.json');

/**
 * Get all topics
 */
router.get('/topics', (req, res) => {
  res.json(db.topics);
});

/**
 * Get a single recipe by ID
 * @route GET api/recipes
 */
router.get('/topics/:topic/vocab', (req, res) => {
  const topic = req.params['topic'];
  res.json(db.vocab[topic]);
});

module.exports = router;