
import globe from '../assets/globe.png'

export default function Header(){
    return(
    <header>
      <a href="/">
        <img src={globe} alt="globe icon" />
        <h1>my travel journal.</h1>
      </a>
    </header>
    )
}
