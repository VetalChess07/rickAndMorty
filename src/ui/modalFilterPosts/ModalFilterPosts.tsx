import {useState} from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Modal from '@mui/material/Modal';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { MouseEvent } from 'react';
import { ReactNode } from 'react';
import filterIcon from "/public/images/filter_list.svg"
import close from "/public/images/close.svg"



const styleModal = {
   position: 'absolute' as 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   bgcolor: 'background.paper',
   boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.14)",
   p: 4,
 };

 const styleTitle = {
   fontWeight: 500,
   fontSize: "20px",
   fontFamily:"Roboto-Medium"
 }
 

const ModalFilterPosts = ({children}:{children:ReactNode}) => {
   const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 
   return (
     <div>
      
      <Button  startIcon={<img src={filterIcon} alt="Filter Icon" />}
        style={{background:"rgba(227, 242, 253, 1)", 
        padding:"10px 16px", display:"flex",
       
         }}
        onClick={handleOpen}>
         Open modal
      </Button>
      <Modal
         open={open}
         onClose={handleClose}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description" 
      >
         <Box sx={styleModal}>
         <Stack
         style={{
            marginBottom:"16px"
         }}
         direction="row"
            justifyContent="space-between"
            spacing="16px">
            <Typography sx={styleTitle}  >
               Filters
            </Typography>
            <Button style={{  justifyContent:"flex-end "}} onClick={handleClose}>
               <img src={close} alt="Filter Icon" />
            </Button>
         </Stack>
         
          <Stack
            direction="column"
            justifyContent="center"
            spacing="16px">
            {children}
         </Stack>
            
         </Box>
      </Modal>
 

     </div>
   );
}

export default ModalFilterPosts
