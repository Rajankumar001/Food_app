import axios from 'axios';
const baseUrl = "https://hungryfoodapp-api-1.onrender.com/";
export const OrderAction=(token,subTotal)=>async(dispatch,getState)=>{
dispatch({type:'ORDER_REQUEST'})
const Food=getState().CartReducer.Food;

const currentUser=getState().LoginReducer.currentUser
try{
    console.log("api is fetching")
 console.log('OrderAction - Sending Data:', { token, subTotal, currentUser, Food });
const res=await axios.post(`${baseUrl}api/placingorder/order`,{Food,currentUser,token,subTotal})
console.log("api do not working...")
console.log(res);
dispatch({type:'ORDER_SUCCESS',
    payload:res.data
})
console.log(res)
}
catch(err){
dispatch({type:'ORDER_FAIL'})
console.log(err)
}
}
export const Allorder=()=>async(dispatch,getState)=>{
    const currentUser=getState().LoginReducer.currentUser;
    dispatch({type:'ALL_ORDER_REQUEST'})
    try{
     const response=await axios.post(`${baseUrl}api/placingorder/getUserorder`,{userid:currentUser.currentUser._id})   
     console.log("response",response);
     dispatch({type:"ALL_ORDER_SUCCESS",payload:response.data})
    }catch(error){
        dispatch({type:'ALL_ORDER_FAIL',payload:error})
        console.log("error caught...",error)
    }
}
export const Alluserorder=()=>async(dispatch)=>{
    // const currentUser=getState().LoginReducer.currentUser;
    dispatch({type:'ALL_USERORDER_REQUEST'})
    try{
     const response=await axios.get(`${baseUrl}api/placingorder/alluserorder`)   
     console.log("response",response);
     dispatch({type:"ALL_USERORDER_SUCCESS",payload:response.data})
    }catch(error){
        dispatch({type:'ALL_USERORDER_FAIL',payload:error})
        console.log("error caught...",error)
    }
}