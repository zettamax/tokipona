import React from 'react';

import Col from 'react-bootstrap/lib/Col';

class Word extends React.Component {
    constructor(props) {
        super(props);
        this.state = props;
    }

    render() {
        const Icon = ({ icon,  ...props }) => {
            const svg = require(`!raw-loader!../../icons/${icon}.svg`);
            return <div {...props} dangerouslySetInnerHTML={{__html: svg}}/>;
        };
        return (
            <Col xs={11} xsOffset={1} sm={6} smOffset={0} md={6} mdOffset={0} lg={6} lgOffset={0}
                 className={'word'}>

                <div className={'main-info'}>
                    <Icon icon={this.state.image} className={'icon'}/>
                    <div className={'toki'}>
                        {this.state.toki}
                    </div>
                </div>

                <div className={'descr'}>
                    <div className={'en'}>
                        {this.state.en}
                    </div>
                    <div className={'ru'}>
                        {this.state.ru}
                    </div>
                </div>

            </Col>
        )
    }
}

export default Word;