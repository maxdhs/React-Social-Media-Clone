import React from 'react'
import PropTypes from 'prop-types'

function PostDetails (props) {
  return (
    <div>
        <h4>{props.message}</h4>
        <p><strong>Likes:</strong> {props.likes}</p>
        <button className="likeBtn" onClick={props.addLike}>Like</button>
    </div>
  )
}

PostDetails.propTypes = {
    message: PropTypes.string,
    likes: PropTypes.number
}

export default PostDetails

