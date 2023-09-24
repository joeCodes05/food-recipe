import React from 'react'

const Hero = () => {
  return (
    <>
      <section className='flex h-screen w-screens items-center'>
        <div className='mx-auto max-w-7xl'>
         <div className="grid grid-cols-2">
          <div className='text-primary'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione provident autem dolorum pariatur voluptates facere sequi dolore! Dignissimos necessitatibus laudantium suscipit accusantium temporibus nihil aspernatur enim voluptatibus iste, ad quos?
          </div>
          <div className='text-gray-900'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates quibusdam tenetur doloribus pariatur nihil! Sequi excepturi facilis enim voluptate quos blanditiis aperiam, pariatur rerum nesciunt odit ullam assumenda eligendi corrupti!
          </div>
         </div>
        </div>
      </section>
    </>
  )
}

export default Hero