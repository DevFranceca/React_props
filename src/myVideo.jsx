import './myVideo.css'
function Video({props}) {
    return (
        <>
            <div className='container'>
                <div className="vidText">
                    <div className="vid1" style={{backgroundColor: props.bColor}}>
                        <div className="vid2">
                        <img src="./src/assets/dark YouTube.png" alt="" />
                        </div>
                    </div>
                    <div className="text">
                        <h3>{props.head}</h3>
                        <p>{props.para}</p>
                    </div>
                </div>
                <div className="Btn">
                    <img src="./src/assets/love_icon.jfif" alt="" />
                </div>
            </div>
        </>
    )
}


export default Video