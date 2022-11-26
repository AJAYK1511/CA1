import React from "react";
import './dropdown1.css';
function myFunction() 
{
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(i)
 {
  if (!i.target.matches('.dropbtn')) 
  {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) 
    {
      myDropdown.classList.remove('show');
    }
  }
}

class Dropd extends React.Component
{
    render(){
        return(
    <>
    <div className="dropdown">
       <button className="dropbtn" onclick={myFunction()}>Dropdown  </button>
  <div className="dropdown-content" id="myDropdown">
    <a href="#">Option 1</a>
    <a href="#">Option 2</a>
    <a href="#">Option 3</a>
  </div>
  </div> 
  </>
        )
    }
}
export default Dropd
