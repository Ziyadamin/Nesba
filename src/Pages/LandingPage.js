import React from 'react';
import HeaderBar from '../Components/Header'; // Ensure this path is correct
import CoinPic from '../ContentPic.avif';
import Button from '../Components/Button';
import Browse1 from '../browse1.avif';
import invest from '../invest.avif';
import market from '../market.avif';
import earn from '../earn.avif';
import './LandingPage.css';
import Imageholder from '../Components/ImagePlacer';
import InputField from '../Components/InputField';

function LandingPage() {
    return (
        <div className="LandingPage">
            {/* Header */}
            <HeaderBar />

            <div className="NesbaInfo">
                <div className="Content1">
                    <h1>Invest in Real Estate with as little as 5,000 EGP</h1>
                    <p>Nesba is the first fractional real estate solution coming to Egypt, allowing you to invest in real estate through property fractionalization.</p>
                    <p>Join our waitlist to get exclusive access to our initial offerings.</p>
                    <Button text="Join the Waitlist!" />
                </div>
                <img src={CoinPic} alt="coin" className="coinpic" />
            </div>

            <div className='usage'>
                <div className='Text'>
                    <h3>How does it work?</h3>
                    <h2>Build your real estate investment portfolio with a few clicks</h2>
                </div>
            </div>

            <div className='pics'>
                <div className='TextforPics'>
                    <h3>Browse</h3>
                    <h1>Access first-class real estate with different developers</h1>
                    <p>Explore our collection of properties, vetted by real estate experts.</p>
                </div>
                <Imageholder key="browse" src={Browse1} backgroundColor="#a8ffbd" />
            </div>

            <div className='pics2'>
                <div className='TextforPics2'>
                    <h3>Invest</h3>
                    <h1>Claim the nesba you love, from only 5000 EGP</h1>
                    <p>Buy as many shares as you want in your favorite property with no hidden fees, directly on our platform.</p>
                </div>
                <Imageholder key="invest" src={invest} backgroundColor="#c4f1f5" />
            </div>

            <div className='pics3'>
                <div className='TextforPics3'>
                    <h3>Earn</h3>
                    <h1>Enjoy as your wealth grows through capital appreciation</h1>
                    <p>Relax and watch as your shares increase in price and provide you with currency-hedged ROI.</p>
                    <p style={{ color: "black" }}>Paid directly to your NESBA wallet</p>
                </div>
                <Imageholder key="earn" src={earn} backgroundColor="#7b43aa" />
            </div>

            <div className='pics4'>
                <div className='TextforPics4'>
                    <h3>Sell</h3>
                    <h1>Liquidate whenever you need to</h1>
                    <p>Exit your investments through our secondary markets or during our final Exit for each property at a set date.</p>
                    <p style={{ color: "black" }}>Paid directly to your NESBA wallet</p>
                </div>
                <Imageholder key="market" src={market} backgroundColor="#a8ffbd" />
            </div>

            <div className='form'>
                <p>Join the Waitlist</p>
                <h1>Get notified as soon as we launch</h1>
                <InputField label="Name" />
                <InputField label="Phone Number" />
                <Button text="Submit" />
            </div>
        </div>
    );
}

export default LandingPage;
