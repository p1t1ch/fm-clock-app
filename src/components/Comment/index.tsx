import React from 'react'

interface CommentProps extends React.HTMLProps<HTMLDivElement> {
  children: string
  author: string
}

function Comment({ children, author, className = '', ...props }: CommentProps) {
  return (
    <div className={`${className}`} {...props}>
      <blockquote className="body">“{children}”</blockquote>
      <small className="h5">{author}</small>
    </div>
  )
}

export default Comment
