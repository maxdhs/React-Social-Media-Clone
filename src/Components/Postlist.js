import React, { Component } from 'react';
import PostDetails from './PostDetails';
import { v4 } from 'uuid';

class Postlist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [
                {
                    message: 'I am Post 1',
                    likes: 2,
                    key: v4()
                },

                {
                    message: 'I am Post 2',
                    likes: 3,
                    key: v4()
                },
                {
                    message: 'I am Post 3',
                    likes: 10,
                    key: v4()
                }
            ]
        }
    }

    addLike(key) {
        for(let post of this.state.posts) {
            if(post.key === key) {
              post.likes++;
              let newState = Object.assign({}, this.state.posts, post);
              this.setState({newState});
            }
          }
    }

    render() {

        return (
            <div>
                {this.state.posts.map((post, index) =>
                    <div>
                        <PostDetails
                            message={post.message}
                            likes={post.likes}
                            key={post.key}
                            addLike={() => this.addLike(post.key)}
                        />
                    </div>
                )}
            </div>
        );

    }
}

export default Postlist;

