import mongoose from "mongoose";
import express from "express"; // importamos el pqte express
import dotenv from "dotenv";
import userRoutes from "./routes/users.js"; // importamos el archivo donde manejamos las routes del App>
import categoryRoutes from "./routes/categoryRoutes.js";
import markRoutes from "./routes/markRoutes.js";

import cors from "cors";
import bodyParser from "body-parser";
import clienteRoutes from "./routes/clienteRoutes.js";
import rolRoutes from "./routes/rolRoutes.js";
import productoRoutes from "./routes/productoRoutes.js";
import pedidoRoutes from "./routes/pedidoRoutes.js";
import facturaRoutes from "./routes/facturaRoutes.js";
import materialFabricacionRoutes from "./routes/materialFabricacionRoutes.js";




dotenv.config();

const app = express(); 

app.use(express.json());
const port = process.env.PORT || 5000; 


// Middleware para manejar datos URL-encoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", markRoutes);
app.use("/api/clientes", clienteRoutes);
app.use("/api/roles", rolRoutes);
app.use("/api/productos", productoRoutes);
app.use("/api/pedidos", pedidoRoutes);
app.use("/api/facturas", facturaRoutes);
app.use("/api/materiales-fabricacion", materialFabricacionRoutes);
//Usamos el metodo para conectarnos a la BdD de mongoose
const clientOptions = {
  serverApi: {
    version: "1",
    strict: true,
    deprecationErrors: true,
  },
};

mongoose
  .connect(process.env.MONGODB_URI, clientOptions)
  .then(() => {
    console.log("Conectado a MONGOBD Atlas (WEB)");
  })
  .catch((error) => {
    console.log(`Ocurrio el siguiente error al conectarse == ${error.message}`);
  });

//Ruta base del APIWEB, nuestro endpoint base
app.get("/", (req, res) => {
  res.send("<h1>Bienvenido a mi API-WEB</h1>");
});

app.listen(port, () => {
  console.log(`Se inicio el servidor, y esta escuchando por el puerto ${port}`);
});
