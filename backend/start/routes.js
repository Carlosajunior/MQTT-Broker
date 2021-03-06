'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.post('/cadastrarTopico', 'TopicoController.cadastrarTopico')

Route.post('/cadastrarUsuario', 'UsuarioController.cadastrarUsuario')

Route.patch('/designarTopico/:id', 'UsuarioController.designarTopico')

Route.post('/login', 'AutenticacaoController.autenticar')

Route.get('/topicos', 'TopicoController.exibirTopicos')

Route.post('/cadastrarLog', 'LogController.logDeDeteccao')

Route.post('/ArquivoDeteccao/:id', 'LogController.deteccao')

Route.post('/cadastrarHorario', 'HorarioController.cadastrarHorario')

<<<<<<< HEAD
Route.post('/horario/:id','HorarioController.acessarHorario')
=======
Route.post('/Horario/:id', 'HorarioController.horario')
>>>>>>> 5ee8070b758df0b0ce01124dc83b544ae51829c6
