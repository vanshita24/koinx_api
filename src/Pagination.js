import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

    return (
        <div className="flex">

            {pageNumbers.map(number => (
                <div>
                    <button className="w-8 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent rounded" onClick={() => paginate(number)}>{number}</button>
                </div>
        ))}
            
       </div>
        
        
        /* <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='w-8 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent rounded'>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav> */
      
     
  );
};

export default Pagination;