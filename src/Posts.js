import React from 'react'




    const Posts = ({ posts, loading }) => {
        if (loading) {
            return <h2>Loading...</h2>;
          }
        return (
            <div className=" -mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
      <table class=" w-80 leading-normal ">
        <thead>
        <tr>
                  <th>#</th>
                  <th>NAME</th>
                  <th>PRICE</th>
                  <th>24H</th>
          <th>7D</th>
          <th>MARKET CAP</th>
          <th>VOLUME</th>
          <th>CIRCULATING</th>
          
              </tr>

                        </thead>
                        <tbody>

                            {posts.map((item, i) => (
                
                <tr key={i}>
                    <td>{i + 1}</td>
                    <td>
                        <div className="flex flex-row">
                            <div>
                                <img src={item.image}></img>
                            </div>
                            <div>
                                {item.name}

                            </div>

                        </div>
          
                    </td>
                    <td>{item.current_price}</td>
                    <td>{item.price_change_percentage_24h_in_currency}</td>
                    <td>{item.price_change_percentage_7d_in_currency}</td>
                    <td>{item.market_cap_change_24h}</td>
                    <td>{item.total_volume}</td>
                    <td>{item.circulating_supply}</td>
                </tr>
            ))}
      
        </tbody>
        
        
          </table>
        </div>
        </div>
            
            
            
    
        )
    };

    export default Posts;