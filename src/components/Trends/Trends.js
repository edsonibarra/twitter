import { render } from "@testing-library/react";
import React, {Component} from "react"
import {trends} from '../../trends-source'
import Trend from '../Trend/Trend'


class Trends extends Component { 
    constructor(props){
        super(props);
        this.state = {
            trends: trends
        };
    };
    render() {
        return(
            this.state.trends.map( trend => {
                return <Trend category ={trend.category} title={trend.title} content={trend.content} noTweets={trend.noTweets} imageUrl={trend.imageUrl} />
            })
        )
    }
}

export default Trends