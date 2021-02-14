import React from 'react'

interface CommentProps extends React.HTMLProps<HTMLDivElement> {
  children: string
  author: string
}

// - Generate a new random programming quote whenever the refresh icon is clicked

function Comment({ children, author, className = '', ...props }: CommentProps) {
  return (
    <div className={`${className}`} {...props}>
      <blockquote className="body">“{children}”</blockquote>
      <small className="h5">{author}</small>
    </div>
  )
}

export default Comment
