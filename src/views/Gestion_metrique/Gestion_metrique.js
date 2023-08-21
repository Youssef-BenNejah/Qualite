import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal'; import { cilBell, cilPlaylistAdd, cilSettings, cilTrash, cilX } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import React from 'react'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};
export default function Gestion_metrique() {
  const [open, setOpen] = React.useState(false);
  const [open_mod, setOpen_mod] = React.useState(false);
  const [open_del, setOpen_del] = React.useState(false);


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpen_mod = () => setOpen_mod(true);
  const handleClose_mod = () => setOpen_mod(false);

  const handleOpen_del = () => setOpen_del(true);
  const handleClose_del = () => setOpen_del(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <CIcon icon={cilX} size='lg' style={{ color: '#000',position:'absolute',top:'0',right:'0' }} onClick={handleClose} /> 
          <h1>Ajouter</h1>
        </Box>
      </Modal>

      <Modal
        open={open_mod}
        onClose={handleClose_mod}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <CIcon icon={cilX} size='lg' style={{ color: '#000',position:'absolute',top:'0',right:'0' }} onClick={handleClose_mod} /> 
          <h1>Modifier</h1>
        </Box>
      </Modal>

      <Modal
        open={open_del}
        onClose={handleClose_del}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <CIcon icon={cilX} size='lg' style={{ color: '#000',position:'absolute',top:'0',right:'0' }} onClick={handleClose_del} /> 
          <h1>Delete</h1>
        </Box>
      </Modal>


      <div className="mt-5 "><button className="btn btn-primary" style={{ margin: '20px' }} type="button" onClick={handleOpen}><CIcon icon={cilPlaylistAdd} size='lg' style={{ color: '#fff' }} /> Ajouter métrique</button></div>

      <table className="table table-striped ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Métrique</th>
            <th scope="col">Seuil</th>
            <th scope="col"> </th>
            <th scope="col"></th>


          </tr>
        </thead>
        <tbody >
          <tr >
            <th scope="row" >1</th>
            <td></td>
            <td></td>
            <td><CIcon icon={cilSettings} size='lg' style={{ color: '#00b4d8' }} onClick={handleOpen_mod} /></td>
            <td><CIcon icon={cilTrash} size='lg' style={{ color: '#03045e' }} onClick={handleOpen_del}  /></td>

          </tr>
          <tr>
            <th scope="row">2</th>
            <td></td>
            <td></td>
            <td><CIcon icon={cilSettings} size='lg' style={{ color: '#00b4d8'  }} onClick={handleOpen_mod} /></td>
            <td><CIcon icon={cilTrash} size='lg' style={{ color: '#03045e' }} onClick={handleOpen_del} /></td>

          </tr>
          <tr>
            <th scope="row">3</th>
            <td></td>
            <td></td>
            <td><CIcon icon={cilSettings} size='lg' style={{ color: '#00b4d8' }} onClick={handleOpen_mod} /></td>
            <td><CIcon icon={cilTrash} size='lg' style={{ color: '#03045e' }} onClick={handleOpen_del} /></td>

          </tr>
        </tbody>
      </table>
    </div>
  )
}
