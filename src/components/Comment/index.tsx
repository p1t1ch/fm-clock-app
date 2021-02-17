import React from 'react'
import { CommentData } from '@/pages/index'
import { ReactComponent as Refresh } from '@/icons/refresh.svg'
import { fetchComment } from '@/utils/api'

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
      <div className="w-comment mr-4">
        <blockquote className="body mb-3">“{children}”</blockquote>
        <small className="h5">{author}</small>
      </div>
      <button onClick={handleClick} className="mt-2">
        <Refresh title="Change quote" className="w-4 h-4" />
      </button>
    </div>
  )
}

export default Comment
