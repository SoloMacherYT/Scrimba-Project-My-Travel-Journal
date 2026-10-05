


export default function Entry(props){
    return(<div className="container">
        <div className="main-img">
            <img src={props.img.src} alt={props.img.alt} />
        </div>
        <section>
        <div className="info">
            <img src="src/assets/marker.png" width='7px' alt="marker logo" />
            <span>{props.country}</span>
            <a href={props.link}>View on Google Maps</a>
        </div>
        <div className="contents">
            <h2>{props.title}</h2>
            <p className="date">{props.date}</p>
            <p className="details">{props.text}</p>
        </div>
        </section>
        

    </div>)
}