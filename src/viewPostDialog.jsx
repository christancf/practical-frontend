import React, { useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { Typography } from '@mui/material'

export default function ViewPostDialog({
  isDialogOpened,
  handleCloseDialog,
  data,
}) {
  const [fullWidth] = useState(true)
  const [maxWidth] = useState('sm')

  const handleClose = () => {
    handleCloseDialog(false)
  }

  async function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <React.Fragment>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={isDialogOpened}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle>
          <Typography variant="h5">{data.title}</Typography>
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            {data.content}
          </Typography>
          {data.comments.map(comment => (
            <Typography
              key={comment._id}
              variant="body1"
              color="text.secondary"
              gutterBottom
            >
              {comment.content}
            </Typography>
          ))}
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField
              id="outlined-basic"
              label="add comment"
              variant="outlined"
              fullWidth
              // helperText={}
              margin="normal"
              // value={}
              // onChange={e => setCircleName(e.target.value)}
              // error={circleNameError || circleNameExistsError}
              required
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button variant="text" onClick={handleClose}>
            Cancel
          </Button>
          <Button autoFocus onClick={handleSubmit} variant="contained">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}
