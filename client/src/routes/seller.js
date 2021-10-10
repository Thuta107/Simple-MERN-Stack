import { useEffect, useState } from "react"
import axios from "axios";
import Item from './item';
import Bar from "./bar";

const Seller = props => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('/seller').then(response => {
            console.log('GET', response)
            if(response.request.status == 200) {
                setItems([...response.data])
            } else if(response.request.status == 500) {
                console.log(response.data.msg);
                setItems([...items])
            }
        })
        .catch(error => console.log('Error Getting Seller', error))
    }, []);


    const addItem = param => {
        console.log(param)
        axios.post('/seller', param).then(response => {
            console.log('POST', response)
            if(response.request.status == 200) {
                const resArray = [response.data]
                setItems([...items, ...resArray])
            } else {
                setItems([...items])
            }
        })
        .catch(error => console.log('Error Getting Seller', error))
    }

    const updateItem = param => {
        axios.put('/seller', param).then(response => {
            console.log('PUT', response)
            if(response.request.status == 200) {
                for(let index in items) {
                    if(items[index].id === response.data.id) {
                        items[index] = response.data
                        break;
                    }
                }
                setItems([...items])
            } else {
                setItems([...items])
            }
        })
        .catch(error => console.log('Error Getting Seller', error))
    }

    const deleteItem = param => {
        axios.delete('/seller', {data: param}).then(response => {
            console.log('DELETE', response)
            if(response.request.status == 200) {
                const resArray = items.filter(item => item.id != response.data.id)
                setItems([...resArray])
            } else {
                setItems(items)
            }
        })
        .catch(error => console.log('Error Getting Seller', error))
    }

    return(
        <>
            <Bar addItem={addItem}/>
            <div className='route-container'>
                {items.length > 0 ? 
                    items.map(item => <div key={item.id}> <Item data={item} updateItem={updateItem} deleteItem={deleteItem}/> </div>) 
                    : <></>}
            </div>
        </>
    );
}

export default Seller