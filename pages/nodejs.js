import React from 'react'
import MainContent from '../components/maincontent'
import SideMenu from '../components/sidemenu'
import axios from 'axios';

export default function Nodejs({posts}) {
    return (
        <>
            <SideMenu posts={posts} />
            <MainContent />
        </>
    )
}

export async function getStaticProps(){
  const postRes = await axios.get("http://localhost:1337/posts");
  return {
    props: {posts : postRes.data}
  }
}
