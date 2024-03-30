import next from "next"
import { Jolly_Lodger } from "next/font/google"
import Link from "next/link"
export default async function PostsPage(){
const response=await fetch('https://jsonplaceholder.typicode.com/posts',
{

 next:{
  revalidate:120
 }
}
)
const posts =await response.json()

const post_AGX= posts.map((post)=>{
  return(
     <Link href={`/posts/${post.id}`} style={{width:"70%"}}>
      <div style={{width:"100%", borderRadius:"20px", background:"white", color:"black",margin:"20px"}}>
       <h1>{post.title}</h1>
       <hr/>
       <p>{post.body}</p>
      </div>
      </Link>
  )

})
console.log(post_AGX)
    return(
    <div className="aaa">
    <h1>page posts</h1> 
    <h1>{posts.title}</h1>
    <div style={{ display:"flex",justifyContent:"center" ,flexDirection:"column",alignItems:"center"}}>
      {post_AGX}
    </div>
    
    </div>
  )
}