import React, { Component } from 'react';

class Course extends Component {

    state = {
        title: null,
        id:null
    }

    componentDidMount(){
        this.loadTitle();
    }

    componentDidUpdate(){
        this.loadTitle();
    }

    loadTitle(){
        console.log(this.props.location.search);
        if(!this.state.id || (this.state.id && this.state.id !== this.props.match.params.id)){
            const query = new URLSearchParams(window.decodeURI(this.props.location.search));
            this.setState({title : query.get("title"), id: this.props.match.params.id});
        }
    }

    render () {
       
        return (
            <div>
                <h1>{this.state.title}</h1>
            <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;