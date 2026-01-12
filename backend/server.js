// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
app.use(cors());

app.get('/api/clima', async (req, res) => {
    try {
        const { lat, lon } = req.query;

        const apiKey = process.env.WEATHER_API_KEY;

        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok) {
            // Si OpenWeather responde con error (ej. Key inválida)
            console.error("Error de OpenWeather:", data);
            return res.status(response.status).json(data);
        }

        res.json(data);
    } catch (error) {
        console.error("Error en el servidor Proxy:", error);
        res.status(500).json({ error: "Fallo interno" });
    }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));