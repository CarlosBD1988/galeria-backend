const Sala = require('../models/Sala');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


exports.createSala = async (req, res) => {    
    const { nombre, descripcion } = req.body;
    if(!nombre || !descripcion){
        return res.status(400).json({ error: 'El nombre y la descripcion son obligatorios' });
    }
    try
    {
        const salaExistente = await Sala.findOne({ nombre });
        if (salaExistente) {
            return res.status(400).json({ error: 'El nombre de sala ya está registrado' });
        }
        const sala = new Sala({ nombre, descripcion });
        await sala.save();
        res.status(201).json({ message: 'Sala registrada exitosamente' });

    }
    catch(error)
    {
        res.status(500).json({ error: 'Error al crear la sala , ' + error.message  });
    }
      



};

exports.deleteSala = async (req, res) => {
    try
    {
        const { nombre } = req.body;

        const salaExistente = await Sala.findOne({ nombre });
        if (!salaExistente) {
            return res.status(400).json({ error: 'El nombre de sala no está registrado, no es posible eliminar.' });
        }
        Sala.deleteOne({ nombre: nombre })
                .then(() => {
                    console.log('Documento eliminado correctamente');
                    res.status(200).json({ message: 'Documento eliminado correctamente'});
                })
                .catch(err => {
                    res.status(500).json({ message: 'Error al eliminar el documento:' + err.message});
                });
    }
    catch(error)
    {
        res.status(500).json({ message: 'Error en metodo deleteSala :' + error.message});
    }
    
};

exports.updateSala = async (req, res) => {
    res.status(400).json({ message: 'Sala actualizada exitosamente'});

};

exports.readAllSalas = async (req, res) => {
    try{
        const allSalas= await Sala.find();
        res.status(200).json({ message: allSalas});

    }
    catch(error)
    {
        res.status(500).json({ error: 'Error listando las salas existentes, ' + error.message});
    }
    

};

exports.readOneSala= async (req, res) => {
    res.status(400).json({ message: 'Sala encontrada'});

};