import NavBar from "../components/NavBar"

const LandingPage = () => {
    return (
        <div>
          <header>
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
                        <a
                          className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                          href="#"
                        >
                          Get Recommendation
                        </a>
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
                <div className="mx-auto grid max-w-5xl items-center py-12 grid-cols-4 gap-6">
                 
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                    <img
                      alt="iPhone 13 Pro"
                      className="w-full h-48 object-cover"
                      height="310"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "550/310",
                        objectFit: "cover",
                      }}
                      width="550"
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-bold mb-2">iPhone 13 Pro</h3>
                      <p className="text-gray-500 dark:text-gray-400 mb-4">
                        6.1-inch Super Retina XDR display, A15 Bionic chip, 12MP triple-camera system
                      </p>
                      <a
                        className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                        href="#"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                    <img
                      alt="Samsung Galaxy S22 Ultra"
                      className="w-full h-48 object-cover"
                      height="310"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "550/310",
                        objectFit: "cover",
                      }}
                      width="550"
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-bold mb-2">Samsung Galaxy S22 Ultra</h3>
                      <p className="text-gray-500 dark:text-gray-400 mb-4">
                        6.8-inch Dynamic AMOLED 2X display, Snapdragon 8 Gen 1 chip, 108MP quad-camera system
                      </p>
                      <a
                        className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                        href="#"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                    <img
                      alt="Google Pixel 6 Pro"
                      className="w-full h-48 object-cover"
                      height="310"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "550/310",
                        objectFit: "cover",
                      }}
                      width="550"
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-bold mb-2">Google Pixel 6 Pro</h3>
                      <p className="text-gray-500 dark:text-gray-400 mb-4">
                        6.7-inch QHD+ OLED display, Google Tensor chip, 50MP triple-camera system
                      </p>
                      <a
                        className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                        href="#"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                    <img
                      alt="OnePlus 10 Pro"
                      className="w-full h-48 object-cover"
                      height="310"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "550/310",
                        objectFit: "cover",
                      }}
                      width="550"
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-bold mb-2">OnePlus 10 Pro</h3>
                      <p className="text-gray-500 dark:text-gray-400 mb-4">
                        6.7-inch QHD+ AMOLED display, Snapdragon 8 Gen 1 chip, 48MP triple-camera system
                      </p>
                      <a
                        className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                        href="#"
                      >
                        Learn More
                      </a>
                    </div>
                    
                  </div>
                  {/* <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                      Personalized Phone Recommendations
                    </h2>
                    <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                      Not sure which phone is right for you? Our phone recommender tool can help you find the perfect device
                      based on your needs and preferences.
                    </p>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                      <a
                        className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                        href="#"
                      >
                        Get Recommendation
                      </a>
                      <a
                        className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                        href="#"
                      >
                        View All Phones
                      </a>
                    </div>
                  </div> */}
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