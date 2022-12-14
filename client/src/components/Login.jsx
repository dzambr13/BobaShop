import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const Form = (props) => {
  let navigate = useNavigate()

  const initialState = {
    name: '',
    rating: ''
  }

//   console.log('initial state running')

  const [postValues, setPostValues] = useState(initialState)

  const handleChange = event => {
    setPostValues({ ...postValues, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('submit')
    let res = axios.post('/api/reviewcreate', postValues)
    props.getPost()
    // console.log(postValues)
    // console.log('creating posts')
  }

  const deleteReview = async (id) => {
    let res = await axios.delete(`/api/review/${id}`)
    props.getPost()
    // console.log('deleting review')
  }

  // console.log('posts title made with inputs')
  return (
    <div>
      <h1 className="post-title">Please share your thoughts and opinions about the Boba shops here!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Boba shop name"
          value={postValues.name}
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <input
          type="text"
          name="rating"
          placeholder="Comment here"
          value={postValues.rating}
          onChange={handleChange}
        />
        <br></br>
        <button
          type="submit"
        >
          Submit
        </button>
      </form>
      <div>
        {
          props.postValues?.map((postValue) => (
              <div className="crud"key={postValue._id}>
                <p>
                  {postValue.name}
                </p>
                <p>
                  {postValue.rating}
                </p>
                <button onClick={()=>deleteReview(postValue._id)}>Delete Review</button>
              </div>
          ))
        }
      </div>
        <Link className='Update'/>
    </div>
  )
}

//console.log('crud post')
//console.log('crud delete')

export default Form
