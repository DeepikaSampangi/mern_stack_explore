// const element = (
//     <div title="Outer_div">
//         <h1>Hello There From JSX using Express App, from a js file</h1>    
//     </div>
// );
// ReactDOM.render(element, document.getElementById('content'));

class HelloWorld extends React.Component{
    render(){
        return (
            <div title="Outer_div">
                <h1>Hello There From JSX using Express App, from a js file</h1>    
            </div>
        );
    }
}

const element = <HelloWorld />;