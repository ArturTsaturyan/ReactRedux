import React,{useState} from 'react';
import './HomePage.css';




export default function HomePage(){
    const [count, setCount] = useState(false)
    const [nkar, setNkar] = useState(false)
    const [real, setReal] = useState(false)


    return <div>
        <div className="masin">
            <div className="as">
                <div className='xazachecoc' onClick={()=>setCount((e) => !e)}></div>
                {count && <div className="real"><a className="a1" href="https://www.facebook.com/%D5%8D%D5%B8%D6%82%D6%80%D5%A2-%D4%B1%D5%B4%D5%A5%D5%B6%D5%A1%D6%83%D6%80%D5%AF%D5%AB%D5%B9-%D5%82%D5%A1%D5%A6%D5%A1%D5%B6%D5%B9%D5%A5%D6%81%D5%B8%D6%81-%D5%B4%D5%A1%D5%B5%D6%80-%D5%BF%D5%A1%D5%B3%D5%A1%D6%80-433123153430111">Ղազանչեցոց եկեղեցի</a></div>}
            </div>
            <div className="as">
                <div className='realakan' onClick={()=>setNkar((e) => !e)}></div>
                {nkar && <div className="real"><a className="a1" href="https://www.facebook.com/permalink.php?story_fbid=1328391294179697&id=100010265169545">Շուշիի Ռեալական համալսարան</a></div>}
            </div>
            <div className="as">
                <div className='mshakuyt' onClick={()=>setReal((e) => !e)}></div>
                {real &&<div className="real"><a className="a1" href="https://www.facebook.com/%D5%87%D5%B8%D6%82%D5%B7%D5%AB%D5%AB-%D5%84%D5%B7%D5%A1%D5%AF%D5%B8%D6%82%D5%B5%D5%A9%D5%AB-%D6%87-%D4%B5%D6%80%D5%AB%D5%BF%D5%A1%D5%BD%D5%A1%D6%80%D5%A4%D5%B8%D6%82%D5%A9%D5%B5%D5%A1%D5%B6-%D4%BF%D5%A5%D5%B6%D5%BF%D6%80%D5%B8%D5%B6-753297941490305">Շուշիի մշակույթի տուն</a></div>}
            
            </div>
 
       </div>

    </div>
}
