import React from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
    const params = useParams();
    return <h3>Requested topic ID: {params.topicId}</h3>;
};

export default Post;
