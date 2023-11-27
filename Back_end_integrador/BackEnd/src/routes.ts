import { Router } from 'express'

import { LoginController } from './Controller/Login/LoginController'
import { CriarusuariosController } from '../src/Controller/Usuarios/CriarUsuariosController'


const router = Router()



//Rotas de Logins
router.post('/LoginUsuarios',  new LoginController().handle)

//Estrutura de Usuários
router.post('/CriarUsuarios', new CriarusuariosController().handle)


export { router }