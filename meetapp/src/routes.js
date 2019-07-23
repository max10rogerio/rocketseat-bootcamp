import { Router } from 'express'

// Controllers
import UserController from './app/controllers/UserController'
import SessionController from './app/controllers/SessionController'

// Middlewares
import authMiddlewares from './app/middlewares/auth'
import * as userMiddlewares from './app/middlewares/validators/user'

const routes = new Router()

// Public Routes
routes.post('/users', userMiddlewares.store, UserController.store)
routes.post('/sessions', SessionController.store)

// Protected Routes
routes.use(authMiddlewares)
routes.put('/users', UserController.update)

export default routes
