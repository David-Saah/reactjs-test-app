import { Component } from "react";


let TableHead = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
}

let TableBody = () => {
    return (
        <tbody>
            <tr>
                <td>Charlie</td>
                <td>Janitor</td>
            </tr>
            <tr>
                <td>Dee</td>
                <td>Aspiring Actress</td>
            </tr>
            <tr>
                <td>Dennis</td>
                <td>Bartender</td>
            </tr>
        </tbody>
    )
}

class Table extends Component {
    render() {
        return (
            <table cellPadding="10px" className="table table-striped">
                <TableHead />
                <TableBody />
            </table>
        )
    }
}

export default Table;
