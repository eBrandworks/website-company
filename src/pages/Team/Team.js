import React, { useEffect } from "react";
import "./Team.css"
import AOS from "aos";
import "aos/dist/aos.css";

const Team = ({position,name,des}) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      });
  return (
    <div>
<div className="col">
<div class="card mb-3 shadow rounded border-0" style={{maxWidth: "100%"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src="https://media.licdn.com/dms/image/C4E03AQGSkj21xyCb0w/profile-displayphoto-shrink_800_800/0/1615284746497?e=2147483647&v=beta&t=gxK4IwkgAOXYKdUAqBjrud2Ww17Ka18kC1w8LVV21GU"  class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body" style={{textAlign:"left"}}>
        <h5 class="card-title">{position}</h5>
        <h2 class="card-text text-black">{name}</h2>
        <p class="card-text"><small class="text-muted">{des}</small></p>
        <p class="card-text"><small class="text-muted">{des}</small></p>
      
      </div>
    </div>
  </div>
</div>
</div>
    </div>
  )
}

export default Team

