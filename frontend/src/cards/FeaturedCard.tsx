interface FeaturedProps {
  name: string,
  screen: string,
  img?: string

}



const FeaturedCard: React.FC<FeaturedProps> = ({name, screen}) => {
  return (
    <div className="card card-compact h-[28rem] w-80 bg-base-100 shadow-xl">
      <figure >
        <img src="https://d1rlzxa98cyc61.cloudfront.net/catalog/product/1/7/173545_2020.jpg?auto=webp&format=pjpg&width=640" alt="Shoes" />
        </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="text-xl">{screen}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  )
}

export default FeaturedCard