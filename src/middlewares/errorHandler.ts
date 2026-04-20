import type { Request, Response, NextFunction } from 'express'

interface HttpError extends Error {
  status?: number
}

export const errorHandler = (
  err: HttpError,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
): void => {
  console.error(err.stack)
  res.status(err.status ?? 500).json({
    error: { message: err.message ?? 'Error interno del servidor', status: err.status ?? 500, path: req.originalUrl }
  })
}

export const notFound = (req: Request, res: Response): void => {
  res.status(404).json({
    error: { message: `Ruta no encontrada: ${req.originalUrl}`, status: 404 }
  })
}
