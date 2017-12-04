import React, { Component } from 'react';
import './MediaCenter.css'

class MediaCenter extends Component {
  constructor() {
    super();
    this.state = { message: {}};
  }
  componentDidMount() {
    const jsCode = `
      $(function() {
        $('.tabs nav a').on('click', function() {
          show_content($(this).index());
        });

        show_content(0);

        function show_content(index) {
          // Make the content visible
          $('.tabs .content.visible').removeClass('visible');
          $('.tabs .content:nth-of-type(' + (index + 1) + ')').addClass('visible');

          // Set the tab to selected
          $('.tabs nav a.selected').removeClass('selected');
          $('.tabs nav a:nth-of-type(' + (index + 1) + ')').addClass('selected');
        }
      });
    `;
    new Function(jsCode)();
  }
  // componentDidMount() {
  //   return fetch('/api/blog')
  //     .then(response => response.json())
  //     .then(json => this.setState({ message: json }));
  // }
  render() {
    return (
      <div className="text-center">
        <h2>Media Center</h2>
        <div className="col-md-10 col-md-offset-2">
          <div className="tabs">
            <nav>
              <a>In the News</a>
              <a>Latest Events</a>
              <a>Social Causes</a>
              <a>Press Releases</a>
            </nav>
            <div className="content">
              <p>Content #1</p>
            </div>
            <div className="content">
              <p>Content #2</p>
            </div>
            <div className="content">
              <p>Content #3</p>
            </div>
            <div className="content">
              <p>Content #4</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MediaCenter;
