import profilePic from "./assets/pfp.jpg";
function Card() {
  return (
    <div className="card">
      <img className="pfp" src={profilePic} alt="pfp"></img>
      <h2 className="card-title">Andrew Persaud</h2>
      <p className="card-desc">I code, workout, and gym</p>
    </div>
  );
}

export default Card;
