import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setActiveElement } from '../state/action-creators';

const CreateNew = ({ setActiveElement }) => {
  return (
    <Link to="/customizer">
      <button
        onClick={() => {
          setActiveElement(null);
        }}
      >
        Create New
      </button>
    </Link>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { setActiveElement })(CreateNew);
