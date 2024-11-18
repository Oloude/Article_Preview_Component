 import drawerImage from '../assets/drawers.jpg'

function Image() {
  return (
    <div className='h-72 rounded-t-2xl lg:rounded-bl-2xl lg:rounded-tr-0 lg:basis-1/3'><img src={drawerImage} alt="drawer"  className='block w-full h-full rounded-t-2xl lg:rounded-bl-2xl lg:rounded-tr-none object-fill'/></div>
  )
}

export default Image