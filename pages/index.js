import axios from 'axios';
import React, { useEffect, useState } from 'react'
const index = () => {
  useEffect(()=>{
    axios.get('/api/hello').then(res=>{
      if(res.data.name=='John Doe')
      {
        alert('Crone-Job working after every minute');
      }
  });
  },[])
  return (
    <div>index</div>
  )
}

export default index