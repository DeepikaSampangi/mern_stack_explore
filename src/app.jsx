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
    return(
      <div>
        Place holder for Issue Table
      </div>
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