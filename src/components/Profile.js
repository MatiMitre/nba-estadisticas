import React from "react";
import { data } from "../static/players";
export function Profile() {
  return (
    <main id="player-profile">
      <div>
        <i>
          <span>Favoritos</span>
        </i>
        <h1>Paul George</h1>
        <i>
          <span id="team">Clippers</span>
        </i>
        <h3 id="height">Height</h3>
        <h3 id="weight">{Players()}</h3>
      </div>
    </main>
  );
}

export const Players = () => {
  return (
    <>
      <div className="stock-container">
        {data.map((data, key) => {
          return (
            <div key={key}>
              {data.first_name + " , " + data.last_name + " ,"}
            </div>
          );
        })}
      </div>
    </>
  );
};
