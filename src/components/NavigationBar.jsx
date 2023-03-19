import '../styleFolder/Navigation.css'
import { Link } from 'react-router-dom';

function NavigationBar(){
    return(
        <div className="NavBar">
            <div className="mainBut">
                <span>W</span>
                <span>W</span>
                <span id='techno'>t</span>
                <span id='techno'>e</span>
                <span id='techno'>c</span>
                <span id='techno'>h</span>
                <span id='techno'>n</span>
                <span id='techno'>o</span>
                <span id='Weebs'>W</span>
                <span id='Weebs'>e</span>
                <span id='Weebs'>e</span>
                <span id='Weebs'>b</span>
                <span id='Weebs'>s</span>
            </div>
            <div className="navigationButs" style={{display:'flex',flexDirection:'row'}}>
                <div id="dropdown-affiliates">
                    <button className="dropbtn">Affiliates</button>
                    <div className="dropdown-content-affiliates">
                        <a href="/">Link 1</a>
                        <a href="/">Link 2</a>
                        <a href="/">Link 3</a>
                    </div>
                </div>
                <div id="dropdown-CVs">
                    <button className="dropbtn">CVs</button>
                    <div className="dropdown-content-CV">
                        <a href="/">Νίκου Θωμάς</a>
                        <a href="/">Πατσούρας Χρήστος</a>
                    </div>
                </div>
                <div>
                    <Link to="/software">
                        <button id="softw">Software</button>
                    </Link>
                    <Link to="/hardware">
                        <button id="hardw">Hardware</button>
                    </Link>
                    <button id="videos">Videos</button>
                </div>
            </div>
        </div>
    )
}

export default NavigationBar;