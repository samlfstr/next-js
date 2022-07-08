import Link from "next/link";

export default function Cards({title, content, link}){
    return(
      <section className="text-gray-600 body-font my-5">
          <div className="container px-5 py-0 mx-auto">
              <div className="flex flex-wrap -m-4">
                  <div className="p-4 md:w-1/3">
                      <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                          <div className="flex items-center mb-3">
                              <div
                                className="
                               w-8 h-8 mr-3
                               inline-flex
                               items-center
                               justify-center
                               rounded-full
                               bg-indigo-500
                               text-white
                               flex-shrink-0
                               sm:w-15 sm:order-none order-first sm:h-15 animate-bounce  h-15 w-15 sm:ml-1 inline-flex items-center justify-center rounded-full bg-indigo-700 text-white flex-shrink-0
                               ">
                                  <svg fill="none" stroke="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                  </svg>
                              </div>
                              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">{title[0]}</h2>
                          </div>
                          <div className="flex-grow">
                              <p className="leading-relaxed text-base">{content[0]}</p>
                              <Link href={"/"+link[0]}><a className="mt-3 text-indigo-500 inline-flex items-center">Example
                                  <svg fill="none" stroke="currentColor"
                                       className="w-4 h-4 ml-2 w-4 animate-ping h-4 ml-2" viewBox="0 0 24 24">
                                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                                  </svg>
                              </a></Link>
                          </div>
                      </div>
                  </div>
                  <div className="p-4 md:w-1/3">
                      <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                          <div className="flex items-center mb-3">
                              <div
                                className="
                               w-8 h-8 mr-3
                               inline-flex
                               items-center
                               justify-center
                               rounded-full
                               bg-indigo-500
                               text-white
                               flex-shrink-0
                               sm:w-15 sm:order-none order-first sm:h-15 animate-bounce  h-15 w-15 sm:ml-1 inline-flex items-center justify-center rounded-full bg-indigo-700 text-white flex-shrink-0
                               ">
                                  <svg fill="none" stroke="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                      <circle cx="12" cy="7" r="4"></circle>
                                  </svg>
                              </div>
                              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">{title[1]}</h2>
                          </div>
                          <div className="flex-grow">
                              <p className="leading-relaxed text-base">{content[1]}</p>
                              <Link href={"/"+link[1]}><a className="mt-3 text-indigo-500 inline-flex items-center">Example
                                  <svg fill="none" stroke="currentColor"
                                       className="w-4 h-4 ml-2 w-4 animate-ping h-4 ml-2" viewBox="0 0 24 24">
                                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                                  </svg>
                              </a></Link>
                          </div>
                      </div>
                  </div>
                  <div className="p-4 md:w-1/3">
                      <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                          <div className="flex items-center mb-3">
                              <div
                                className="
                               w-8 h-8 mr-3
                               inline-flex
                               items-center
                               justify-center
                               rounded-full
                               bg-indigo-500
                               text-white
                               flex-shrink-0
                               sm:w-15 sm:order-none order-first sm:h-15 animate-bounce  h-15 w-15 sm:ml-1 inline-flex items-center justify-center rounded-full bg-indigo-700 text-white flex-shrink-0
                               ">
                                  <svg fill="none" stroke="currentColor" className="w-5 h-5 w-4" viewBox="0 0 24 24">
                                      <circle cx="6" cy="6" r="3"></circle>
                                      <circle cx="6" cy="18" r="3"></circle>
                                      <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                  </svg>
                              </div>
                              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">{title[2]}</h2>
                          </div>
                          <div className="flex-grow">
                              <p className="leading-relaxed text-base">{content[2]}</p>
                              <Link href={"/"+link[2]}><a className="mt-3 text-indigo-500 inline-flex items-center">Example
                                  <svg fill="none" stroke="currentColor"
                                       className="w-4 h-4 ml-2 w-4 animate-ping h-4 ml-2" viewBox="0 0 24 24">
                                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                                  </svg>
                              </a></Link>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    )
}