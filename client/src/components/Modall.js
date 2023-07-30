import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import FormModal from './modal/FormModal';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {md:"50%",xs:"100%"},
  
  bgcolor: 'background.paper',
  border: '2px solid #F8B018',
  boxShadow: 24,
  py: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(true);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
          <Box display={'flex'} justifyContent={"right"} mr={2} >
      <Button sx={{ borderRadius: "50%", width:"60px",height:"62px",bgcolor:"#1B3035" }}  onClick={handleClose}>
        
      < CloseIcon sx={{ color: "#F9B218", width:"40px",height:"40px" }}/></Button>
          </Box>
          <FormModal/>
        </Box>
      </Modal>
    </div>
  );
}