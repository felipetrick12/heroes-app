import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { getHeroesById } from "../selectors/getHeroesById";

export default function HeroeScreen({history}) {
  const { heroeId } = useParams();
  const hero = getHeroesById(heroeId);

  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = hero;


  if (!hero) {
    return <Redirect to="/" />;
  }
 
  const handleClick =()=>{
      if(history.length<=2)
      {
          history.push('/');
      }
      else {
          history.goBack();
      }
      history.goBack();
     
  }
  return (
    <>
      <div className="container ">
        <h1 className="m-3" style={{ fontFamily: "georgia" }}>
          Heroe
        </h1>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={`../../assets/${heroeId}.jpg`}
                className="card-img m-2 rounded img-thumbnail animate__animated animate__fadeInLeft"
                alt={superhero}
                style={{}}
              />
            </div>
            <div className="col-md-8 col-sm-12">
              <div className="card-body " style={{ fontFamily: "georgia" }}>
                <h5 className="card-title mx-5" style={{ fontSize: 80 }}>
                  {superhero}
                </h5>
                <p className="card-text mx-5 my-3" style={{ fontSize: 35 }}>
                  <strong>
                    Alter Ego: <b style={{ fontSize: 25 }}>{alter_ego}</b>{" "}
                  </strong>
                </p>
                <hr />
                <p className="card-text mx-5 my-3" style={{ fontSize: 35 }}>
                  <strong>
                    Publisher: <b style={{ fontSize: 25 }}>{publisher}</b>{" "}
                  </strong>
                </p>
                <hr />
                <p className="card-text mx-5 my-3" style={{ fontSize: 35 }}>
                  <small className="text-muted">
                    First_appearance:{" "}
                    <b style={{ fontSize: 25 }}>{first_appearance}</b>
                  </small>
                </p>
                <hr />

                <p className="card-text mx-5 mt-4" style={{ fontSize: 35 }}>
                  <strong>Characters:</strong>
                </p>
                <p className="card-text mx-5 mt-2" style={{ fontSize: 25 }}>
                  {characters}
                </p>
                <button className="btn btn-primary btn-lg mx-5 my-1" onClick={handleClick}>
                  Return
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
