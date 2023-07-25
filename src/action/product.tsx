import { instance } from "../api/instance"

export const fetch = () => async (dispatch: any) => {
    const { data } = await instance.get('/products')
    console.log(data);
    dispatch({ type: 'fetch', payload: data });
}
export const add = (product: any) => async (dispatch: any) => {
    const { data } = await instance.post('/products', product)
    console.log(data);
    dispatch({ type: 'add', payload: data });

}
export const deletePro = (id: any) => async (dispatch: any) => {
    await instance.delete(`/products/${id}`)
    console.log(id);

    dispatch({ type: 'delete', payload: id })
}
export const update = (product: any) => async (dispatch: any) => {
    const { data } = await instance.put(`/products/${product.id}`, product)
    console.log(data);
    dispatch({ type: 'update', payload: data })
}
