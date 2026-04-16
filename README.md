# ENACOM API 🇦🇷

API pública con indicadores de telecomunicaciones de Argentina, basada en datos abiertos de [ENACOM](https://datosabiertos.enacom.gob.ar/).

## Stack

- **Runtime**: Node.js
- **Lenguaje**: TypeScript
- **Framework**: Express.js
- **Base de datos**: Supabase (PostgreSQL)
- **Documentación**: Swagger UI — `/api-docs`
- **Deploy**: Render.com

## Endpoints

### Geografía
| Método | Ruta | Query params |
|--------|------|-------------|
| GET | `/api/v1/geo/provincias` | — |
| GET | `/api/v1/geo/partidos` | `provincia_id` |
| GET | `/api/v1/geo/localidades` | `partido_id` |

### Comunicaciones Móviles
| Método | Ruta | Query params |
|--------|------|-------------|


### Internet
| Método | Ruta | Query params |
|--------|------|-------------|


### Telefonía Fija
| Método | Ruta | Query params |
|--------|------|-------------|


### TV
| Método | Ruta | Query params |
|--------|------|-------------|


### Mercado Postal
| Método | Ruta | Query params |
|--------|------|-------------|


## Instalación local

```bash
git clone https://github.com/tu-usuario/indicadores-api
cd indicadores-api
npm install
cp .env.example .env   
npm run dev
```

## Regenerar tipos de Supabase

Cada vez que agregues tablas nuevas en Supabase:

```bash
npx supabase gen types typescript --project-id TU_PROJECT_ID > src/types/database.ts
```

## Scripts

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Desarrollo con hot reload |
| `npm run build` | Compilar a JavaScript |
| `npm start` | Producción (requiere build previo) |


## Fuente de Datos y Licencia

Los datos utilizados en esta API provienen del **[Portal de Datos Abiertos de ENACOM](https://datosabiertos.enacom.gob.ar/)** (Ente Nacional de Comunicaciones).

*   **Atribución:** Fuente: ENACOM.
*   **Licencia de los datos:** El contenido se distribuye bajo la licencia [Creative Commons Atribución 4.0 Internacional (CC BY 4.0)](https://creativecommons.org).
*   **Términos de uso:** El uso de esta información se rige por los [términos y condiciones generales](https://enacom.gob.ar) de ENACOM.
