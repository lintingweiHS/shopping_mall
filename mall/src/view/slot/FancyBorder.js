
import React from 'react'


export default class FancyBorder extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Border color="blue" left={<div>left123123</div>}
                right={<div>right123123</div>}>


                <p>
                    Thank you for visiting our spacecraft!
                </p>

            </Border>
        )
    }
}

function Border(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color} >
            <h1 style={title}>
                border
                </h1>
            {props.children}

            home,123123132

            right:{props.right}

            left:{props.left}
            <Dialog title="BorderDialog" message={<p>今天真是个好天气</p>} />

        </div>

    )
}
function Dialog(props) {
    return (
        <div>
            <h1 style={{ color: 'green' }}>Dialog</h1>
            {props.title}
            {props.message}
        </div>
    )
}

const title = {
    color: 'red',

}
