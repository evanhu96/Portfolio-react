import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Selfie() {
  return (
    <Card style={{ width: "18rem",marginLeft:'50px',marginTop:'100px',border:'none'}}>
      <Card.Img variant="top" src="https://img.freepik.com/free-photo/portrait-young-bearded-hipster-man-looking-camera-taking-selfie-against-yellow_58466-11455.jpg?w=2000" />
      <Card.Body>
        <Card.Title>Evan Hughes</Card.Title>
        <Card.Text>
          My name is Evan Hughes, I am a 26 year old developer who loves the
          problem solving and creativity that comes with programming. Aside from
          that I am just a person with a dog who tries to minimize mouse usage in
          favor of keyboard shortcuts.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Selfie;
