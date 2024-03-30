import { Suspense } from "react"

export default async function (props){
  const post_id=props.params.post_id
  const response=await fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`)
const posts =await response.json()


  return(
    
    <div>
      <h1>Posts { post_id}</h1>
       <div style={{width:"70%", borderRadius:"20px", background:"white", color:"black",margin:"20px"}}>
        <h1>
          {posts.title}
        </h1>
        <hr/>
        <p>
          {posts.body}
        </p>
       </div>
    </div>
  
  )
}