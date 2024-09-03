import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'; // Make sure to import Form for Form.Group

const BasicInformationCard = ({ title, items, count }) => (
  <Card className='questionCard mb-3'>
    <Card.Body>
      <Card.Title>
        <span className='Count'>{count}</span> <h5>{title}</h5>
      </Card.Title>
      <Card.Text>
        <Row>
          {items.map((item, index) => (
            <Form.Group as={Col} lg='4' md='6' sm='12' key={index}>
              <Form.Label>{item.label}</Form.Label>
              <p>{item.value}</p>
            </Form.Group>
          ))}
        </Row>
      </Card.Text>
    </Card.Body>
  </Card>
);

BasicInformationCard.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default BasicInformationCard;
