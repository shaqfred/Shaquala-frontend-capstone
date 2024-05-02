import React from "react"
import "./About.css"



export default function About() {
    const projectBio =
      "The project was built by Web Developer Shaquala Fredericks.The reason why I created this application is to help people that are not comfortable expressing their feelings to another person, Thus it will help people manage and declutter their stress."
  
    const shaqFredBio =
      "Shaquala is a cat lover. She loves God and has 2 beautiful daughters who brings her joy. She strives for greatness and want to pay it forward so that others may have opportunities to fulfill their dreams. ";
      return (
        <div
          style={{ textAlignVertical: "center", textAlign: "center" }}
          className="container-fluid text-center"
        >
          <article key="about">{}</article>
          <div className="container ">
            <h2 className="text-body-emphasis fw-bold">About the Project</h2>
            <p>{projectBio}</p>
          </div>
          <h2 className="text-body-emphasis fw-bold">About the Developer</h2>
          <div className="container text-center">
            <div className="row">
              <div className="col">
                <div className="card blue" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <img
                      src="https://avatars.githubusercontent.com/u/96317236?s=400&u=7de1096a1fe94de1a0ef52ade4c2827826e4bffc&v=4"
                      className="card-img-top"
                      alt=""
                    ></img>
                    <h5 className="card-title">Shaquala Fredericks</h5>
                    <p className="card-text">{shaqFredBio}</p>
                    <a href={"https://github.com/shaqfred"}
                      className="btn btn-primary"

                    />
              Shaquala's github Link
</div>
</div>
</div>
</div>
</div>
// </div>
    
      )
}
