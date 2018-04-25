import React from 'react';

import Row from 'react-bootstrap/lib/Row';
import Word from '../Word/Word';
import words from '../../tokipona';

class Wordlist extends React.Component {
    render() {
        return (
            <Row>
                {
                    words
                        .filter(
                            (word) => word.toki.includes(this.props.query))
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