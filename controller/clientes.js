import ApiClientes from '../api/clientes.js'

class ControladorClientes {

    constructor () {
        this.apiClientes = new ApiClientes()
    }

    postClientes = async (req, res) => {
        const cliente = req.body
        res.json(await this.apiClientes.guardarCliente(cliente))
    }
    
    getClientes = async (req, res) => {
        const { id } = req.params
        res.json(await this.apiClientes.obtenerClientes(id))
    }
    
    putClientes = async (req, res) => {
        const { id } = req.params
        const cliente = req.body
    
        res.json(await this.apiClientes.actualizarCliente(cliente, id))
    }
    
    deleteClientes = async (req, res) => {
        const { id } = req.params
    
        res.json(await this.apiClientes.eliminarCliente(id))
    }

}

export default ControladorClientes
