// import { useNavigate } from 'react-router-dom'
// import { useState } from 'react'
// import axios from 'axios'
// import boba, { update } from '../../../models/boba'

// const Update = (props) => {
//   let navigate = useNavigate()
//   const [postValues, setPostValues] = useState(initialState)

//   const initialState = {
//     name: props.review[index].name,
//     rating: props.review[index].rating
//   }


//   const handleChange = event => {
//     setPostValues({ ...postValues, [event.target.name]: event.target.value })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     console.log('submit')
//     let res = axios.post('/api/reviewcreate', postValues)
//     props.getPost()
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Boba shop name"
//           value={postValues.name}
//           onChange={handleChange}
//         />
//         <br></br>
//         <br></br>
//         <input
//           type="text"
//           name="rating"
//           placeholder="Comment here"
//           value={postValues.rating}
//           onChange={handleChange}
//         />
//         <br></br>
//         <button
//           type="submit"
//         >
//           Submit
//         </button>
//       </form>
//       <div>
//         {
//           props.postValues?.map((postValue) => (
//               <div className="crud"key={postValue._id}>
//                 <p>
//                   {postValue.name}
//                 </p>
//                 <p>
//                   {postValue.rating}
//                 </p>
//               </div>
//           ))
//         }
//       </div>
//       <div>
//         <h1>Edit Review</h1>
//         {props.review.map((review, index) => {
//             return(
//                 <div className="Update">
//                     <h3>{boba.name}</h3>
//                     <h3>{boba.rating}</h3>
//                 </div>
//             )
//         })}
//       </div>
//     </div>
//   )
// }

// export default Update