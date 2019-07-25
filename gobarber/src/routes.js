import { Router } from 'express'
import multer from 'multer'

import multerConfig from './config/multer'

// Middlewares
import authMiddlewares from './app/middlewares/auth'
import { checkIsProvider } from './app/middlewares/users'
import ValidateSchema, {
  userSchemas,
  sessionSchemas,
  appointmentSchemas,
} from './app/middlewares/validators'

// Controllers
import UserController from './app/controllers/UserController'
import SessionController from './app/controllers/SessionController'
import FileController from './app/controllers/FileController'
import ProviderController from './app/controllers/ProviderController'
import AppointmentController from './app/controllers/AppointmentController'
import ScheduleController from './app/controllers/ScheduleController'
import NotificationController from './app/controllers/NotificationController'

const routes = new Router()
const upload = multer(multerConfig)

// Public Routes
routes.get('/', (req, res) => res.json({ message: 'Welcome to GoBarber' }))
routes.post('/users', ValidateSchema(userSchemas.store), UserController.store)
routes.post(
  '/sessions',
  ValidateSchema(sessionSchemas.store),
  SessionController.store
)

// Protected Routes
routes.use(authMiddlewares)
routes.put('/users', UserController.update)

routes.get('/providers', ProviderController.index)

routes.get('/appointments', AppointmentController.index)
routes.post(
  '/appointments',
  ValidateSchema(appointmentSchemas.store),
  AppointmentController.store
)

routes.get('/schedule', ScheduleController.index)

routes.get('/notifications', checkIsProvider, NotificationController.index)
routes.put('/notifications/:id', NotificationController.update)

routes.post('/files', upload.single('file'), FileController.store)

export default routes
