interface FeaturedProps {
  id: number,
  brand: string,
  model: string,
  screen?: string,
  img_link: string,
  price: number,
}

const FeaturedCard: React.FC<FeaturedProps> = ({id, brand, model, img_link, price}) => {
  return (
    <div className="card w-72 bg-base-100 shadow-xl overflow-hidden">
        <div className=" flex justify-center w-full">
        <img src={img_link} 
          alt="Phone"
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

export default FeaturedCard