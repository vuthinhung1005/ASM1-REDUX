import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { add, deletePro, fetch, update } from '../../action/product';






const ListProduct = () => {
    const dispatch = useDispatch<any>()
    const { products } = useSelector((state: any) => state.products)
    const [data, setdata] = useState([])
    useEffect(() => {
        dispatch(fetch())
    }, [])
    return (
        <>
            <form onSubmit={dispatch(() => add({ name: data }))}>
                <input type="text" onChange={(e: any) => setdata(e.target.value)} />
                <button>add</button>
            </form>
            {products?.map((data: any) => {
                return <div key={data.id}>
                    <h1>{data.name}</h1>
                    <button onClick={() => dispatch(deletePro(data.id))}>xoa</button>
                    <button onClick={() => dispatch(update({ name: "vuthinhung", id: data.id }))}>sua</button>
                </div>
            })}
        </>
    )
}
export default ListProduct