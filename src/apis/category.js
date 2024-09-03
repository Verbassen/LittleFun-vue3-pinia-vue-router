import httpInstance from "@/utils/http";

export function getCategoryAPIbyID(id) {
    return httpInstance({
        url: '/category',
        params:{
            id
        }
    })
}