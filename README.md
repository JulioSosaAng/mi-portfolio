# Portfolio de Análisis de Datos — Julio Sosa Angeles

Portfolio personal donde presento mis proyectos de análisis de datos, las herramientas que utilizo y el enfoque con el que abordo cada problema.

🔗 **Sitio en vivo:** [https://juliososaang.github.io/mi-portfolio/](https://juliososaang.github.io/mi-portfolio/)

---

## 👋 Sobre mí

Soy **Analista de Datos** con foco en transformar datos en información accionable. Me interesa el análisis exploratorio, la visualización y la comunicación clara de hallazgos que ayuden a tomar mejores decisiones.

- 📊 Análisis de datos, visualización y reporting
- 🐍 Python (Pandas, NumPy, Matplotlib, Seaborn)
- 🗄️ SQL para consultas, modelado y automatización
- 📈 Streamlit para aplicaciones interactivas
- ⚛️ React + Vite para publicar resultados en la web

---

## 🗂️ Proyectos

### 1. Análisis de Ventas
Análisis exploratorio de datos de ventas para identificar tendencias, regiones con mayor crecimiento y oportunidades de mejora comercial.

- **Herramientas:** [Python, Pandas, Matplotlib / Seaborn]
- **Enfoque:** limpieza de datos, análisis exploratorio, visualizaciones clave
- 🔗 [Ver proyecto](https://juliososaang.github.io/analisis_ventas/app.html)

### 2. Análisis de Fórmula 1 (Streamlit)
Aplicación interactiva para explorar datos históricos de Fórmula 1: pilotos, escuderías, resultados y estadísticas comparativas.

- **Herramientas:** [Python, Pandas, Streamlit]
- **Enfoque:** app interactiva con filtros dinámicos y visualizaciones
- 🔗 [Ver app](https://f1-pilotos-2024-2025.streamlit.app/)

### 3. Pipeline de Análisis y Automatización para la Eficiencia Operativa
Proyecto de análisis de datos estructurados que simula un flujo de trabajo real: extracción de datos con SQL, limpieza y automatización con Python, generación de métricas reutilizables y exposición de resultados en un dashboard interactivo.

- **Dataset:** Olist Brazilian E-Commerce (Kaggle)
- **Herramientas:** SQL, Python (Pandas), PostgreSQL, Streamlit / Plotly
- **Enfoque:** modelado del proceso operativo (pedido → pago → envío → entrega → reseña), automatización del pipeline y creación de vistas analíticas
- 🔗 [Ver repositorio](https://github.com/JulioSosaAng/the-last-mile-gap-olist) · [Ver dashboard](https://the-last-mile-gap-olist.streamlit.app/)

---

## 🛠️ Stack del portfolio

- [React 19](https://react.dev/) — interfaz
- [Vite 7](https://vitejs.dev/) — build y dev server
- [gh-pages](https://www.npmjs.com/package/gh-pages) — despliegue en GitHub Pages
- ESLint — calidad de código

---

## 🚀 Correr el proyecto localmente

```bash
# 1. Clonar el repositorio
git clone https://github.com/JulioSosaAng/mi-portfolio.git
cd mi-portfolio

# 2. Instalar dependencias
npm install

# 3. Levantar el servidor de desarrollo
npm run dev
```

El sitio queda disponible en `http://localhost:5173/mi-portfolio/`.

### Build de producción

```bash
npm run build
```

Genera la carpeta `dist/` con los archivos optimizados.

### Despliegue

```bash
npm run deploy
```

Esto compila el proyecto y publica `dist/` en la rama `gh-pages`, que es la que sirve GitHub Pages.

> **Requisitos:** Node `^20.19.0` o `>=22.12.0` (requerido por Vite 7).

---

## 📁 Estructura del proyecto

```
mi-portfolio/
├── public/            # Archivos estáticos (.nojekyll, favicon, etc.)
├── src/               # Código fuente de React
│   ├── assets/        # Imágenes y recursos
│   ├── components/    # Componentes reutilizables
│   ├── App.jsx        # Componente principal
│   └── main.jsx       # Punto de entrada
├── index.html
├── vite.config.js     # Configuración de Vite (base: /mi-portfolio/)
└── package.json
```

---

## 📬 Contacto

- **GitHub:** [@JulioSosaAng](https://github.com/JulioSosaAng)
- **LinkedIn:** https://www.linkedin.com/in/jsangeles/
- **Email:** julio.sosa.angeles@outlook.com.ar

---

<p align="center">
  <sub>Portfolio desarrollado con React + Vite · Desplegado en GitHub Pages</sub>
</p>
