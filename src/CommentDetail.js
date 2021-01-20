import React from 'react';
import faker from 'faker';
import { getDefaultNormalizer } from '@testing-library/react';
const CommentDetail = (props) => {
  
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.image()} />
      </a>
      <div className="metadata">
        <span className="date"> Today at 6:00pm</span>
      </div>
      <div className="text">Nice Blog post!</div>
    </div>
  );
}

export default CommentDetail;