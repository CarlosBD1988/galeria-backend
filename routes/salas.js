const express = require('express');
const { createSala,deleteSala,updateSala,readAllSalas, readOneSala,} = require('../controllers/salas');
const router = express.Router();

router.post('/create', createSala);
router.post('/delete', deleteSala);
router.post('/update', updateSala);
router.get('/readAll', readAllSalas);
router.get('/readOne', readOneSala);


module.exports = router;
