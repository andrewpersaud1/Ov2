function ProfilePicture() {
  const imageURL = "/ov2/src/assets/pfp.jpg";
  const handleClick = () => console.log("OUCH");

  return <img onClick={handleClick} src={imageURL}></img>;
}
export default ProfilePicture;
