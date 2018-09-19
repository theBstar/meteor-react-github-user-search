import React, { Component } from 'react';
import Display from './display';
import Pagination from './pagination';
import Search from './search';

const SEARCH_URL = "https://api.github.com/search/users?q=";
const LOCATION = "+location:Bangalore";
const PAGE = "&page=";
const PERPAGE = "&per_page=10";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            searchTerm: 'Bikram',
            pageNo: 1,
            result: ''
        };
    this.getData = this.getData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.prePage  = this.prePage.bind(this);
    }
    
    componentWillMount() {
        this.getData();
    }
    

    handleChange(e) {
        if(e.charCode === 13) {
            this.formSubmit();
            return;
        }
        this.setState({
            input: e.target.value
        });   
    }
    
    formSubmit(e) {
        this.setState((prevState, props)=>({
            input: '',
            searchTerm: prevState.input
        }));
        setTimeout(()=>{
            this.getData();
        }, 0);
    }
    getData() {
        let searchString = SEARCH_URL + this.state.searchTerm + LOCATION + PAGE + this.state.pageNo + PERPAGE;
        fetch(searchString)
            .then((data)=>data.json())
            .then((data)=>{
                this.setState({
                    result: data
                })
            });
        
    }
    nextPage () {
        this.setState((prevState, props)=>({
            pageNo: prevState.pageNo + 1
        }));
        setTimeout(()=>{
            this.getData();
        }, 0);
    }
    prePage () {
        this.setState((prevState, props)=>({
            pageNo: prevState.pageNo - 1
        }));
        setTimeout(()=>{
            this.getData();
        }, 0);
    }
    
    render() {
        return (
                <div>
                    <Search
                        formSubmit = { this.formSubmit }
                        handleChange = { this.handleChange }
                        input = { this.state.input }
                        onKey = { this.handleChange }
                    />
                    <div>
                        <h1>
                            Showing Results for: {this.state.searchTerm}
                        </h1>
                    </div>
                    <Display
                        data = { this.state.result }
                    />
                    <Pagination
                        nextPage = { this.nextPage }
                        prePage = { this.prePage }
                        pageNo = { this.state.pageNo }
                        totalPage = { this.state.result.total_count/10 }
                    />
                </div>
            )
    }
}





