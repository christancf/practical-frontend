import { Box, Card, CardActionArea, Typography } from '@mui/material'
import React, { useState } from 'react'
import truncate from './utils/truncateText'
import ViewPostDialog from './viewPostDialog'

export const TEST_STYLE = {
  outlineWidth: '1px',
  outlineColor: '#000',
  outlineStyle: 'solid',
}

export const PLACEHOLDER = {
  icon: '',
  cover:
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp1920735.jpg&f=1&nofb=1',
}

const Post = ({ data }) => {
  const [isDialogOpened, setIsDialogOpened] = useState(false)
  const [handleCloseDialog, setHandleCloseDialog] = useState(false)

  // iconImage = iconImage || PLACEHOLDER.icon
  // coverImage = coverImage || PLACEHOLDER.cover
  return (
    <>
      <Card
        sx={{
          width: '100%',
          height: 250,
          mt: 2,
        }}
        onClick={() => setIsDialogOpened(true)}
      >
        <CardActionArea>
          {/* <CardMedia
            component="img"
            height="140"
            image={coverImage}
            alt="cover image"
            sx={{
              objectFit: 'cover',
              objectPosition: 'center',
              height: '100px',
            }}
          /> */}
          {/* <IconButton
            sx={[
              {
                p: 0,
                transform: 'translate(100%, -50%)',
              },
            ]}
            disableRipple
          >
            <Avatar
              alt={name}
              src={iconImage}
              sx={[
                {
                  width: 70,
                  height: 70,
                },
              ]}
            />
          </IconButton> */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              flexDirection: 'column',
              transform: 'translate(0, 20%)',
            }}
          >
            <Typography gutterBottom variant="h6">
              {data.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                ml: 2,
              }}
              gutterBottom
              width="100%"
            >
              {truncate(data.content)}
            </Typography>
          </Box>
        </CardActionArea>
        <ViewPostDialog
          isDialogOpened={isDialogOpened}
          handleCloseDialog={setHandleCloseDialog}
          data={data}
        />
      </Card>
    </>
  )
}

export default Post
