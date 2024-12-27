const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads')); // Carpeta pública para imágenes

// Conexión a MongoDB
console.log("Valor de MONGO_URI:", process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB conectado'))
    .catch(err => {
        console.error('Error conectando a MongoDB:', err.message);
        process.exit(1); // Finaliza el proceso si no hay conexión
    });


// Rutas
const authRoutes = require('./routes/auth');
const salasRoutes = require('./routes/salas');
//const obrasRoutes = require('./routes/obras');

app.use('/api/auth', authRoutes);
app.use('/api/salas', salasRoutes);
//app.use('/api/obras', obrasRoutes);


// Servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
