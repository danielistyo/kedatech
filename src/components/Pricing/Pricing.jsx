import { Col, Card, Button } from "react-bootstrap";
import "./Pricing.scss";

function PricingComponent({ price }) {
  return (
    <Col md={4} key={`price-${price.id}`} data-aos="fade-up" data-aos-duration="1000">
      <Card className="price-card">
        <Card.Header>
          <h4>{price.tierName}</h4>
        </Card.Header>
        <Card.Body>
          <h4>{price.price}</h4>
          <ul>
            {price.features.map((feature, idx) => {
              return <li key={idx}>{feature}</li>;
            })}
          </ul>
          <Button variant="info" size="lg" className="w-100">
            {price.actionText}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default PricingComponent;
