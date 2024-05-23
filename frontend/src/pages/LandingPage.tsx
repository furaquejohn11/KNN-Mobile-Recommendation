import NavBar from "../components/NavBar"
import DeviceCard from "../cards/DeviceCard"

const LandingPage = () => {
    return (
        <div>
          <header className="sticky top-0 z-10">
            <NavBar />
          </header>
    
          <main className="flex-1">
            {/* First Section */}
            <section className="flex justify-center w-full py-12 md:py-24 lg:py-32 xl:py-48">
                <div className="container px-4 md:px-6">
                  <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                    <img
                      alt="Hero"
                      className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                      height="550"
                      src="https://compasia.com.ph/cdn/shop/files/iphone-13-pro-compasia-philippines-1.jpg?v=1685505286"
                      width="550"
                    />
                    <div className="flex flex-col justify-center space-y-4">
                      <div className="space-y-2">
                        <h1 className="text-3xl text-black font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                          Find Your Perfect Phone
                        </h1>
                        <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                          Discover the latest and greatest smartphones on the market. Our phone recommender helps you find the
                          perfect device for your needs.
                        </p>
                      </div>
                      <div className="flex flex-col gap-2 min-[400px]:flex-row">
                        <a
                          className="inline-flex h-10 items-center justify-center rounded-md border text-white border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                          href="/home"
                        >
                          View Phones
                        </a>
                        {/* <a
                          className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                          href="#"
                        >
                          Find Your Phone
                        </a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
    
              {/* Second Section */}
              <section className="flex justify-center w-full py-12 md:py-24 lg:py-32 bg-gray-100">
                <div className="container px-4 md:px-6">
                  <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                      <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">
                        Featured Phones
                      </div>
                      <h2 className="text-3xl text-black font-bold tracking-tighter sm:text-5xl">Discover the Best Phones</h2>
                      <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        Browse our selection of the latest and greatest smartphones from top brands like Apple, Samsung,
                        Google, and more.
                      </p>
                    </div>
                  </div>
                  {/* <div className="mx-auto grid max-w-5xl items-center py-12 grid-cols-4 gap-6"> */}
                  <div className="display flex justify-center p-6 gap-4">
                    <DeviceCard id={0}
                                brand={'iPhone'} 
                                model={'13 Pro Max'} 
                                price={65000} 
                                img={'https://cdn.shopify.com/s/files/1/0183/5769/products/Proper-web-images-2021-_0003s_0001s_0000_13ProMax-Graphite.png?v=1631856416'}
                                displaySpec={'6.7-inch Super Retina XDR display'}
                                ram={6}
                                storage={128}
                                battery={4000}
                                shopLink="https://shopee.ph/iPhone-13-Pro-Max-Alpine-Green-(128GB-256GB-512GB-1TB)-i.350609763.16641381578?sp_atk=20c424d9-c4bf-411d-aa32-e6e5f5f44070" />

                    <DeviceCard id={1} 
                                brand={'Google'} 
                                model={'Pixel 4a'} 
                                price={15000} 
                                img={'https://tse3.mm.bing.net/th?id=OIP.0SHUrLxo5YWVZVlScCx0tAAAAA&pid=Api'}
                                displaySpec={'5.81-inch OLED display'}
                                ram={6}
                                storage={128}
                                battery={3140}
                                shopLink="https://shopee.ph/Google-Pixel-4a-4G-5G-LTE-Original-Mobile-Phone-6GB-128GB-12.2MP-Snapdragon-730G-Octa-Core-CellPhone-Andorid-10-LTE-SmartPhone-Used-95-new-i.803836192.24073842260?sp_atk=f4f20b20-258c-4d72-ad7e-6880432d54f8&xptdk=f4f20b20-258c-4d72-ad7e-6880432d54f8" />

                    <DeviceCard id={2} 
                                brand={'OnePlus'} 
                                model={'Nord N10 5G'} 
                                price={11500} 
                                img={'https://images.anandtech.com/doci/15922/1-m00-15-d2-rb8lb18cw9kapfouaawjvqw4rbo469_840_840_678x452.png'}
                                displaySpec={'6.49-inch IPS LCD display'}
                                ram={6}
                                storage={128}
                                battery={4300}
                                shopLink="https://www.amazon.com/OnePlus-Unlocked-Smartphone-Midnight-BE2026/dp/B08R7D4KZJ" />

                  </div>
              </div>
            </section>
          </main>
    
          <footer className="footer footer-center p-4 bg-white text-base-content">
            <aside>
              <p>Copyright © 2024 - All right reserved by BSCS-2B Group 2</p>
            </aside>
          </footer>
    
    
        </div>
      )
    }

export default LandingPage