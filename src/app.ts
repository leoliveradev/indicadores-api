import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import swaggerUi from 'swagger-ui-express'
import { swaggerSpec } from './config/swagger.js'

import { geoRouter } from './routes/geo.routes.js'

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
      comunicaciones_moviles: '/api/v1/comunicaciones_moviles',
      telefonia_fija: '/api/v1/telefonia_fija',
      television: '/api/v1/television',
      portabilidad: '/api/v1/portabilidad',
      mercado_postal: '/api/v1/mercado_postal',
    }
  })
})

// Rutas
app.use('/api/v1/geo',      geoRouter)
// app.use('/api/v1/internet',      internetRouter)
// app.use('/api/v1/comunicaciones_moviles',      comunicaciones_movilesRouter)
// app.use('/api/v1/telefonia_fija',      telefonia_fijaRouter)
// app.use('/api/v1/television',      televisionRouter)
// app.use('/api/v1/portabilidad',      portabilidadRouter)
// app.use('/api/v1/mercado_postal',      mercado_postalRouter)


app.listen(PORT, () => {
  console.log(`🚀 ENACOM INDICADORES API running on http://localhost:${PORT}`)
  console.log(`📄 Documentation on http://localhost:${PORT}/api-docs`)
})

