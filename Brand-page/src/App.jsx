import './App.css'

function App() {

  return <>
  <nav className="flex justify-between mx-16 my-4 content-center items-center">
      <img src="../assets/brand_logo.png" alt=" brand logo" className='w-20 h-14' />
    <div className="about no-underline text-sm font-bold text-">
      <a href=" #">MENU</a><a href="#">LOCATION</a><a href="#">ABOUT</a><a href="#">CONTACT</a>
    </div>
      <button type="submit" className='font-semibold px-4 py-1 border-2 bg-red-600 text-white rounded-md  hover:bg-red-800'>LOGIN</button>
  </nav>
  <div className='main flex justify-between content-center items-center mt-10'>
    <div className='w-1/2'>
      <div className='text-8xl font-bold'>
      <h1>YOUR FEET </h1>
      <h1>DESERVE </h1>
      <h1>THE BEST</h1>
      </div>
      <p className='w-2/3 mt-6 mb-6 text-sm font-semibold text-gray-500'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
      <div className='flex items-center content-start'>
        <button className='font-semibold bg-red-600  px-3 text-lg text-white'>Shop Now</button>
        <button className='font-semibold px-3 text-lg text-gray-600 border-2 mx-12'>Category</button>
      </div>
      <p className='text-sm text-gray-600 my-5'>Also Available On</p>
      <div className='flex items-center gap-4'>
        <img src="../assets/flipkart.png" alt="flipkart logo" />
        <img src="../assets/amazon.png" alt="amazon logo" />
      </div>
      </div>
      <div className='w-1/2 flex justify-center items-center content-center'>
        <img src="../assets/shoe_image.png" alt="shoe logo" className='w-4/5'/>
      </div>
  </div>

  </>
  
}

export default App
