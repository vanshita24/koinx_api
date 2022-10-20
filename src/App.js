import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Article from './Article';
import Posts from './Posts';

import "./tabledata.css"
import Pagination from './Pagination';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&amp;order=market_cap_desc&amp;per_page=100&amp;page=1&amp;sparkline=false&amp;price_change_percentage=24h%2C7d');
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);


  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);


  const paginate = pageNumber => setCurrentPage(pageNumber);


  return (
    <>
      
      <nav class="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg">
<div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
  <div class="container-fluid">
            <a class="text-xl text-black font-semibold" href="#">Crypto Tracker</a>
            
              
              
            
            {/* <div className='w-3/12 flex justify-end'>
            <div class="space-y-2 ">
  <div class="w-8 h-0.5 bg-gray-600"></div>
  <div class="w-8 h-0.5 bg-gray-600"></div>
  <div class="w-8 h-0.5 bg-gray-600"></div>
</div>
          </div>*/}
          
          </div> 
            
          
         
          
</div>
</nav>
      
      <div className="flex flex-col ">
        
        <div className="bg-gray-200 min-w-full">
          <div className='p-20'>
            
           <div className="grid  md:grid-cols-1 lg:grid-cols-3 gap-2 sm:grid-cols-1">
            
            <Article />
            <Article />
            <Article/>
          </div> 
    
          <div><h1 className="text-3xl p-5 mt-12 ">Top 100 Cryptocurrencies by  Market Cap</h1></div>

          <div className='flex flex-wrap'>
            <div className='p-2'>
            <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <span>Download</span>
            </button>
            </div>
          
            <div className='p-2'>
            <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <span>Download</span>
            </button>
            </div>
            <div className='p-2'>
            <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <span>Download</span>
            </button>
            </div>
            <div className='p-2'>
            <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <span>Download</span>
            </button>
            </div>

          </div>
          </div>
        
          
        </div>

        
          

       
        
      
      
        <div className='flex justify-center'>
        <div className=" -mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <Posts posts={currentPosts} loading={loading} />
            <div>
              <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
            </div>
            
        </div>
        </div>
      </div>
      
        </div>
      
          

      </>
  );





}
  export default App;




