import { useEffect, useState } from "react";
import { RestaurantCard } from "./RestaurantContainer";
import restaurants from "../../../utils/restaurants";
import Shimmer from "./ShimmerUI";



const BodyComponent = () => {
  useEffect(() => {
  async function fetchData() {
    try {
      const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.02760&lng=72.58710&collection=80417&tags=layout_BAU_Contextual%2Cvada_pav&sortBy=&filters=&type=rcv2&offset=0&page_type=null');
      // const response = await fetch('https://namastedev.com/api/v1/listRestaurants');
      const res = await response.json()
      console.log('kyu',res.data.cards[2].card.card.info)
      const swiggyRes = res.data.cards.filter(item =>{
        if(item?.card?.card?.info){
          const object = item?.card?.card?.info
          return object
        }
      })
      const finalRes = swiggyRes.map(item=> ({info : item?.card?.card?.info}));
      console.log(finalRes)
      setRest(finalRes)
      setActualRest(finalRes)

    } catch (e) {
      console.log(e)
    }
  }
     fetchData();
    console.log("useEffect called");
  }, []);


  console.log('RENDERR');
  // const [rest, setRest] = useState(restaurants)
  const [rest, setRest] = useState([])
  const [actualRest, setActualRest] = useState([])
  const [isClick, setIsClick] = useState(true)
  const [loading, setLoading] = useState(true)
  const [searchText, setSearchText] = useState('')
  
  // conditional rendering
//   if(rest.length === 0) {
// if (loading) {
//     return (
//       /**old way bwlow */
//       // <div style={{ padding: '20px', textAlign: 'center' }}>
//       //   <Loader />
//       //   <p>Loading data...</p>
//       // </div>
//       // new way shimmer container
//       <Shimmer />
//     );
//   }
    
//   }
  return  rest.length === 0 ?  <Shimmer /> : (
    <div className="body-component">
      {/* <FilterSearch/>
      <RestroContainerComponent /> */}

      {console.log("BodyComponent rendered")}
      {/* Filter And search embedded together for better UI */}
      <div className="filter-search" id="common-btn">
        {/* search Start */}
        <div className="search">
          <input className="search-input" type="text" placeholder="Search" value={searchText} onChange={(e)=>{
            setSearchText(e.target.value)
         setRest(actualRest.filter(item=>item.info.name.toLowerCase().includes(searchText.toLowerCase()))) // if we use rest then we will always get modifieed value for ex: If we search for "Burger" then it will always show Burger or even used filtered button

           
          }}/>
          {/* <button className="search-btn" onClick={() => {
            console.log(searchText)
            setRest(actualRest.filter(item=>item.info.name.toLowerCase().includes(searchText.toLowerCase()))) // if we use rest then we will always get modifieed value for ex: If we search for "Burger" then it will always show Burger or even used filtered button
          }}>Search</button> */}
        </div>
        {/* Filter Button Start */}
        <div className="filter-btn-cmp">
          <button className="fiter-btn" id="common-btn" onClick={() => {

            console.log('Button Clicked!', isClick)
            isClick=== true ?   setRest(rest.filter(item=>item.info.avgRating >= 4.7)) : setRest(actualRest)
            setIsClick(!isClick)
            console.log('Changed is Filter')
          }}> Filter Via Rating </button>
        </div>


      </div>
{/*body Start */}

   <div className="res-container">
    {rest.map((item) => {
        return (
          <RestaurantCard
            key={item.info.id}
            {...item.info}
          />
        ) ;
      })} 
      
    </div>

    </div>
  );
};


export default BodyComponent;