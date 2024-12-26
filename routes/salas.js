const express = require('express');
const { createSala,deleteSala,updateSala,readAllSalas, readOneSala,} = require('../controllers/salas');
const router = express.Router();

router.post('/create', createSala);
router.post('/delete', deleteSala);
router.put('/update/:nombre', updateSala);
router.get('/readAll', readAllSalas);
router.get('/readOne/:nombre', readOneSala);


module.exports = router;
