import express from 'express'
import ControladorClientes from '../controller/clientes.js'

export class RouterClientes {
    constructor() {
        this.router = express.Router()
        this.controladorClientes = new ControladorClientes()
    }

    start () {
        /*GET cliente/s */
        this.router.get('/:id?', this.controladorClientes.getClientes)

        /* POST clientes */
        this.router.post('/', this.controladorClientes.postClientes)

        /* PUT clientes */
        this.router.put('/:id', this.controladorClientes.putClientes)

        /* DELETE clientes */
        this.router.delete('/:id', this.controladorClientes.deleteClientes)

        return this.router
    }
}
