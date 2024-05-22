interface DeviceProps {
  id: number,
  brand: string,
  model: string,
  displaySize?: string,
  price: number,
  img: string,
  displaySpec: string,
  ram : number,
  storage : number,
  battery : number
  shopLink: string,
}

const DeviceCard: React.FC<DeviceProps> = ({id, brand, model, price, img, displaySpec, ram, storage, battery, shopLink}) => {
  return (
    <div className="card w-80 bg-base-100 shadow-xl overflow-hidden">
        <div className=" flex justify-center w-full">
        <img src={img}
          alt="Shoes"
          className="h-44" />
        </div>
        <div className="card-body gap-0">
            <h1 className=" hidden">{id}</h1>
            <h2 className="card-title pb-2">{`${brand} ${model}`}</h2>
            <p>{displaySpec}</p>
            <p>{`${ram}GB RAM ${storage}GB Storage`}</p>
            <p>{`${battery} mAh`}</p>
            <div className="card-actions justify-end pt-4">
                <span className="flex items-center justify-between w-full">
                    <h2>{`PHP ${price}`}</h2>
                    <a href={shopLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Buy Now</a>
                </span>
            
            </div>
        </div>
    </div>
  )
}

export default DeviceCard