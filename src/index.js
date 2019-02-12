import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './ComponentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Vasya" 
                    comment="My new comment" 
                    timeAgo="Today at 4:52PM" 
                    avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Fedya" 
                    comment="My existing comment" 
                    timeAgo="Today at 2:52PM" 
                    avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Sanya" 
                    comment="I like it" 
                    timeAgo="Yesterday at 4:52PM" 
                    avatar={faker.image.avatar()}/>            
            </ApprovalCard>
        </div>
    );
};


ReactDOM.render(
    <App />,
    document.querySelector('#root')
)