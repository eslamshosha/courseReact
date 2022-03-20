import React, { Component, Fragment } from 'react';

class CourseList extends Component{

    state = {
        isEdit: false
    }

    returnRender = (props)=> {
        return (
            <li>
                <span>{this.props.details.name}</span>
                <button onClick={() => {this.toggleState()}}>Edit Course</button>
                <button onClick={() => {this.props.deleteCourse(this.props.index)}}>Delete Course</button>
            </li>
        )
    }

    //toggle state
    toggleState = ()=>{
        let {isEdit} = this.state;
        this.setState({
            isEdit: !isEdit
        })
    }
    //updateCourseItem
    updateCourseItem = (e) =>{
        e.preventDefault();
        this.props.editCourse(this.props.index, this.input.value);
        this.toggleState();
    }

    //render update course
    renderUpdateCourse = () => {
        return(
            <form onSubmit={this.updateCourseItem}>
                <input type="text" ref={(v) => {this.input = v}} defaultValue={this.props.details.name}/>
                <button>Update Course</button>
            </form>
        )
    }
    render(){
        let {isEdit} = this.state;
        return(
            <Fragment>
                {isEdit ? this.renderUpdateCourse() : this.returnRender()}
            </Fragment>
        )
    }
}

export default CourseList;