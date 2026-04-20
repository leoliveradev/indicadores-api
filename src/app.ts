import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import swaggerUi from 'swagger-ui-express'
import { swaggerSpec } from './config/swagger.js'

import { geoRouter } from './routes/geo.routes.js'
import { telefoniaRouter } from './routes/telefonia.routes.js'
import { televisionRouter } from './routes/tv.routes.js'

const app = express()
const PORT = process.env.PORT ?? 3000

app.use(cors())
app.use(express.json())

// Documentación Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

// Health check
app.get('/', (_req, res) => {
  res.json({
    name: 'ENACOM INDICADORES API',
    version: '1.0.0',
    docs: '/api-docs',
    endpoints: {
      geo: '/api/v1/geo',
      internet: '/api/v1/internet',
      comunicaciones_moviles: '/api/v1/comunicaciones-moviles',
      telefonia_fija: '/api/v1/telefonia-fija',
      television: '/api/v1/television',
      portabilidad: '/api/v1/portabilidad',
      mercado_postal: '/api/v1/mercado-postal',
    }
  })
})

app.use((req, _res, next) => {
  console.log(`Request URL: ${req.url}`);
  console.log(`Request Method: ${req.method}`);
  next();
});

// Rutas
app.use('/api/v1/geo',      geoRouter)
app.use('/api/v1/telefonia-fija',      telefoniaRouter)
app.use('/api/v1/television',      televisionRouter)


app.listen(PORT, () => {
  console.log(`🚀 ENACOM INDICADORES API running on http://localhost:${PORT}`)
  console.log(`📄 Documentation on http://localhost:${PORT}/api-docs`)
})

