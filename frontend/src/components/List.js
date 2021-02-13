import React from 'react';

export class List extends React.Component {
    constructor(props) {
        super(props);
        const users = [];

        this.state = { users };
    }

    componentDidMount() {
        fetch(`${process.env.REACT_APP_API_HOST}/api/users`)
            .then(response => response.json())
            .then(data => this.setState({ users: data }));
    }

    render() {
        return (
            <div className="list pt-3">
                <h1 className="h1">Users</h1>
                <br/>
                <div className="table-responsive">
                    <table className="table table-striped table-sm">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Email</th>
                        </tr>
                        </thead>
                        <tbody>
                            { this.state.users.map(user => <tr key={user.name}><td>{ user.name }</td><td>{ user.surname }</td><td>{ user.email }</td></tr>) }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default List;
