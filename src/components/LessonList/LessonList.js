import React, {PropTypes} from 'react';
import {LessonItemContainer} from './LessonItem';
import {getLevelName} from '../../util';

const LessonList = React.createClass({
  generateMockConstraints(i) {
    // Mock constraints until they are implemented
    if(i % 6 === 0) return ['money', 'tablet', 'internet-explorer'];
    if(i % 5 === 0) return ['money'];
    if(i % 7 === 0) return ['tablet'];
    return null;
  },
  render() {
    const lessons = this.props.lessons;
    const level = this.props.level;
    return (
      <div id={this.props.id}>
        <h3>{level + '. ' + getLevelName(level)}</h3>
        <ul className='list-group'>
          {lessons.map((lesson, idx) =>
            lesson.indexed ?
              <LessonItemContainer key={idx} lesson={lesson} constraints={this.generateMockConstraints(idx)}/>
              : null
          )}
        </ul>
      </div>
    );
  }
});

LessonList.propTypes = {
  lessons: PropTypes.array,
  level: PropTypes.string
};

export default LessonList;
