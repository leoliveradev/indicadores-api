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
| GET | `/api/v1/comunicaciones-moviles/accesos` | `anio`, `trimestre` |
| GET | `/api/v1/comunicaciones-moviles/ingresos` | `anio`, `trimestre` |
| GET | `/api/v1/comunicaciones-moviles/llamadas` | `anio`, `trimestre` |
| GET | `/api/v1/comunicaciones-moviles/minutos` | `anio`, `trimestre` |
| GET | `/api/v1/comunicaciones-moviles/penetracion` | `anio`, `trimestre` |
| GET | `/api/v1/comunicaciones-moviles/sms` | `anio`, `trimestre` |

### Portabilidad
| Método | Ruta | Query params |
|--------|------|-------------|
| GET | `/api/v1/portabilidad/moviles` | `anio`, `mes` |

### Internet
| Método | Ruta | Query params |
|--------|------|-------------|
| GET | `/api/v1/internet/accesos` | `anio`, `trimestre` |
| GET | `/api/v1/internet/accesos/provincias` | `anio`, `trimestre`, `provincia` |
| GET | `/api/v1/internet/penetracion` | `anio`, `trimestre` |
| GET | `/api/v1/internet/penetracion/provincias` | `anio`, `trimestre`, `provincia` |
| GET | `/api/v1/internet/tecnologias` | `anio`, `trimestre` |
| GET | `/api/v1/internet/tecnologias/provincias` | `anio`, `trimestre`, `provincia` |
| GET | `/api/v1/internet/tecnologias/localidades` | `provincia`, `localidad`, `tecnologia` |
| GET | `/api/v1/internet/velocidad/rangos` | `anio`, `trimestre` |
| GET | `/api/v1/internet/velocidad/rangos/provincias` | `anio`, `trimestre`, `provincia` |
| GET | `/api/v1/internet/velocidad/media` | `anio`, `trimestre` |
| GET | `/api/v1/internet/velocidad/media/provincias` | `anio`, `trimestre`, `provincia` |
| GET | `/api/v1/internet/velocidad/provincias` | `anio`, `trimestre`, `provincia` |
| GET | `/api/v1/internet/velocidad/localidades` | `provincia`, `localidad` |
| GET | `/api/v1/internet/ingresos` | `anio`, `trimestre` |

### Telefonía Fija
| Método | Ruta | Query params |
|--------|------|-------------|
| GET | `/api/v1/telefonia-fija/accesos` | `anio`, `trimestre` |
| GET | `/api/v1/telefonia-fija/accesos/provincias` | `anio`, `trimestre`, `provincia` |
| GET | `/api/v1/telefonia-fija/ingresos` | `anio`, `trimestre` |
| GET | `/api/v1/telefonia-fija/penetracion` | `anio`, `trimestre` |
| GET | `/api/v1/telefonia-fija/penetracion/provincias` | `anio`, `trimestre`, `provincia` |


### TV
| Método | Ruta | Query params |
|--------|------|-------------|
| GET | `/api/v1/tv/accesos` | `anio`, `trimestre` |
| GET | `/api/v1/tv/accesos/provincias` | `anio`, `trimestre`, `provincia` |
| GET | `/api/v1/tv/ingresos` | `anio`, `trimestre` |
| GET | `/api/v1/tv/penetracion` | `anio`, `trimestre` |
| GET | `/api/v1/tv/penetracion/provincias` | `anio`, `trimestre`, `provincia` |

### Mercado Postal
| Método | Ruta | Query params |
|--------|------|-------------|
| GET | `/api/v1/mercado-postal/facturacion` | `anio`, `mes` |
| GET | `/api/v1/mercado-postal/produccion` | `anio`, `mes` |
| GET | `/api/v1/mercado-postal/personal-ocupado` | `anio`, `trimestre` |
| GET | `/api/v1/mercado-postal/facturacion-produccion/provincias` | `anio`, `trimestre`, `provincia` |

## Instalación local

```bash
git clone https://github.com/leoliveradev/indicadores-api
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
