import { useEffect, useState } from "react"
import axios from "axios";
import Item from './item';
import Bar from "./bar";

const Customer = props => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = () => axios.get('/customer').then(response => {
            console.log('GET', response)
            if(response.request.status == 200) {
                setItems([...response.data])
            } else if(response.request.status == 500) {
                console.log(response.data.msg);
                setItems([...items])
            }
        })
        .catch(error => console.log('Error Getting Customer', error));
        fetchData();
    }, []);


    const addItem = param => {
        console.log(param)
        axios.post('/customer', param).then(response => {
            console.log('POST', response)
            if(response.request.status == 200) {
                const resArray = [response.data]
                setItems([...items, ...resArray])
            } else {
                setItems([...items])
            }
        })
        .catch(error => console.log('Error Getting Customer', error))
    }

    const updateItem = param => {
        console.log('Client PUT', param);
        axios.put('/customer', param).then(response => {
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
        .catch(error => console.log('Error Getting Customer', error))
    }

    const deleteItem = param => {
        console.log('Client Delete', param);
        axios.delete('/customer', {data: param}).then(response => {
            console.log('DELETE', response)
            if(response.request.status == 200) {
                console.log('Origianl', items)
                console.log(response)
                const resArray = items.filter(item => item.id != response.data.id)
                console.log('Deleted', resArray)
                setItems([...resArray])
            } else {
                setItems(items)
            }
        })
        .catch(error => console.log('Error Getting Customer', error))
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

export default Customer