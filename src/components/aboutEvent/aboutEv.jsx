const AboutEv = () => {
    return(
    <section className='bg-iblack h-auto'>
              <div className="grid grid-cols-10 pt-20">
                 <div className="md:col-start-3 md:col-end-4 xs:col-start-2 xs:col-end-3">
                 
                   <p className="xl:text-6xl lg:text-4xl md:text-3xl text-start xs:text-4xl sm:text-4xl font-medium text-iwhite break-normal font-wadik">ABOUT</p>
                                      
                 </div> 

                 <div className="md:col-start-4 lg:col-start-5 xl:col-start-5 md:col-end-6 xl:col-end-6 2xl:col-end-6 md:row-start-1 xs:row-start-2 xs:col-start-2 xs:col-end-3">
                      <p className="xl:text-6xl lg:text-4xl xl:text-start lg:text-start md:text-end xs:text-start md:text-3xl xs:text-4xl sm:text-4xl font-medium text-iwhite break-normal font-wadik xl:pl-4 2xl:pl-0">THE</p>
                 </div>

                 <div className="md:col-start-6 xl:col-start-6 xs:col-start-2 xs:col-end-10 md:col-end-10 row-span-3  text-start 2xl:text-3xl xl:text-3xl lg:text-lg md:text-sm sm:text-xs xs:text-xs text-igrey font-gilroylight  xs:pt-10 md:pt-0 md:pl-12 2xl:pl-5 ">
                                       <p >Chesstin is a chess competition on its second-year edition organized by ByteCraft and Sec. We welcome everyone to participate and challenge themselves. The event will consist of two phases, the first phase Thursday the 15th in Algiers and on Friday the 16th in Amizour, Bejaia. And the second phase (finals) will be held in Estin on the 17th                                                                                            
                                       </p>
                              
                 </div>

                 <div className="lg:col-start-3 md:col-start-3 xs:col-start-4 row-start-2  ">
                 <p className="xs:text-start md:text-start xl:text-6xl lg:text-4xl md:text-3xl xs:text-4xl sm:text-4xl font-medium text-irouge">EVENT</p>
                </div>
                 
                <div className="xs:col-start-2 md:col-start-3 container row-start-5 h-13"> </div>
                <div className="xs:col-start-2 md:col-start-3 col-end-10 pt-20">
                <img src ={require('../../assets/chess1.png')} className='flex h-710 xs:h-400 xs:h-50' alt="..." />
                </div>

                
              </div>
    </section>
    )
    
    }
    export default AboutEv