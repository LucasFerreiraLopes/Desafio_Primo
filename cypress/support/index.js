import './commands'
import Rotas from '../support/routes' // importando as rotas


before(() => {
    Rotas.init() // inicializando o mapeamento das rotas
});