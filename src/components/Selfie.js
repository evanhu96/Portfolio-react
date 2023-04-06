import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import selfie from "../assets/selfie.JPG";
function Selfie() {
  return (
    <Card style={{ width: "18rem",marginLeft:'530px',marginTop:'20px',border:'none',height:'300px'}}>
      <Card.Img variant="top" src={selfie} style={{marginTop:'-50px'}}/>

    </Card>
  );
}

export default Selfie;
