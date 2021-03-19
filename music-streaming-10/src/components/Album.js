import React from 'react'

import { Card } from 'antd';
const { Meta } = Card;

export default class Album extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    handleClick = e => {
        this.props.delete(this.props.id)    
        
    }

    render() {
    return (
        <div>
            <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="Rockstar-album" src={this.props.albumCover} />}
    >
    <Meta title={this.props.albumTitle} description={this.props.artist} />
    </Card>
    <button onClick={this.handleClick}>Delete</button>
        </div>
    )
    } 
}
