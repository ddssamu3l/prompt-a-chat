'use client'
import {useState, useEffect} from 'react'
import PromptCard from './PromptCard'

const PromptCardList = ({data, handleTagClick}) => {
  return(
    <div className = "mt-16 prompt_layout flex-center">
      {data.map((post) => (
        <PromptCard 
          key = {post._id}
          post = {post}
          handleTagClick = {handleTagClick}
        />
      ))}
    </div>
  )
}

const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  const [posts, setPosts] = useState([]);

// -----------------SEARCH FUNCTIONALITY-----------------------------------------
  const filterPosts = (searchText) => {
    const regex = new RegExp(searchText, "i")// i stands for "case insensitive"
    return posts.filter(
      (item) => 
        // we will search for posts that match the searchText based on prompt, tag, title or creator
        regex.test(item.creator.username) ||
        regex.test(item.tag) || 
        regex.test(item.prompt) ||
        regex.test(item.title)
    )
  }

  // handles the search posts function. It's called when the user hits "enter" on the search bar.
  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    // set the user's inputs in the search bar as 'searchText'
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        // searchResult is a list of posts that have matching properties with e.target.value
        // we call filterPosts to "filter out" all of the posts that don't match the search parameters on the website and only show the ones that match the search parameters
        const searchResult = filterPosts(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    )
  }

  const handleTagClick = (tag) => {
    // when a tag is clicked, we will automatically enter that tag into the search bar.
    setSearchText(tag);
    // we call filterPosts to filter out posts that don't have the same tag. 
    const searchResult = filterPosts(tag);
    // after filtering, put the results into searchedResults so that they can be displayed in a PromptCardList
    setSearchedResults(searchResult);
  }

  // ---------------------------END OF SEARCH FUNCTIONALITY -----------------------------------

  const fetchPosts = async () => {
    const response = await fetch('/api/prompt');
    const data = await response.json();

    setPosts(data);
  }

  useEffect(() => {
    fetchPosts(); 
  }, []);

  return (
   <section className = "feed">
    <form className = "relative w-full flex-center">
      <input 
        type = "text" 
        placeholder = "search for a tag, a user, or a keyword (e.g PromptGeneration)"
        value = {searchText}
        onChange = {handleSearchChange}
        required
        className = "search_input peer"
      />
    </form>

    {/*// this is an if statement. searchText tracks whether the feed is supposed to show a list of posts are the results of a search, or just a regular feed showing all posts available on the website.
    // searchText is true if the search bar (or the input tag above) is submitted (the user pressed enter to activate a search) */}
    {searchText ? (
      // if searchText is true, then it means we are showing a list of posts that come from a search.
      // searchedResults contains a list of all posts that satisfy the user's search parameters (by tag or prompt)
      <PromptCardList 
        data = {searchedResults}
        handleTagClick = {handleTagClick}
      />
    ):(
      // if searchText is false, then it will just show every post available on the website one by one
      <PromptCardList 
      data = {posts}
      handleTagClick = {handleTagClick}
      />
    )}
   </section>
  )
}

export default Feed