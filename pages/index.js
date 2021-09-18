import React from 'react';
import axios from 'axios';

export default function Home({categories}) {
  return <> 
    <h1>Home Page</h1> 
  </>
  
}

// export async function getStaticProps(){
//   const cateRes = await axios.get("http://localhost:1337/categories");
//   return {
//     props: {categories : cateRes.data}
//   }
// }
