
interface MobileProps {
    id: number,
    brand: string,
    model: string,
    screen?: string,
    price: number,
}


const MobileCard: React.FC<MobileProps> = ({id, brand, model, price}) => {
    return (
      <div className="card w-72 bg-base-100 shadow-xl overflow-hidden">
          <div className=" bg-yellow-400 w-full h-44">
  
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

export default MobileCard