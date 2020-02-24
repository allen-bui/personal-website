import React from 'react';
import Header from './../header/header.jsx';
import Project from './singleProject';
import './portfolio.css';

// projects
import airbnb from './projects/airbnb.js';
import amazon from './projects/amazon.js';
import blog from './projects/blog.js';
import trivia from './projects/trivia.js';

class Portfolio extends React.Component {
  constructor() {
    super();
    this.state = {
      projectName: 'Airbnb Clone',
    };
    this.getCurrentValue = this.getCurrentValue.bind(this);
  }

  getCurrentValue(event) {
    this.setState({
      projectName: event.target.value,
    });
  }

  render() {
    const wrapper = (
      <div className="project-list-container">
        <div className="project-list-title">
          PROJECTS:
          <select className="project-name" onChange={this.getCurrentValue}>
            <option>Airbnb Clone</option>
            <option>Trivia Now</option>
            <option>Personal Blog Project</option>
            <option>Amazon System Design</option>
          </select>
        </div>
      </div>
    );

    if (this.state.projectName === 'Airbnb Clone') {
      return (
        <div>
          <Header />
          {wrapper}
          <Project name={airbnb} />
        </div>
      );
    } else if (this.state.projectName === 'Trivia Now') {
      return (
        <div>
          <Header />
          {wrapper}
          <Project name={trivia} />
        </div>
      );
    } else if (this.state.projectName === 'Amazon System Design') {
      return (
        <div>
          <Header />
          {wrapper}
          <Project name={amazon} />
        </div>
      );
    } else if (this.state.projectName === 'Personal Blog Project') {
      return (
        <div>
          <Header />
          <div className="project-list-container">
            <div className="project-list-title">
              PROJECTS:
              <select className="project-name" onChange={this.getCurrentValue}>
                <option>Airbnb Clone</option>
                <option>Trivia Now</option>
                <option>Personal Blog Project</option>
                <option>Amazon System Design</option>
              </select>
            </div>
          </div>
          <Project name={blog} />
        </div>
      );
    }
  }
}

export default Portfolio;
