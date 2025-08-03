import React, { Component } from 'react';

class Getuser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    fetch('https://api.randomuser.me/')
      .then((response) => response.json())
      .then((data) => {
        const result = data.results[0];
        this.setState({
          user: {
            title: result.name.title,
            firstName: result.name.first,
            image: result.picture.large
          },
          loading: false
        });
      })
      .catch((error) => {
        this.setState({ error: error.message, loading: false });
      });
  }

  render() {
    const { user, loading, error } = this.state;

    if (loading) {
      return <h3>Loading user...</h3>;
    }

    if (error) {
      return <h3>Error: {error}</h3>;
    }

    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>User Details</h2>
        <h3>{user.title} {user.firstName}</h3>
        <img src={user.image} alt="User" style={{ borderRadius: '50%' }} />
      </div>
    );
  }
}

export default Getuser;
