import React, { useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { Box, Typography } from '@mui/material'
import { addPost } from './services/post'

const COLORS = [
  {
    value: '#00f',
    label: 'Blue',
  },
  {
    value: '#ff0',
    label: 'Yellow',
  },
  {
    value: '#f00',
    label: 'Red',
  },
]

export default function CreatePostDialog({
  isDialogOpened,
  handleCloseDialog,
  setPosts,
}) {
  const [fullWidth] = useState(true)
  const [maxWidth] = useState('sm')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [colorCode, setColorCode] = useState('#000')
  const [titleError, setTitleError] = useState(false)
  const [descriptionError, setDescriptionError] = useState(false)
  const [colorCodeError, setColorCodeError] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    setTitleError(false)

    if (title === '') {
      setTitleError(true)
    }
    if (description === '') {
      setDescriptionError(true)
    }
    if (colorCode === '') {
      setColorCodeError(true)
    }
    if (title && description && colorCode) {
      const data = {
        title,
        content: description,
        title_color: colorCode,
      }

      try {
        await addPost(data)
        data.comments = []
        setPosts(prevState => [...prevState, data])
        setTitle('')
        setDescription('')
        setColorCode('')
      } catch (error) {
        console.error(error)
      }

      handleCloseDialog()
      // setCircleData(prevState => [...prevState, data])
      // setFollow(prevState => [...prevState, data])
    }
  }

  return (
    <React.Fragment>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={isDialogOpened}
        onClose={handleCloseDialog}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle>
          <Typography
            sx={{
              textAlign: 'center',
            }}
            variant="h5"
          >
            Create Post
          </Typography>
        </DialogTitle>
        <DialogContent>
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField
              id="outlined-basic"
              placeholder="Title"
              variant="outlined"
              fullWidth
              helperText={
                titleError ? 'Title must be less than 100 characters' : ''
              }
              margin="normal"
              value={title}
              onChange={e => setTitle(e.target.value)}
              error={titleError}
              // sx={{
              //   color: colorCode,
              // }}
              required
            />
            <TextField
              id="outlined-basic"
              placeholder="Description"
              variant="outlined"
              fullWidth
              margin="normal"
              value={description}
              onChange={e => setDescription(e.target.value)}
              required
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                height: 50,
              }}
            >
              <Typography
                color={'text.secondary'}
                sx={{
                  ml: 1.5,
                }}
              >
                Color Code
              </Typography>
              <Box
                sx={{
                  height: '100%',
                }}
              >
                {COLORS.map(option => (
                  <Button
                    sx={{
                      backgroundColor: option.value,
                      width: '10%',
                      height: '100%',
                      margin: '0px 5px',
                    }}
                    key={option.value}
                    onClick={() => setColorCode(option.value)}
                  />
                ))}
              </Box>
            </Box>
          </form>
        </DialogContent>
        <DialogActions>
          <Button variant="text" onClick={handleCloseDialog}>
            Cancel
          </Button>
          <Button
            sx={{
              backgroundColor: '#000',
            }}
            autoFocus
            onClick={handleSubmit}
            variant="contained"
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}
