import React from 'react';
import Country from '../../components/Country';

const Countries = () => {
  return (
    <section>
        <div className="w3-container">
            <h5>Countries</h5>
            <table className="w3-table w3-striped w3-bordered w3-border w3-hoverable w3-white">
                <tbody>
                    <Country 
                        name="United States" value="65%"                    
                    />
                    <Country 
                        name="UK" value="15.7%"                    
                    />
                    <Country 
                        name="Spain" value="5.6%"                    
                    />
                    <Country 
                        name="Russia" value="2.1%"                    
                    />
                    <Country 
                        name="India" value="1.9%"                    
                    />
                    <Country 
                        name="France" value="1.5%"                    
                    />
                </tbody>
            </table>
             <br />
            <button className="w3-button w3-dark-grey">
            More Countries &nbsp;
                <i className="fa fa-arrow-right" />
            </button>
      ``</div>
      
    </section>
  );
}

export default Countries;
