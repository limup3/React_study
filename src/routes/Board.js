import React, {Component} from 'react';
import './Board.css'
class Board extends Component {
    state = {
        maxNo: 3,
        boards: [
            {
                brdno: 1,
                brdwriter: `홍길동`,
                brdtitle: `리액트 개인프로젝트`,
                brddate: new Date()
            },
            {
                brdno: 2,
                brdwriter: '김유신',
                brdtitle: '오늘 점심은 ?',
                brddate: new Date()
            },
            {
                brdno: 3,
                brdwriter: '유관순',
                brdtitle: 'JSX ?',
                brddate: new Date()
            },
        ]
    }

    handleSaveDate = (data) => {
        this.setState({
            maxNo: this.state.maxNo+1,
            boards: this.state.boards.concat({brdno: this.state.maxNo, brddate: new Date(), ...data })

        });
    }

    handleRemove = (brdno) => {
        this.setState({
            boards: this.state.boards.filter(row => row.brdno !== brdno)
        })
    }

    render() {
        const { boards } = this.state;

        return (
          

            <div className="board-container">
                <BoardForm onSaveData={this.handleSaveDate}/>
                <table className="table" border="1">
                    <tbody>
                    <tr align="center">
                        <td width="50">No.</td>
                        <td width="300">Title</td>
                        <td width="100">Name</td>
                        <td width="100">Date</td>
                    </tr>
                    {
                        boards.map(row=>(
                            <BoardItem key={row.brdno} row={row} onRemove={this.handleRemove} onSelectRow={this.handleSelectRow}/>
                        ))
                    }

                    </tbody>
                </table>
            </div>
        );
    }


}

class BoardItem extends React.Component{
    handleRemove = () => {
        const { row, onRemove } = this.props;
        onRemove(row.brdno);
    }
    render() {
        console.log(this.props.row.brdno)
        return(
            <tr>
                <td>{this.props.row.brdno}</td>
                <td>{this.props.row.brdtitle}</td>
                <td>{this.props.row.brdwriter}</td>
                <td>{this.props.row.brddate.toLocaleDateString('ko-KR')}</td>
                <td><button onClick={this.handleRemove}>X</button></td>
            </tr>
        )
    }
}

class BoardForm extends Component {
    state = {}

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSaveData(this.state);
        this.setState({});
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <input placeholder="title" name="brdtitle" onChange={this.handleChange}/>
            <input placeholder="name" name="brdwriter" onChange={this.handleChange}/>
            <button type="submit">Save</button>
            <div className="inputbox-padding" ></div>
            </form>
        );
        }


}
  export default Board;