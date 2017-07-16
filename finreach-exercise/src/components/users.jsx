import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import User from './user';
import { addRandomUser } from '../reducers/user/actions';

const renderUsers = users => users.map((user, index) => <User user={user} key={index}></User>)

export const Users = ({ users, addUser }) => <div>
  <ul className="collection">
    {renderUsers(users)}
  </ul>
  <a className="waves-effect waves-light btn-large indigo" onClick={() => addUser()}>Add Random User</a>
</div>

Users.displayName = 'Users';
Users.propTypes = {
  users: PropTypes.array.isRequired
};

export const mapStateToProps = ({ user }) => ({ users: user.users })
export const mapDispatchToProps = dispatch => ({
  addUser: () => {
    dispatch(addRandomUser());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
