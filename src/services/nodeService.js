import api from "./api";

const nodeService = {
    get(nodeId){
        return api().get(`nodes/${nodeId}`)
    },
    getAll(){
        return api().get('nodes')
    },
   async getRoot(){
        return await api().get('nodes/root')
    },
    getChildren(nodeId){
        return api().get(`nodes/${nodeId}/children/`)
    },
    create(node){
        return api().post('nodes',node)
    },
    update(node){
        return api().put('nodes/',node)
    },
    remove(nodeId){
        return api().delete(`nodes/${nodeId}`)
    }
}

export default nodeService