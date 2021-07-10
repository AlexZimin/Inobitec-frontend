import api from "./api";

const nodeService = {
    get(nodeId){
        return api().get(`node/${nodeId}`)
    },
    getAll(){
        return api().get('node')
    },
    create(node){
        return api().post('node',node)
    },
    change(node){
        return api().put('node',node)
    },
    remove(nodeId){
        return api().delete(`node/${nodeId}`)
    }
}

export default nodeService