import React from 'react'

import { Card } from 'antd';
const { Meta } = Card;

export default function Album(props) {
    console.log(props)
    return (
        <div>
            <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="Rockstar-album" src={props.albumCover} />}
    >
    <Meta title={props.albumTitle} description={props.artist} />
    </Card>
        </div>
    )
}
