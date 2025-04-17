# 📝 Products API Project

Este proyecto es una API REST simple construida con **Node.js**, diseñada para gestionar productos. Incluye integración con **Docker** para proporcionar los servicios de base de datos.

> Repositorio original: [products-api - GitHub](https://github.com/eleazarpina/products-api)

---

## 🚀 Características

- 🔐 Registro de usuarios
- 🎫 Login de usuarios
- 📋 Listar todos los productos
- 🔍 Obtener producto por ID
- ❌ Borrar producto
- 📝 Editar producto

---

## ⚙️ Principales Tecnologías utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Docker](https://www.docker.com/)

---

## 💻 Cómo ejecutar el proyecto localmente

1. Clona el repositorio

   ```bash
   git clone https://github.com/eleazarpina/products-api.git
   cd products-api
   ```

2. Levantar base de datos: `docker compose up -d`

3. Instalar dependencias: `npm install`

4. Inicializar el servidor `npm run dev`

## 📂 Estructura del proyecto

products-api/  
│ .env
│ .gitignore
│ docker-compose.yml
│ package-lock.json
│ package.json
│ README.md
│ tsconfig.json
│
└───src
│ index.ts
│
├───config
│ database.config.ts
│
├───controllers
│ auth.controller.ts
│ product.controller.ts
│
├───interfaces
│ product.interface.ts
│ user.interface.ts
│
├───middlewares
│ httpErrorHandle.middleware.ts
│ jwt.middleware.ts
│
├───models
│ product.model.ts
│ user.model.ts
│
├───routes
│ auth.route.ts
│ product.route.ts
│
├───schemas
│ auth.schema.ts
│ product.schema.ts
│
├───services
│ auth.service.ts
│ product.service.ts
│ user.service.ts
│
└───utils
auth.util.ts
httpError.util.ts

## 👨‍💻 Desarrollo

- Eleazar Pina (eleazarpina)
