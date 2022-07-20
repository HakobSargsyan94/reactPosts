import React from 'react';
import MyButton from "./Ui/button/MyButton";
import MyButtonDelete from "./Ui/button/MyButtonDelete";

const PostItem = ({number, ...props}) => {
    const post = props.post;
    return (
        <div>
            <div className="post">
                <div className="post_content">
                    <strong>{number}. {post.title}</strong>
                    <div>
                        {post.body}
                    </div>
                </div>
                <div className="post_btns">
                    <MyButtonDelete onClick={() => props.remove(post)}>Delete</MyButtonDelete>
                </div>
            </div>
        </div>
    );
};

export default PostItem;