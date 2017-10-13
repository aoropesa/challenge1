import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

// Create an AddressLabel component that accepts a person object as a prop, and renders their name and address like this:
//
// Full Name
// 123 My St.
// Hialeah, FL 33164
// 2) Create an Envelope component that receives a toPerson and fromPerson as props and uses the AddressLabel from
// challenge 1 to display the return address and the recipient address.

var Person = {
  fullName: 'Alexander Oropesa',
  street: '14026 SW 166th St',
  city: 'Kendall',
  fl: 33177
}
var fromPerson = {
  fullName: 'Randy',
  street: '123 My St',
  city: 'Hialeah',
  fl: 33164
}

function DataLabel({label}) {
  var {fullName, street, city, fl} = label;
  return (
    <div className="label">
      <span className="full-name">{fullName}</span>
      <br/>
      <span className="street">{street}</span>
      <br/>
      <span className="city">{city}</span>
      <span className="fl">FL: {fl}</span>
    </div>
  );
}
function Stamp(){
  return <div className="stamp">Stamp</div>
}
DataLabel.propTypes = {
  label: PropTypes.shape({
    name: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    fl: PropTypes.number.isRequired
  }).isRequired
}

function DatePerson({person, from}) {
  return (
    <div className="container">
      <div className="from">
        <DataLabel label={person} />
      </div>
      <div className="to">
        <DataLabel label={from} />
      </div>
      <Stamp />
    </div>
  );
}

ReactDOM.render(
  <DatePerson person={Person} from={fromPerson}/>, document.querySelector('#root'));
