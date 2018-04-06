import React from 'react';

import Row from 'react-bootstrap/lib/Row';

import Word from '../Word/Word';
import words from '../../tokipona';

class Wordlist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            words: words,
            query: props.query
        };
    }

    render() {
        return (
            <Row>
                {
                    this.state.words
                        .filter(
                            (word) => word.toki.includes(this.state.query))
                        .map(
                            (word) => <Word toki={word.toki} image={word.image}
                                        en={word.en} ru={word.ru} it={word.it} key={word.toki} />
                    )
                }
            </Row>
        )
    }
}

export default Wordlist;