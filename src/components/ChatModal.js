import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { RiWhatsappFill } from 'react-icons/ri'

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { md: "50%", xs: "100%" },

  bgcolor: "background.paper",
  border: "2px solid #F8B018",
  boxShadow: 24,
  py: 4,
};

export default function ChatModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
        <Button
              sx={{
                borderRadius: "50%",
                // width: "10px",
                // height: "10px",
                // bgcolor: "green",
              }}
              onClick={handleOpen}
            >
              <RiWhatsappFill style={{fontSize:"60px",color:"green"}}/>
              {/* <iframe width={"80px"} src="https://embed.lottiefiles.com/animation/94110"></iframe> */}
            </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box display={"flex"} justifyContent={"right"} mr={2}>
            <Button
              sx={{
                borderRadius: "50%",
                width: "60px",
                height: "60px",
                bgcolor: "green",
              }}
              onClick={handleClose}
            >
              <CloseIcon
                sx={{ color: "#F9B218", width: "40px", height: "40px" }}
              />
            </Button>
          </Box>
          <Box sx={{textAlign:"center"}}>

          <h1>Chat With Customer</h1>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
