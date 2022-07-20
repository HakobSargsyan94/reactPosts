import React, {useState} from 'react';
import MyInput from "./Ui/input/MyInput";
import MyButton from "./Ui/button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''});
    const addNewPost = (e) => {
        e.preventDefault();
        if (post.title && post.body) {
            const newPost = {
                ...post,
                id: Date.now()
            }
            create(newPost);
            setPost({title: '', body: ''})
        }
    }

    return (
        <form>
            <MyInput
                onChange={e => setPost({...post, title: e.target.value})}
                value={post.title}
                type="text"
                placeholder="Post title*"
            />
            <MyInput
                onChange={e => setPost({...post, body: e.target.value})}
                value={post.body}
                type="text"
                placeholder="Post body*"
            />
            <MyButton onClick={addNewPost}>
                Create post
            </MyButton>
        </form>
    );
};

export default PostForm;