const Collabo = () => {
    return(
    <section className='bg-iblack'>
              <div className="grid sm:gaps-y-40 grid-cols-10 pt-40">
                 <div className="md:col-start-3 xs:col-start-2">
                 
                 <p className="font-wadik xl:text-6xl lg:text-3xl md:text-3xl xs:text-4xl sm:text-4xl text-start font-medium text-iwhite break-normal">THE</p>
                                      
                 </div> 

                 <div className="md:col-start-3 md:col-span-3 xs:col-span-8 xs:row-start-2 xs:col-start-2 pb-10">
                 <p className="text-start xl:text-6xl lg:text-3xl md:text-3xl xs:text-4xl sm:text-4xl font-medium text-irouge font-wadik">COLLABORATION</p>
                 </div>

                 <div className="md:col-start-3 xs:col-start-2 xs:col-end-5 md:col-end-6 row-span-3 xs:pb-10 ">
                 <div className=' container xs:text-center md:text-center xl:text-3xl lg:text-lg md:text-md sm:text-xs xs:text-xs  text-igrey'>
                                     <p> ByteCraft is scientific club that is hosted by (ESTIN Amizour) and that was officially opened to the world on October 25th 2021,its aim is to make events, conferences and workshops unrelated and especially related to tech.</p>
                                 </div>
                              
                 </div>

                 <div className="md:col-start-6 xs:col-start-5 xs:col-end-9 md:col-end-10 row-span-3 pl-10 xs:pb-10 ">
                 <img src ={require('../../assets/chess2.png')} className=' h-710' alt="..." />
                </div>
                 
                <div className="col-start-1 col-end-10 container row-start-5 h-13"> </div>


                <div className="md:col-start-3 xs:col-start-2 xs:col-end-5 md:col-end-6 row-span-3 xs:pt-5 md:pt-20 ">
                <img src ={require('../../assets/chess3.png')} className='flex-1 h-auto' alt="..." />
                </div>

                <div className="md:col-start-6 xs:col-start-5 xs:col-end-9 md:col-end-10 row-span-3 text-start xl:text-3xl lg:text-lg md:text-md sm:text-xs xs:text-xs  text-igrey  h-710  w-100 pl-10 md:pt-20">

                <p> Sports & Entertainment Club is a sports club created in november 2021 by passionate students of ESI ALGEIRS. In its first year, SEC organized events for a better students lifestyle starting with Chess Break:a competition for chess lovers. And many others.</p>
               </div>
                
              </div>
    </section>
    )
    
    }
    export default Collabo