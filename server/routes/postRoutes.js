const express = require('express');
const {getPosts,createPost} = require('../controllers/postControllers');
const router = express.Router();

router.get('/',getPosts);
router.post('/',createPost);

module.exports = router;