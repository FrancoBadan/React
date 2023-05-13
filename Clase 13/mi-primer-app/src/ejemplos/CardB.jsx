import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Counter } from './Counter';

// function CardB({onClick}) {
//   return (
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button onClick={onClick} variant="primary">Comprar</Button>
//       </Card.Body>
//     </Card>
//   );
// }

function CardB() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
            <Counter/>
          <Button variant="primary">Comprar</Button>
        </Card.Body>
      </Card>
    );
  }

export default CardB;