import React from 'react'
import india from '../image/india.svg'
import aus from '../image/aus.svg'
import br from '../image/br.svg'
import ca from '../image/ca.svg'
import de from '../image/de.svg'
import id from '../image/id.svg'
import jp from '../image/jp.svg'
import my from '../image/my.svg'
import mx from '../image/mx.svg'
import ru from '../image/ru.svg'
import sg from '../image/sg.svg'
import kr from '../image/kr.svg'
import gb from '../image/gb.svg'
import us from '../image/us.svg'
import vn from '../image/vn.svg'
import './Country.css'
import Navbar from '../Navbar/Navbar'


const Country = () => {
  return (
    <div>
        <Navbar/>
    <div className="container">
        <div className="item item1">
            <img src={india} alt=""/>
            <h1>India</h1>
        </div>
        <div className="item item2">
            <img src={aus} alt=""/>
            <h1>Australia</h1>
        </div>
        <div className="item item3">
            <img src={br} alt=""/>
            <h1>Brazil</h1>
        </div>
        <div className="item item4">
            <img src={ca} alt=""/>
            <h1>Canada</h1>
        </div>
        <div className="item item5">
            <img src={de} alt=""/>
            <h1>Germany</h1>
        </div>
        <div className="item item6">
            <img src={id} alt=""/>
            <h1>Indonesia</h1>
        </div>
        <div className="item item7">
            <img src={jp} alt=""/>
            <h1>Japan</h1>
        </div>
        <div className="item item8">
            <img src={my} alt=""/>
            <h1>Malaysia</h1>
        </div>
        <div className="item item9">
            <img src={mx} alt=""/>
            <h1>Mexico</h1>
        </div>
        <div className="item item10">
            <img src={ru} alt=""/>
            <h1>Russia</h1>
        </div>
        <div className="item item11">
            <img src={sg} alt=""/>
            <h1>Singapor</h1>
        </div>
        <div className="item item12">
            <img src={kr} alt=""/>
            <h1>South Koria</h1>
        </div>
        <div className="item item13">
            <img src={gb} alt=""/>
            <h1>UK</h1>
        </div>
        <div className="item item14">
            <img src={us} alt=""/>
            <h1>US</h1>
        </div>
        <div className="item item15">
            <img src={vn} alt=""/>
            <h1>Vietnam</h1>
        </div>
    </div>
</div>
  )
}

export default Country