import React from 'react';

import Row from 'react-bootstrap/lib/Row';

import Word from '../Word/Word';
import words from '../../tokipona';

class Wordlist extends React.Component {
    constructor() {
        super();
        this.state = {words: words};
    }

    render() {
        return (
            <Row>
                {
                    this.state.words.map(
                        (word) => <Word toki={word.toki} image={word.image}
                                        en={word.en} ru={word.ru} it={word.it} key={word.toki} />
                    )
                }
            </Row>
        )
    }
}

export default Wordlist;