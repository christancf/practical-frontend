import { Box, Button, Divider, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CreatePostDialog from './createPostDialog'
import Post from './post'
import { getPosts } from './services/post'

const DATA = {
  title: 'Post Title',
  content: 'Post Content',
  comments: [
    {
      id: 1,
      content: 'Comment Content',
    },
    {
      id: 2,
      content: 'Comment Content 2',
    },
  ],
}
const Home = () => {
  const [posts, setPosts] = useState([DATA, DATA, DATA, DATA, DATA])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [isDialogOpened, setIsDialogOpened] = useState(false)

  // useEffect(() => {
  //   getPosts()
  //     .then(data => {
  //       setPosts(data)
  //       console.log(data)
  //       setLoading(false)
  //     })
  //     .catch(error => {
  //       setError(true)
  //       setLoading(false)
  //       setPosts([])
  //     })
  // }, [posts])

  if (loading)
    return (
      <Typography variant="h5" sx={{ textAlign: 'center', mt: 3 }}>
        Loading...
      </Typography>
    )
  else if (error)
    return (
      <Typography variant="h5" sx={{ textAlign: 'center', mt: 3 }}>
        Error
      </Typography>
    )
  else {
    return (
      <>
        {/* TopBar */}
        <Typography variant="h5" sx={{ textAlign: 'center', mt: 3 }}>
          Home
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            width: '33%',
            mx: 'auto',
          }}
        >
          {/* add post button */}
          <Button
            variant="contained"
            sx={{
              mb: 2,
              backgroundColor: '#000',
              fontWeight: 'bold',
            }}
            onClick={() =>
              setIsDialogOpened(prevIsDialogOpened => !prevIsDialogOpened)
            }
          >
            Add Post
          </Button>
          {/* Create Post Dialog */}
          <CreatePostDialog
            isDialogOpened={isDialogOpened}
            handleCloseDialog={() => setIsDialogOpened(false)}
            setPosts={setPosts}
          />
          {/* posts */}
          {/* <Box>
            {posts.map(post => (
              <Post key={post._id} data={post} />
            ))}
          </Box> */}
        </Box>
      </>
    )
  }
}

export default Home
