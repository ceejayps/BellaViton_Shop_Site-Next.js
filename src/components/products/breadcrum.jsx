import React from 'react'


const Breadcrum = () => {
  return (
    
   
    
   
   <section>
                <div className="bg-white items-center px-8 py-12 mx-auto max-w-7xl lg:px-16 md:px-12 lg:py-24">
                  <div className="justify-center w-full mx-auto">
                    <nav className="flex py-3 border-y" aria-label="Breadcrumb">
                      <ol role="list" className="flex items-center space-x-4">
                        <li>
                          <div className="flex items-center">
                            <a href="#" className="inline-flex items-center text-sm font-medium text-gray-500 duration-200 hover:text-gray-700 hover:scale-95">
                              {/* <ion-icon className="flex-shrink-0 w-4 h-4 md hydrated" name="home-outline" role="img" aria-label="home outline"></ion-icon> */}
                              <span className="ml-4">
                                Parent
                              </span>
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-center">
                            <span className="flex-shrink-0 w-5 h-5 text-gray-300">
                              /
                            </span>
                            <a href="#" className="ml-4 text-sm font-medium text-gray-500 hover:scale-95 hover:text-gray-700">
                              Parent
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-center">
                            <span className="flex-shrink-0 w-5 h-5 text-gray-300">
                              /
                            </span>
                            <a href="#" className="ml-4 text-sm font-medium text-gray-500 hover:scale-95 hover:text-gray-700">
                              Parent
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-center">
                            <span className="flex-shrink-0 w-5 h-5 text-gray-300">
                              /
                            </span>
                            <a href="#" className="ml-4 text-sm font-medium text-blue-500 hover:scale-95 hover:text-gray-700" aria-current="page">
                              Current
                            </a>
                          </div>
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </section>            

  )
}

export default Breadcrum