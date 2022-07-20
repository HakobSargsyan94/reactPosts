import React, {useMemo, useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Java script 1', body: 'Javascript language 1'},
        {id: 4, title: 'React script 4', body: '1 React language 4'},
        {id: 3, title: 'Python script 3', body: '3 Python language 3'},
        {id: 2, title: 'PHP script 2', body: '2 PHP language 2'},
    ]);
    const [filter, setFilter] = useState({sort: '', query: ''});

    const sortedPosts = useMemo(() => {
        console.log(111)
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
        }

        return posts;
    }, [filter.sort, posts]);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()));
    }, [filter.query, sortedPosts]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            <hr style={{margin: '15px 0'}}/>
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Posts'}/>
        </div>);
}

export default App;
