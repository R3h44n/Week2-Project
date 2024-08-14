import React from 'react';

const Searchbar = () => {
    return (
        <form className='w-[500px] relative center'>
            <div className="relative">
                <input type="search" placeholder='Type Here' className='w-full p-4 
                rounded-full'/>
                <button className='absolute right-1 top-1/2 -translate-y-1/2'>
                </button>
            </div>
        </form>
    )
}

export default Searchbar;