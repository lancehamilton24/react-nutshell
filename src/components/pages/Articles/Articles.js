import React from 'react';
// import './Home.scss';
// import { homedir } from 'os';

class Articles extends React.Component {
  render() {
    return (
      <div className='Articles'>
      <div class="card-deck">
        <div class="card border-dark" id="articles">
          <div class="card-body text-center">
            <h4 class="card-title"><i className="fas fa-comments fa-7x"></i></h4>
            <h6 className="card-subtitle mb-2 text-muted">Articles</h6>
            <p className="card-text">Newer better AOL</p>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Articles;
