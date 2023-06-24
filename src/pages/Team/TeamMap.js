import React, { useEffect } from "react";
import "./Team.css";
import AOS from "aos";
import "aos/dist/aos.css";
import TeamData from "./TeamData";
import Team from "./Team";

const TeamMap = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  return (
    <div className="team-bg overflow-hidden">
      <div className="Team-Header">
        <h1 className="Team-heading">Our Team</h1>
      </div>

      <div className="container py-3">
        <div className="box-bg-white py-4 rounded">
          <div className="container px-5">
            <div className="row row-cols-1 align-items-center">
              {TeamData.map((team,i) => (
                <div key={team.id}>
                  <Team
                    position={team.Position}
                    name={team.Name}
                    des={team.Description}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="company-name">
        <p>eBrandWorks</p>
      </div>
    </div>
  );
};

export default TeamMap;

// <div className="col">
// <div class="card mb-3" style={{maxWidth: "100%"}}>
//   <div class="row g-0">
//     <div class="col-md-4">
//       <img src="https://i0.wp.com/betterams.com/wp-content/uploads/2020/08/dest.png" class="img-fluid rounded-start" alt="..."/>
//     </div>
//     <div class="col-md-8">
//       <div class="card-body">
//         <h5 class="card-title">Card title</h5>
//         <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//         <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//       </div>
//     </div>
//   </div>
// </div>
// </div>
