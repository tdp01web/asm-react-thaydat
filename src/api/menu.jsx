import instance from "./config";
export const listMenu = async () =>{
    try {
        const {data} = await instance.get('/menus')
        return data
    } catch (error) {
        return error
    }
}