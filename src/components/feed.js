import React from "react";
import Tweet from "./tweet/tweet";
import {feed} from '../source';

class Feed extends React.Component {
    constructor() {
        super();
        this.state = {
            tweets: feed
        }
    }

    render() {

        return (
            <div>
                {
                    this.state.tweets.map( tweet => {
                        return (
                            <Tweet
                                profile={tweet.profile}
                                profileUrl={tweet.profileUrl}
                                username={tweet.username}
                                content={tweet.content}
                                reactions={tweet.interaction}
                            />
                        )
                    })
                }
                
            </div>
        );
    }
}

export default Feed;