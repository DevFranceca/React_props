import './App.css'
import Video from './myVideo'

function App() {
    const properties = [
      {
        bColor: "blue",
        head: "First Video",
        para: "Video description"
      },
      {
        bColor: "aqua",
        head: "Second Video",
        para: "Video description"
      },
      {
        bColor: "purple",
        head: "Third Video",
        para: "Video description"
      },
    ]
  return (
    <>
      <div className='vid'>
        <div className="wrap">
          <h1>3 Videos</h1>
        {
          properties.map((index)=>{
            return <Video props= {index}/>
          })
        }
        </div>
      </div>
    </>
  )
}

export default App
