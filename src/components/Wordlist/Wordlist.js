import React from 'react';

import Row from 'react-bootstrap/lib/Row';
import Word from '../Word/Word';
import words from '../../tokipona';

class Wordlist extends React.Component {
    constructor(props) {
        super(props);

        this.words = words.map(word => word.toki);
        this.renderedWords = {};

        words.forEach(word =>
            this.renderedWords[word.toki] =
                <Word toki={word.toki} image={word.image}
                      en={word.en} ru={word.ru} it={word.it} key={word.toki}/>
        );
    }

    render() {
        const filtered = this.props.query.length ?
            this.words.filter(word => word.includes(this.props.query)) :
            this.words;

        return (
            <Row>
                { filtered.map(word => this.renderedWords[word]) }
            </Row>
        )
    }
}

export default Wordlist;