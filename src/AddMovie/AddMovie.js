import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import {useForm}  from "react-hook-form";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import './AddMovie.css';



export default function AddMovie({movies,handleAdd}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
   const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    let newMovie = {
      ...data,
      id: Math.random()
    };
    handleAdd(data);
console.log(data);

  };
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      {/* <Button onClick={handleOpen}> <AddCircleIcon/>ADD MOVIE</Button> */}
      <div className="add">
      <Button onClick={handleOpen} variant="outlined" startIcon={<AddCircleIcon/>} >
      ADD MOVIE
      </Button>
      </div>
   
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <form  onSubmit={handleSubmit(onSubmit)} className='addForm'>
            <TextField
              label="Movie Title"
              id="standard-basic"
               variant="standard"
              {...register("title")}
             
            />

             <TextField
              label="Movie Description"
              id="standard-basic"
              variant="standard"
              {...register("description")}
             
            />
           <TextField
              label="Movie Image"
              id="standard-basic"
              variant="standard"
            
              {...register("posterURL")}
             
            />
         <TextField
              label="Movie Categorie"
              id="standard-basic"
              variant="standard"
              {...register("categorie")}
            
            />
        <TextField
              label="Movie Date "
              id="standard-basic"
              variant="standard"
              {...register("date")}
            
            />
              <TextField
                id="outlined-number"
                label="Number"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              {...register("rating")}
              style={{marginTop:20}}
         
            />
            <Button variant="primary" type="submit">
    Submit
  </Button>
         </form>
        </Box>
      </Modal>
    </div>
  );
}
