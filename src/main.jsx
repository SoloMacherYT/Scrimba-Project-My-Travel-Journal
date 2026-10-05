
import {createRoot} from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import Entry from './components/Entry'
import JournalData from './data/journalData'

const data = JournalData.map(data => 
<Entry 
    img={data.img}
    title={data.title}
    country={data.country}
    link={data.link}
    date={data.date}
    text={data.text}
/>

)

const root=createRoot(document.getElementById('root'))
root.render(<>
    <Header/>
    <main className='big-container'>
        {data}
        
    </main>
    
</>)