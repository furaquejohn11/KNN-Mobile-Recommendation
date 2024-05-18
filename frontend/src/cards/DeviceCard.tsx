interface DeviceProps {
  id: number,
  brand: string,
  model: string,
  screen?: string,
  price: number,
}

const DeviceCard: React.FC<DeviceProps> = ({id, brand, model, price}) => {
  return (
    <div className="card w-72 bg-base-100 shadow-xl overflow-hidden">
        <div className=" flex justify-center w-full">
        <img src="https://d1rlzxa98cyc61.cloudfront.net/catalog/product/1/7/173545_2020.jpg?auto=webp&format=pjpg&width=640" 
          alt="Shoes"
          className="h-40" />
        </div>
        <div className="card-body">
          <h1 className=" hidden">{id}</h1>
            <h2 className="card-title">{`${brand} ${model}`}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
                <span className="flex items-center justify-between w-full">
                    <h2>{`PHP ${price}`}</h2>
                    <button className="btn btn-primary">Buy Now</button>
                </span>
            
            </div>
        </div>
    </div>
  )
}

export default DeviceCard