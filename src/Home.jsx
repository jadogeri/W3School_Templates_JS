import React from 'react'
import WebPage from './WebPage';
import {websiteArray } from './websites';
import SearchBar from './SearchBar';
import { useState } from 'react';

const Home = () => {
  const [websites, setWebsites] = useState(websiteArray);
  const [input, setInput] = useState("");

  const handleInputChange = (event)=>{
    const { value } = event.target;
    console.log("value ====",value)
    setInput(value);

  }
  return (
<>

<SearchBar  value={input}
                 onChange={handleInputChange}/>
                 <div className='w3-flex w3-container'>
    {websites.map((website, index)=>{
      
      if(website.alt.toLowerCase().includes(input.toLowerCase()) || input.trim().length ===0)
      return <WebPage 
                alt={website.alt} src={website.src} route={website.route} key={index}
                style={{}} className=''
              />

    })}</div>
    <>{input}</>
</>

  )
}

export default Home

/**
 * 




import React, { useState, useEffect } from 'react'
import { Context as AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';
import SideBarMenu from './SideBarMenu';
import AppHeader from './AppHeader';
import AppBarMenu from './AppBarMenu';
import Spacer from '../../components/Spacer';
import SearchBar from '../../components/SearchBar/SearchBar';
import useResults from '../../hooks/useResults';
import BusinessCard from '../../components/BusinessCard';
import { useGetAllBusinessesQuery } from '../../redux/api/business/business';
import NavBar from '../../layouts/NavBar';
import { useNavigate } from 'react-router-dom';

const DashBoard = ({
  state
}) => {
    
      const [searchApi, results, errorMessage] = useResults();
      const [inputValue, setInputValue] = useState('');
      const [selectedPrice, setSelectedPrice] = useState(null);
      const [selectedRating, setSelectedRating] = useState(null);
      const [selectedDelivery ,setSelectedDelivery] = useState(false);
      const [selectedPickup ,setSelectedPickup] = useState(false);
      const { data, refetch, error, isError, status} = useGetAllBusinessesQuery()
      const { signOut } = useContext(AuthContext);
      const navigate = useNavigate();
 
        const [businesses, setBusinesses] = useState([])  
        console.log("status===========================================================================",status)
 
        useEffect(()=>{
          if(data){
            setBusinesses(data)
          }
          
       
        },[data])

      // ----------- Radio Filtering -----------


      const handleRatingChange = (event) => {
        const rating = event.target.value;
        setSelectedRating(rating);
      };
    
      const handlePriceChange = (event) => {
        const price = event.target.value;
        setSelectedPrice(price);
      };

      const handleDeliveryChange = (event) => {
        const delivery = event.target.checked;
        console.log("deliver========",delivery)
        setSelectedDelivery(delivery)
      };

      const handlePickupChange = (event) => {
        const pickup = event.target.checked;
        console.log("pickup========",pickup)

        setSelectedPickup(pickup)
      };

      // ------------ Button Filtering -----------
        
      function filteredData(businesses, selected, query) {
        const {selectedRating, selectedPrice, selectedDelivery, selectedPickup} = selected
        console.log(selectedPrice, selectedRating, selectedDelivery, selectedPickup)
        console.log(businesses.length)
        let filteredBusinesses = businesses;
    
          // Applying selected rating filter
          if (selectedRating ) {
            filteredBusinesses = filteredBusinesses.filter(business => selectedRating == Math.floor(business.rating) );
          }

          if (selectedPrice ) {
            filteredBusinesses = filteredBusinesses.filter(business => selectedPrice == business.price );
          }

          if (selectedDelivery ) {
            filteredBusinesses = filteredBusinesses.filter(business => business.transactions.includes("delivery") );
          }

          if (selectedPickup ) {
            filteredBusinesses = filteredBusinesses.filter(business => business.transactions.includes("pickup") );
          }
          console.log("selected after rating filter length ===", filteredBusinesses.length)
    
        return filteredBusinesses

      }    
       let allSelected = {selectedRating, selectedPrice, selectedDelivery, selectedPickup}
    
      // //const result = filteredData(products, selectedCategory, query);
      const filteredBusinesses = filteredData(results, allSelected, inputValue);
 
      const handleInputChange = (event) => {
        const { value } = event.target;
        console.log("value ====",value)
        //const lettersOnly = value.replace(/[^a-zA-Z]/g, '');
        setInputValue(value);
      };

      const handleSubmit = () => {
        console.log("pressing hanlde submit")
        //alert("pressing hanlde submit")
        console.log("input value to search api =====",inputValue)
        searchApi(inputValue);
      };
   
  return (
    <>
    <NavBar state={state}/>

  <SideBarMenu handlePriceChange={handlePriceChange} handleRatingChange={handleRatingChange}
    handleDeliveryChange={handleDeliveryChange} handlePickupChange={handlePickupChange}
    delivery={selectedDelivery} pickup={selectedPickup}
  />
  <AppHeader />

  <AppBarMenu/>

  <div className="w3-main" style={{ marginLeft: 250 }}>
  <Spacer  paddingTop={100}/>

<div>{JSON.stringify(businesses,null,2)}</div>


  
    <div className="w3-hide-large" style={{ marginTop: 83 }} />
    <header className="w3-container w3-xlarge">
      <div className="w3-right">
        <SearchBar  value={inputValue}
                 onChange={handleInputChange}
                 onClick={()=>{handleSubmit()}}/>
      </div>
    </header>

    <div className="w3-container" id="jeans">
      <p>{filteredBusinesses.length} results</p>

    </div>
    <div className="w3-row">      
      {
        
        filteredBusinesses.map((record)=>{
          return <BusinessCard name={record.name} image_url={record.image_url} price={record.price}
                   rating={record.rating} location={record.location} record={record}
                   display_phone={record.display_phone} transactions={record.transactions} id={record.id}
                   is_closed={record.is_closed} reviews={record.review_count}

                   key={record.id} businesses={businesses} refetch={refetch}
            />
        })
      }



  


















 */