import './saved-list.css';
import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSavedData, setActiveElement } from '../state/action-creators';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

const Savedlist = ({ getSavedData, data, setActiveElement }) => {
  const history = useHistory();

  useEffect(() => {
    getSavedData();

    return history.listen((location) => {
      return location;
    });
  }, [getSavedData, history]);

  const createList = (arr) => {
    if (arr) {
      return arr.map((element) => {
        if (element.id) {
          return (
            <Link
              onClick={() => {
                setActiveElement(element);
              }}
              key={element.id}
              to="/customizer"
            >
              <li className="list-element">
                <img src={element.img} alt="Controller"></img>
              </li>
            </Link>
          );
        } else {
          return null;
        }
      });
    }
  };

  return <ul className="list">{createList(data)}</ul>;
};

const mapStateToProps = (state) => {
  return { data: state.data };
};

export default connect(mapStateToProps, { getSavedData, setActiveElement })(
  Savedlist
);
