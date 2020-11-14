class IssueFilter extends React.Component{
  render(){
    return(
      <div>
        Place holder for Issue Filter
      </div>
    );
  }
}

class IssueTable extends React.Component{
  render(){
    const rowStyle = {border: "1px solid silver", padding: 4};
    return(
      <table style = {{borderCollapse: "collapse"}}>
        <thead>
          <tr>
            <th style = {rowStyle}>ID</th>
            <th style = {rowStyle}>Title</th>
          </tr>
        </thead>
        <tbody>
          <IssueRow rowStyle={rowStyle} issue_id={1} issue_title={"Error in console when clicking add"} />
          <IssueRow rowStyle={rowStyle} issue_id={2} issue_title={"JS is just too much"} />
        </tbody>
      </table>
    );
  }
}

class IssueRow extends React.Component{
  render(){
    const style = this.props.rowStyle;
    return(
      <tr>
        <td style = {style}>{this.props.issue_id}</td>
        <td style = {style}>{this.props.issue_title}</td>
      </tr>
    );
  }
}

class IssueAdd extends React.Component{
  render(){
    return(
      <div>
        Place holder for Issue Add
      </div>
    );
  }
}

class IssueList extends React.Component{
  render(){
    return(
      <React.Fragment>
        <h1>Issues Tracker</h1>
        <IssueFilter />
        <hr />
        <IssueTable />
        <hr />
        <IssueAdd />
      </React.Fragment>
    );
  }
}

const element = <IssueList />

ReactDOM.render(element, document.getElementById('contents'))