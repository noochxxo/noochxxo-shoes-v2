'use client'
import {useState, useCallback, useEffect} from 'react'

const StarRating = ({ 
  maxRating,
  userRatingCount,
  onChange }:
  { 
    maxRating: number,
    userRatingCount?: number,
    onChange: (rating: number) => void
  }) => {

    const [currentRating, setCurrentRating] = useState(0)
    const [hoverRating, setHoverRating] = useState(0)

    const setCurrentRatingHandler = useCallback((ratingValue: number) => {
      currentRating === ratingValue ?
        setCurrentRating(0):
        setCurrentRating(ratingValue)
    }, [currentRating])

    useEffect(() => {
      onChange(currentRating)
    }, [currentRating, onChange])

  return (
    <div className='star-rating-container'>
      {
        [...Array(maxRating)].map((_, idx) => {
          const ratingValue = idx + 1
          return (
            <p
              key={idx}
              onClick={ () => setCurrentRatingHandler(ratingValue) }
              onMouseEnter={ () => setHoverRating(ratingValue) }
              onMouseLeave={ () => setHoverRating(0) }
              className={`star ${ratingValue <= (hoverRating || currentRating)? 'active': ''}`}
            >&#9733;</p>
          )
        })
      } 
      <span
        className='
          ml-3
          text-sm
          md:text-xl
          font-extrabold
          text-primary
        '
      >({userRatingCount})</span>
    </div>
  )
}

export default StarRating