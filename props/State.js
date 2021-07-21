import React from 'react';

class State extends React.Component {
    constructor() {
        super();
        this.state = {
            data:
                [
                    {
                        "name": "dogA",
                        "age": "1"
                    },
                    {
                        "name": "catB",
                        "age": "2"
                    },
                    {
                        "name": "pigC",
                        "age": "3"
                    }
                ],
            id: "Animal List"
        }
    }
    render() {
        return (
            <div>
                <Header title={this.state.id} />
                <table>
                    <tbody>
                        {
                            this.state.data.map(
                                (animals, i) =>
                                <TableRow key={i} data={animals} />
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default State;