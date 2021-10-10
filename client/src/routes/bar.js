import { useState } from 'react'
import { Button, Divider, TextField } from '@mui/material'


const Bar = props => {

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    const handleClick = e => {
        if(title == '') { 
            window.alert('Title is empty')
            return
        }  
        if(desc == '') {
            window.alert('Description is empty')
            return
        }
        props.addItem({
            title: title,
            description: desc,
            role: 'customer'
        })
        setTitle('')
        setDesc('')
    }

    const handleTitle = e => {
        setTitle(e.target.value)
    }

    const handleDesc = e => {
        setDesc(e.target.value)
    }

    return(
        <>
            <Divider />
            <div className='bar-container'> 
                <div>
                    <TextField value={title} label="Title" multiline fullWidth onChange={handleTitle}/>
                </div>
                <div>
                    <TextField value={desc} label="Description" multiline fullWidth onChange={handleDesc}/>
                </div>
                <div>
                    <Button variant='contained' onClick={handleClick}> Add Card </Button>
                </div>
            </div>
            <Divider />
        </>
    );
}

export default Bar;