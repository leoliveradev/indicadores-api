import swaggerJsdoc from 'swagger-jsdoc'

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'ENACOM INDICADORES API',
      version: '1.0.0',
      description: 'API pública con indicadores de telecomunicaciones de Argentina. Datos provistos por ENACOM.',
    },
    servers: [
      { url: 'http://localhost:3000/api/v1', description: 'Local' },
      { url: 'https://enacom-api.onrender.com/api/v1', description: 'Producción' }
    ],
    tags: [
      { name: 'Geo', description: 'Provincias, partidos y localidades' },
    ]
  },
  apis: ['./src/routes/*.ts']
}

export const swaggerSpec = swaggerJsdoc(options)
