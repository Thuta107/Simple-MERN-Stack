import { useState, useRef } from 'react'
import { Card, Typography, TextField, Button } from '@mui/material'
import './routes.css'

const Item = props => {

    const [title, setTitle] = useState(props.data.title)
    const [desc, setDesc] = useState(props.data.description)
    const [update, setUpdate] = useState(false);

    const handleUpdate = e => {
        if(update) {
            if(title == '') { 
                window.alert('Title is empty')
                return
            }  
            if(desc == '') {
                window.alert('Description is empty')
                return
            }
            props.updateItem({
                id: props.data.id,
                data: {
                    title: title,
                    description: desc
                }
            })
        }
        setUpdate(!update)
    }

    const handleDelete = e => {
        props.deleteItem({
            id: props.data.id,
        })
    }

    const handleTitle = e => {
        setTitle(e.target.value)
    }

    const handleDesc = e => {
        setDesc(e.target.value)
    }

    return(
        <Card raised sx={{margin: '10px', padding: 2, width: 400}}>
            <Typography variant='h6' sx={{margin: 1, marginLeft: 0}}> Title </Typography>
            <TextField multiline fullWidth value={title} onChange={handleTitle} disabled={!update}/>
            <Typography variant='h6' sx={{margin: 1, marginLeft: 0}}> Description </Typography>
            <TextField multiline fullWidth value={desc} onChange={handleDesc} disabled={!update}/>
            <Button variant='contained' sx={{marginTop: 2, marginBottom: 2}} onClick={handleUpdate}> 
                {update ? 'Save' : 'Update'} 
            </Button>
            <Button variant='contained' sx={{margin: 2, marginLeft: 1}} color="error" onClick={handleDelete}> Delete </Button>
        </Card>
    );
}

export default Item;