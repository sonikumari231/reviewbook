import React,{useState,useEffect} from 'react';
function App(){
  const[reviews,setReviews]=useState([]);
  const [newReview,setNewReview]=useState({
    title:'',
    author:'',
    rating:0,
    reviewText:'',
  });
  useEffect(()=>{
    fetch('/reviews')
    .then((response)=>response.json())
    .then((data)=>setReviews(data))
    .catch((error)=>console.error('Error',error));

  },[]);
  const handleInputChange=(e)=>{
    setNewReview({...newReview,[e.target.name]: e.target.value});
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    fetch('/reviews',{
      method:'POST',
    })
  }
}