import React, { Component } from 'react';

export default class Pagination extends Component {
    render() {
        return (
              <div id="pagination">
              {
                (this.props.pageNo > 1)?(
                <button 
                    onClick = {this.props.prePage}
                    key='prev'
                >
                previous
                </button>
                ): ""
              }
                
              {
              (this.props.pageNo < this.props.totalPage )?(
                <button 
                    onClick = {this.props.nextPage}
                    key='next'
                >
                next
                </button>
                ): ""
              }
              </div>
            );
    }
}