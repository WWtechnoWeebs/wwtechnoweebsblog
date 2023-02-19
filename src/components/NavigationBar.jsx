import React from "react";
import '../styleFolder/Navigation.css'

function NavigationBar(){
    return(
        <div className="NavBar">
            <div>
                <button id="mainBut">WWtechnoWeebs</button>
            </div>
            <div className="navigationButs" style={{display:'flex',flexDirection:'row'}}>
                <div id="dropdown-affiliates">
                    <button class="dropbtn">Affiliates</button>
                    <div class="dropdown-content-affiliates">
                        <a href="/">Link 1</a>
                        <a href="/">Link 2</a>
                        <a href="/">Link 3</a>
                    </div>
                </div>
                <div id="dropdown-CVs">
                    <button class="dropbtn">CVs</button>
                    <div class="dropdown-content-CV">
                        <a href="/">Νίκου Θωμάς</a>
                        <a href="/">Πατσούρας Χρήστος</a>
                    </div>
                </div>
                <div>
                    <button id="softw">Software</button>
                    <button id="hardw">Hardware</button>
                    <button id="videos">Videos</button>
                </div>
            </div>
        </div>
    )
}

export default NavigationBar;