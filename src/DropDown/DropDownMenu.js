import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import employeeData from './employeeData.js'
import DropDownList from './DropDownList.js'
import DropDownLocation from './DropDownLocation.js'
import MetricBoxes from './MetricBoxes'
import SidePanel from './SidePanel.js'
import User from './User.js'
import './firstComp.css'


class Layout extends Component {
    state = {
      employeeData: employeeData,
      selectedCompany: null,
      selectedCountry: null,
      selectedCity: null,
      selectedName: null,
      selectedStatus: null
    };
  
  
  onclickcompany = company =>
      {
        console.log(company)
        console.log(this.state.employeeData);
        const filtered = this.state.employeeData.filter(personnel => personnel.company === company)
        console.log(filtered)
        this.setState((state)=>{
          return{
            filteredByCompany: filtered,
            selectedCompany: company
          }
        }) ;
    }
  
    onclickcountry = country =>
        {this.setState({
            filteredByCountry: this.state.filteredByCompany.filter(personnel => personnel.country === country),
            selectedCountry: country
        });
     }

    oncityclick = city =>
        {this.setState({
            filteredByCity: this.state.filteredByCountry.filter(personnel => personnel.city === city),
            selectedCity: city
        });}
     
    onnameclick = name =>
    {
      const employee= this.state.filteredByCity.filter(personnel => personnel.name === name)
      this.setState({
        filteredByName: employee,
        selectedName: name,
        selectedStatus: employee[0].status
    });}
  
    showstatus = status =>
    {this.setState({
        filteredBystatus: this.state.filteredByName.filter(personnel => personnel.status === status),
        selectedStatus: status
    });}
    render() {
      if (this.state.selectedCompany === null){
      
       return (<div className='home'><User/><MetricBoxes/><SidePanel/><div className= 'companyList'>
       <div className= 'dropImage'></div><div className= 'listHead'> Company </div>
        <DropDownList employeeData={this.state.employeeData} onClick={this.onclickcompany} selected="company" />
        </div></div>)
      }

      else {
        if (this.state.selectedCountry === null){
        return (<div className='home'>
        <User/><MetricBoxes/><SidePanel selectedCompany={this.state.selectedCompany}/>
        <div className= 'countryList'>
        <div className= 'dropImage'></div><div className= 'listHead'> Country </div>
        <DropDownList employeeData={this.state.filteredByCompany} onClick={this.onclickcountry} selected="country" />
        </div></div>)
        }

        else {
          if (this.state.selectedCity === null){
            return (<div className='home'>
            <User/><MetricBoxes/><SidePanel selectedCompany={this.state.selectedCompany} selectedCountry={this.state.selectedCountry}/>
           <div className= 'cityList'>
           <div className= 'dropImage'></div><div className= 'listHead'> City </div>
           <DropDownList employeeData={this.state.filteredByCountry} onClick={this.oncityclick} selected="city" />
           </div></div>)
          }

          else {
            if (this.state.selectedName === null){
            return (<div className='home'>
            <User/><MetricBoxes/><SidePanel selectedCity={this.state.selectedCity} selectedCompany={this.state.selectedCompany} selectedCountry={this.state.selectedCountry} selectedName={this.state.selectedName}/>
           <div className='employeeList'>
           <div className= 'dropImage'></div><div className= 'listHead'> Employees </div>
           <DropDownList employeeData={this.state.filteredByCity} onClick={this.onnameclick} selected="name" />
           </div></div>)
            }

           else {
            return (<div className='home'>
            <User/><MetricBoxes/><SidePanel selectedCity={this.state.selectedCity} selectedCompany={this.state.selectedCompany} selectedCountry={this.state.selectedCountry} selectedName={this.state.selectedName}/>
            </div>)

          }
          
        }
      }
      
    }  
    
  }
}

export default Layout;