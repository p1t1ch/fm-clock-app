import React from 'react'
import { ReactComponent as Refresh } from '@/icons/refresh.svg'
import { fetchComment, CommentData } from '@/utils/api'

interface CommentProps extends React.HTMLProps<HTMLDivElement> {
  children: string
  author: string
  setComment: React.Dispatch<React.SetStateAction<CommentData | undefined>>
}

function Comment({ children, author, setComment, className = '', ...props }: CommentProps) {
  const handleClick = async () => {
    const comment = await fetchComment()
    setComment(comment)
  }

  return (
    <div className={`flex items-start ${className}`} {...props}>
      <div className="max-w-comment mr-4">
        <blockquote className="body mb-3">“{children}”</blockquote>
        <small className="h5">{author}</small>
      </div>
      <button
        onClick={handleClick}
        className="mt-2 text-white text-opacity-50 hover:text-opacity-100 focus-visible:text-opacity-100 transition-colors"
      >
        <Refresh title="Change quote" className="w-4 h-4" />
      </button>
    </div>
  )
}

export default Comment
