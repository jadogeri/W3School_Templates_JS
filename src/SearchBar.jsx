
import React from 'react';
import "./styles.css"

const SearchBar = ({
	value,
	onChange,
	onClick
}) => {

  return (

    <>

<div className="search">
				<div className="search-form">
					<input type="text" placeholder="e.g chicken"  value={value}  onChange={onChange}/>
					<input type="submit" value="Submit" onClick={onClick}/>
				</div>
			
			</div>
</>


  );
}

export default SearchBar;






//   const handleInputChange = (event) => {
//     const { value } = event.target;
//     const lettersOnly = value.replace(/[^a-zA-Z]/g, '');
//     setInputValue(lettersOnly);
//   };

//   const handleSubmit = async () => {
//     try {
//       const response = await fetch('YOUR_API_ENDPOINT', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ data: inputValue }),
//       });

//       if (response.ok) {
//         console.log('Data sent successfully!');
//       } else {
//         console.error('Failed to send data.');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };


