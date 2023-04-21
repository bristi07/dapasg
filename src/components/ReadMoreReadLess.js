import React, { useState } from 'react'

function ReadMoreReadLess({ limit, children }) {
  const text = children;
  const [isReadMoreShown, setReadMoreShown] = useState(false);

  const toggleBtn = () => {
    setReadMoreShown(!isReadMoreShown)
  }
  return (
    <div className='read-more-read-less text-xs font-serif'>
      {isReadMoreShown ? text : String(text).substring(0, limit)}
      <button className="px-1 mx-2 text-sm text-blue-100 text-[7px]  hover:bg-blue-900 bg-blue-500 rounded shadow " onClick={toggleBtn
      }>{isReadMoreShown ? 'less' : '...more'}

      </button>
    </div>
  )
}

export default ReadMoreReadLess