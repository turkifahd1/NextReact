export default function({children}){
  return(
    <div>
      <h1>artical</h1>
      <div style={{background:"blue" ,marginTop:"50px",padding:"20px",borderRadius:"10px"}}>
        {children}
      </div>
    </div>
  )
}
export const metadata={
  title:"artical"
}