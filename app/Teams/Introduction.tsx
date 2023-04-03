import React from "react";

function Introduction() {
  return (
    <>
      <div className="px-4 sm:px-20 pt-5 sm:pt-20 text-2xl">Our Values</div>
      <div className="px-4 sm:px-20 pt-4 text-5xl">Rules to Live by </div>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 p-5 sm:p-20">
        <div>
          <div className="text-7xl">01</div>
          <div className="text-2xl">Love your craft.</div>
          <p>
            We’re here because we love what we do. It’s our passion, hobby,
            career, and vocation. We’re looking for others who feel the same
            way.
          </p>
        </div>
        <div>
          <div className="text-7xl">02 </div>
          <div className="text-2xl">Be bold. Be humble.</div>
          <p>
            There is no top-down. We lead from the bottom and the edges.
            Everyone drives. We celebrate ideas over egos, where the best idea
            wins, regardless of who or where it comes from.
          </p>
        </div>
        <div>
          <div className="text-7xl">03</div>
          <div className="text-2xl">Be better. Always push forward.</div>
          <p>
            We’re on a tireless pursuit to become better and expect those around
            us to do the same.
          </p>
        </div>
        <div>
          <div className="text-7xl">04</div>
          <div className="text-2xl ">Be a Professional</div>
          <p>
            There’s important work to be done. Speak up. Be present. Provide
            value, with honesty and candour.
          </p>
        </div>
      </div>
    </>
  );
}

export default Introduction;
