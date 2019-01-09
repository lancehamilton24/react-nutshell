import React from 'react';
import './Home.scss';
// import { homedir } from 'os';

class Home extends React.Component {
  changeView = (e) => {
    const view = e.currentTarget.id;
    this.props.history.push(`/${view}`);
  }

  render() {
    return (
      <div className='Home'>
      <div className="card-deck">
        <div className="card border-dark" id="messages" onClick={this.changeView}>
          <div className="card-body text-center">
            <h4 className="card-title"><i className="fas fa-comments fa-7x"></i></h4>
            <h6 className="card-subtitle mb-2 text-muted">Messages</h6>
            <p className="card-text">Newer better AOL</p>
          </div>
        </div>
        <div className="card border-dark" id="weather">
          <div className="card-body text-center">
            <h4 className="card-title"><i className="fas fa-comments fa-7x"></i></h4>
            <h6 className="card-subtitle mb-2 text-muted">Weather</h6>
            <p className="card-text">Newer better AOL</p>
          </div>
        </div>
        <div className="card border-dark" id="events">
          <div className="card-body text-center">
            <h4 className="card-title"><i className="fas fa-comments fa-7x"></i></h4>
            <h6 className="card-subtitle mb-2 text-muted">Events</h6>
            <p className="card-text">Newer better AOL</p>
          </div>
        </div>
        <div className="card border-dark bg-warning">
            <div className="card-body text-center">
              <h4 className="card-title"><i className="fas fa-tree fa-7x"></i></h4>
              <h6 className="card-subtitle mb-2 text-muted">...</h6>
              <p className="card-text">Welcome to Nutshell</p>
            </div>
          </div>
        <div className="card border-dark" id="friends">
          <div className="card-body text-center">
            <h4 className="card-title"><i className="fas fa-comments fa-7x"></i></h4>
            <h6 className="card-subtitle mb-2 text-muted">Friends</h6>
            <p className="card-text">Newer better AOL</p>
          </div>
        </div>
        <div className="card border-dark" id="articles">
          <div className="card-body text-center">
            <h4 className="card-title"><i className="fas fa-comments fa-7x"></i></h4>
            <h6 className="card-subtitle mb-2 text-muted">Articles</h6>
            <p className="card-text">Newer better AOL</p>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Home;
