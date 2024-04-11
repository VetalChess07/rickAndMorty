import { useState } from 'react'
import { fetchPostsArg } from './type'
import axios from 'axios'
import { AxiosResponse } from 'axios'

const fetchPosts = async ({url, page} :fetchPostsArg) => {
   try {
      const {data} = await axios.get(url)
      return data
  } catch (error) {
      // Handle error here
      console.error("Error fetching posts:", error)
      return null
  }
}

export default fetchPosts
