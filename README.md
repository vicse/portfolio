# Cyber-Minimalist Portfolio – VICSE JEFER ORE SOTO

🔗 **Sitio Web Publicado:** [vicse-porfolio.netlify.app](https://vicse-porfolio.netlify.app/)

Este es un portafolio web premium y de alto rendimiento diseñado con una estética **Cyber-Minimalist**. Está construido utilizando **Astro** y **Tailwind CSS**, optimizado para desarrolladores backend de alta gama.

Apunta a un diseño inspirado en IDEs, terminales de código y el contraste de colores oscuros con luces cian y moradas (Midnight Navy & Neon glow).

## 🚀 Tecnologías

* **Core:** [Astro v4](https://astro.build/) - Framework web ultra-rápido enfocado en rendimiento.
* **Estilos:** [Tailwind CSS v3](https://tailwindcss.com/) - Framework de utilidades CSS para diseño responsive y ágil.
* **Tipografías:** Geist, Inter y JetBrains Mono (cargadas desde Google Fonts).
* **Iconos:** Material Symbols Outlined.
* **Optimización de imágenes:** Componente nativo `astro:assets` para procesado automático de imágenes en alta resolución.

## 📂 Estructura de Componentes

La web ha sido modularizada para facilitar el mantenimiento y la reutilización del código:

* **[`Layout.astro`](src/layouts/Layout.astro):** Layout HTML principal que inyecta fuentes, metadatos y la hoja de estilos global.
* **[`global.css`](src/styles/global.css):** Declaraciones de Tailwind CSS y clases de utilidad complejas (como efectos de cristal y resplandor de texto).
* **[`HeaderCV.astro`](src/components/HeaderCV.astro):** Navbar flotante superior y sección de héroe con badges de tecnologías (`AWS`, `NestJS`, `Java`, `Spring`, `SQL`, `NoSQL`, etc.) animados.
* **[`Skills.astro`](src/components/Skills.astro):** Cuadrícula con las tecnologías principales del perfil utilizando tarjetas con efecto *glassmorphism*.
* **[`ExperienceItem.astro`](src/components/ExperienceItem.astro):** Componente dinámico y reutilizable para construir la línea de tiempo profesional de forma alternada.
* **[`Workspace.astro`](src/components/Workspace.astro):** Galería responsiva para mostrar entornos de trabajo y pasatiempos.
* **[`Contact.astro`](src/components/Contact.astro):** Sección de llamado a la acción para proyectos y mensajería directa.
* **[`Footer.astro`](src/components/Footer.astro):** Pie de página con copyright dinámico y enlaces a redes sociales.

## 🛠️ Ejecución Local

Para levantar el proyecto en tu entorno local, asegúrate de tener instalado [Node.js](https://nodejs.org/) y sigue estos pasos:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/vicse/portfolio.git
   cd portfolio
   ```

2. **Instalar las dependencias:**
   ```bash
   pnpm install
   # o bien
   npm install
   ```

3. **Ejecutar el servidor de desarrollo:**
   ```bash
   pnpm run dev
   # o bien
   npm run dev
   ```

4. **Abrir en tu navegador:**
   Navega a `http://localhost:4321` (o el puerto que te indique tu terminal).

## 📦 Producción y Despliegue

Para construir el sitio optimizado para producción:

```bash
pnpm run build
```

La salida generada se ubicará en el directorio `dist/`, lista para ser desplegada en plataformas como Vercel, Netlify, Cloudflare Pages o AWS Amplify.
