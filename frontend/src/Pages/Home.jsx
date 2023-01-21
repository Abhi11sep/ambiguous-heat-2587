import React from 'react'
import img1 from '../Assests/appo1.jpg'
import img2 from '../Assests/appo2.jpg'
import picA from '../Assests/picA.png'
import picB from '../Assests/picB.png'
import picC from '../Assests/picC.png'
import picD from '../Assests/picD.png'
import plane from '../Assests/plane.png'
import CarouselCard from '../Components/CarouselCard'
import SliderCard from '../Components/SliderCard'
import SliderShow1 from '../Components/SliderShow1'
import './Home.css'

const Home = () => {
  return (
    <div className='wholehome'>
      <SliderShow1/>

      <div className="grid-container">
        <img className="item1" src='https://cdn.caratlane.com/media/static/images/V4/2023/Shaya/01-JAN/19/Responsive-banner.jpg' alt='img1'></img>
        <img className="item2" src='https://cdn.caratlane.com/media/static/images/V4/2022/CL/10-OCT/CityBanner/05/Coimbatore%202.jpeg' alt='img2'></img>
        <img className="item3" src='https://cdn.caratlane.com/media/static/images/V4/2023/CL/01-JAN/AppBanner/Harry/1X.jpg' alt='img3'></img>
      </div>
      <div className='category'>
        <div><img src='https://cdn.caratlane.com/media/static/images/V4/2022/CL/12-DEC/HP-Banner/6tile/01/Desktop_5.jpg' alt='image1' /></div>
        <div><img src='https://cdn.caratlane.com/media/static/images/V4/2022/CL/12-DEC/HP-Banner/6tile/01/Desktop_1.jpg' alt='image2' /></div>
        <div><img src='https://cdn.caratlane.com/media/static/images/V4/2022/CL/12-DEC/HP-Banner/6tile/01/Desktop_2.jpg' alt='image3' /></div>
        <div><img src='https://cdn.caratlane.com/media/static/images/V4/2022/CL/12-DEC/HP-Banner/6tile/01/Desktop_3.jpg' alt='image4' /></div>
        <div><img src='https://cdn.caratlane.com/media/static/images/V4/2022/CL/12-DEC/HP-Banner/6tile/01/Desktop_7.jpg' alt='image5' /></div>
        <div><img src='https://cdn.caratlane.com/media/static/images/V4/2022/CL/12-DEC/HP-Banner/6tile/01/Desktop_6.jpg' alt='image6' /></div>
      </div>
      <div className='collection'>
        <div style={{ marginTop: '60px' }}><img src='https://cdn.caratlane.com/media/static/images/V4/2022/CL/12-DEC/HP-Banner/Collection/02/Collection_Borla.jpg' alt='image1' /></div>
        <div><img src='https://cdn.caratlane.com/media/static/images/V4/2022/CL/12-DEC/HP-Banner/Collection/02/Collection_Mogra.jpg' alt='image2' /> <button class="border-gradient border-gradient-purple">View All Collections</button></div>
        <div style={{ marginTop: '60px' }}><img src='https://cdn.caratlane.com/media/static/images/V4/2022/CL/12-DEC/HP-Banner/Collection/02/Collection_Harmony.jpg' alt='image3' /></div>
      </div>
      <div className='sale'>
        <div><img src='https://cdn.caratlane.com/media/static/images/V4/2022/CL/12-DEC/AppBanner/Personal/03/2X.jpg' alt='image1' /></div>
        <div><img src='https://cdn.caratlane.com/media/static/images/V4/2023/CL/01-JAN/AppBanner/Offer/02/2x.jpg' alt='image2' /></div>
        <div><img src='https://cdn.caratlane.com/media/static/images/V4/2023/CL/01-JAN/HP-Banner/RTS/2x.gif' alt='image3' /></div>
        <div><img src='https://cdn.caratlane.com/media/static/images/V4/2023/CL/01-JAN/AppBanner/Sale/01/2x.gif' alt='image4' /></div>
      </div>
      <div className='try'>
        <div className='appoint'>
          <div >
            <img src={img1} alt='image3' />
            <div className='appoint1'><h1>Not Sure Which Design <br />To Pick?</h1>
              <p>Book A FREE Home Trial!</p>
              <button>Schedule Appointment</button>
            </div>
          </div>
          <div><img src={img2} alt='image4' />
            <div className='appoint2'><h1>Come visit us at any of <br />our stores!</h1>
              <select>
                <option>Enter City</option>
                <option>Delhi</option>
                <option>Lucknow</option>
                <option>Kolkata</option>
                <option>Mumbai</option>
                <option>Banglore</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className='goldup'>
        <div className='gold'>
          <img src='https://cdn.caratlane.com/media/static/images/V4/2022/CL/11-NOV/Others/13/OLD-GOLD_.png' alt='img2' />
          <div className='gold1'><h1>Your precious gold. Our new designs!</h1>
            <p>-A gold Exchange Program that lets you preserve your memories and make new ones! Please note: The old gold doesn't have to be form only CaratLane, it can be any gold jwellery you have</p>
            <button>Know More</button>
          </div>
        </div>
      </div>
      <div className='trust'>
        <div className="trust1">
          <h2>Assurance of Quality</h2>
          <h1>The Spirit of Crystal & Gold</h1>
          <p>The highest quality of craftsmanship and innovation,
            that brings you modern, everyday designs.</p>
          <button className='border-gradient border-gradient-purple'>Know More</button>
        </div>
      </div>
      <CarouselCard />
      <div className='deliup'>
        <div className='delivery'>
          <div className='picA'><img src={picA} alt='image1' /></div>
          <div className='picB'><img src={picB} alt='image2' /></div>
          <div className='picC' ><img src={picC} alt='image3' /></div>
          <div className='picD'><img src={picD} alt='image4' /></div>
        </div>
      </div>
      <SliderCard />
      <button className='knowmore border-gradient border-gradient-purple'>Read More</button>
      <h1 style={{ textAlign: 'left', width: '94%', margin: ' 30px auto' }}>Shop Our Instagram</h1>
      <div className="insta-container">

        <div className="insta1" ><img src='https://cdn.caratlane.com/media/static/images/V4/2022/CL/10-OCT/Others/insta/image1.jpg' alt='img1'></img></div>
        <div className="insta2"><img src='https://cdn.caratlane.com/media/static/images/V4/2022/CL/10-OCT/Others/insta/image2.jpg' alt='img2'></img></div>
        <div className="insta3"><img src='https://cdn.caratlane.com/media/static/images/V4/2022/CL/10-OCT/Others/insta/Image4.jpg' alt='img3'></img></div>
        <div className="insta4"><img src='https://cdn.caratlane.com/media/static/images/V4/2022/CL/10-OCT/Others/insta/Image5.jpg' alt='img4'></img></div>
        <div className="insta5"><img src='https://cdn.caratlane.com/media/static/images/V4/2022/CL/10-OCT/Others/insta/image3.jpg' alt='img5'></img></div>
        <div className="insta6" ><img src='https://cdn.caratlane.com/media/static/images/V4/2022/CL/10-OCT/Others/insta/Image6.jpg' alt='img6'></img></div>
        <div className="insta7"><img src='https://cdn.caratlane.com/media/static/images/V4/2022/CL/10-OCT/Others/insta/image7.jpg' alt='img7'></img></div>
      </div>

      <div className='indsider'>
        <div className="indsider1">
          <img src={plane} alt='plane1' width={200} />
          <h1>Sign up to be a CaratLane Insider</h1>
          <input type="text" /><input type="submit" />

          <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '90%', margin: 'auto' }}>
            <div> <input type="radio" id="css" name="fav_language" value="CSS" />
              <label for="female" style={{ color: 'white', fontSize: '17px' }}>Female</label></div>
            <div><input type="radio" id="css" name="fav_language" value="CSS" />
              <label for="male" style={{ color: 'white', fontSize: '17px' }}>Male</label></div>
            <div><input type="radio" id="css" name="fav_language" value="CSS" />
              <label for="others" style={{ color: 'white', fontSize: '17px' }}>Others</label></div>

          </div>

        </div>
      </div>
      <div className='about'>
        <div>
          <h3>Online Jewellery Store</h3>
          <hr style={{ color: 'blue' }}></hr>
          <p>CaratLane.com began in 2008 with the simple motto of democratising jewellery. And today, after 13 glorious years, it has come to be recognised as one of the top 20 e-commerce portals in India. Steadily growing from strength to strength since inception, CaratLane has also established 165 stores across the length and breadth of India.
            Since July 2016, we joined forces with India’s most desired and largest jewellery brand, Tanishq, through a strategic investment made by Titan Company in CaratLane. This takes us another step closer to achieving our shared mission - to make beautiful jewellery accessible to everyone.</p>
        </div>
        <div>
          <h3>CaratLane’s Vision</h3>
          <hr style={{ color: 'blue' }}></hr>
          <p>CaratLane works with the vision of offering tastefully designed jewellery at revolutionary prices. This is achieved by eliminating all inefficiencies which result in drastically reduced costs. With CaratLane, users stand to save as much as 30% when compared to prices in the market.

            Our app is designed to bridge the vast gap between the virtual and the physical world. This has been attained with the help of the Virtual Try-on feature that permits the users to virtually put on 1000s of earrings to see just how they look when placed on the ears.

            With over 100 thousand downloads, the CaratLane app has emerged to be one of the most liked applications in the jewellery circuit.</p>
        </div>
        <div>
          <h3>Shopping at CaratLane</h3>
          <hr style={{ color: 'blue' }}></hr>
          <p>Placing security first, CaratLane ensures that every transaction made on the site is safe and smooth for the customers. To attain this, the company follows stern policies of transparency through the whole customer buying journey.

            For further convenience, all CaratLane products come backed with certification from international laboratories, and a blanket 15-day-return policy, no questions asked.

            CaratLane provides the exquisite craftsmanship of beautiful jewellery designs such as rings, earrings, pendants, necklace, chains, bangles, bracelets, mangalsutra, nose pins. Apart from jewellery, CaratLane offers 22k (916) and 24k (995) gold coins with certification and the guarantee of a BIS Hallmarked stamp.</p>
        </div>

      </div>

    </div>
  )
}

export default Home