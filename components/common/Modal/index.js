/* import external modules */
import { useState } from 'react'
import { Fade, Modal, Backdrop, IconButton } from '@material-ui/core'

/* import internal modules */
import useStyles from './styles'

const ModalComponent = ({
  contentModal,
  isIconOpenButton,
  iconOpenButton,
  ariaLabelOpenButton,
  colorOpenButton,
}) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      {isIconOpenButton && (
        <IconButton
          aria-label={ariaLabelOpenButton}
          color={colorOpenButton}
          onClick={handleOpen}
        >
          {iconOpenButton}
        </IconButton>
      )}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            {contentModal}
            <button onClick={handleClose}> Close </button>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}

export default ModalComponent
