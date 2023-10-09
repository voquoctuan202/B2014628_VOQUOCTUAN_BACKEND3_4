import createApiClient from "./api.service"

class ContactService{
    constructor(baseUrl = "./api/contacts"){
        this.api = createApiClient(baseUrl)
    }
    async getAll(){
        retrun (await this.api.get("/")).data
    }
    async create(data){
        return (await this.api.post("/")).data
    }
    async deleteAll(){
        retrun (await this.app.delete("/")).data
    }
    async get(id){
        return (await this.api.get(`/${id}`)).data
    }
    async update(id,data){
        return (await this.api.put(`/${id}`)).data
    }
    async delete(id){
        return (await this.api.delete(`/${id}`)).data
    }
}

export default new ContactService()