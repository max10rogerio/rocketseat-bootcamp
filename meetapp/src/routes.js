import { Router } from 'express'

// Controllers
import UserController from './app/controllers/UserController'
import SessionController from './app/controllers/SessionController'

// Middlewares
import authMiddlewares from './app/middlewares/auth'
import ValidateSchema, {
  userSchemas,
  sessionSchemas,
} from './app/middlewares/validators'

const routes = new Router()

// Public Routes
routes.post('/users', ValidateSchema(userSchemas.store), UserController.store)
routes.post(
  '/sessions',
  ValidateSchema(sessionSchemas.store),
  SessionController.store
)

// Protected Routes
routes.use(authMiddlewares)
routes.put('/users', UserController.update)

export default routes
