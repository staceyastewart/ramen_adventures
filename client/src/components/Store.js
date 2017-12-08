import React, { Component } from 'react';
import book from '../images/book.png';
import white from '../images/tshirtwhitelogo.png';
import blue from '../images/tshirtbluetokyo.png';
import blackWithLogo from '../images/tshirtgrey.png';
import whiteWithText from '../images/tshirtwhiteeng.png';
import black from '../images/tshirtletters.png';
import love from '../images/tshirtheart.png';

class Store extends Component {
    render() {
        return (
            <div className="store-container">
                <h1 className="store-header">Store</h1>
                <p className="store-sub-header">Once you click on an item, a new tab will open that will take you to the respective stores with whom I collaborated to create this merchandise.</p>
                <div className="store-top-div">
                    <div className="store-book-container">
                        <img className="store-bookcover" src={book} alt="cover of brian's guidebook" />
                        <a href="https://www.amazon.co.jp/gp/product/4902800268/ref=as_li_ss_tl?ie=UTF8&camp=247&creative=7399&creativeASIN=4902800268&linkCode=as2&tag=ramenamerican-22" target="_blank" rel="noopener noreferrer">
                            <p className="store-book-amazon">Brian's Guide to 50 Great Tokyo Ramen Shops</p>
                            <p className="store-book-amazon">Buy on Amazon</p>
                        </a>
                    </div>
                   
                    <div className="store-book-container">
                        <img className="store-bookcover" src={book} alt="cover of brian's guidebook" />
                            <p className="store-book-paypal">Not in Japan?</p>
                            <p className="store-book-paypal">I'll ship you the book for $25!</p>
                            <p className="store-book-paypal">Click on the paypal button and enter your information.</p>
                            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                <input type="hidden" name="cmd" value="_s-xclick"/>
                                <input type="hidden" name="encrypted" 
                                     value="-----LONG STRING OF ENCRYPTED PAYPAL STUFF HERE-----" 
                                    />
                                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
                                <img alt="" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
                            </form>

                    </div>
                </div>
                <div className="store-bottom-div">
                    <a href="https://shop.mactionplanet.com/collections/maction-planet-x-ramen-adventures/products/ramen-adventures-katakana-limited-edition" target="_blank" rel="noopener noreferrer">
                        <div className="store-t-shirt-div">
                            <img src={blackWithLogo} alt="black t-shirt with RA logo in white. Ramen Adventures is written in white Japanese lettering beneath the logo" />
                            <p className="store-t-shirt-description">Black T-Shirt With Logo</p>
                            <p className="store-t-shirt-price">¥3,500</p>
                        </div>
                    </a>
                    <div className="store-t-shirt-div">
                        <a href="https://shop.mactionplanet.com/collections/maction-planet-x-ramen-adventures/products/ramen-adventures-english" target="_blank" rel="noopener noreferrer">
                            <img src={whiteWithText} alt="White t-shirt with RA logo in red and black text that says Ramen Adventures beneath the logo" />
                        </a>
                        <p className="store-t-shirt-description">White T-Shirt With Logo</p>
                        <a href="https://shop.mactionplanet.com/collections/maction-planet-x-ramen-adventures/products/ramen-adventures-katakana" className="store-link" target="_blank" rel="noopener noreferrer">
                            Also Available With Japanese Lettering
                        </a>
                        <p className="store-t-shirt-price">¥3,500</p>
                    </div>
                    <a href="https://shop.mactionplanet.com/collections/maction-planet-x-ramen-adventures/products/ramen-adventures-logo" target="_blank" rel="noopener noreferrer">
                        <div className="store-t-shirt-div">
                            <img src={white} alt="white t-shirt with RA logo in red" />
                            <p className="store-t-shirt-description">White T-Shirt With Logo</p>
                            <p className="store-t-shirt-price">¥3,500</p>
                        </div>
                    </a>
                    <a href="https://shop.mactionplanet.com/collections/maction-planet-x-ramen-adventures/products/kokoro-ramen" target="_blank" rel="noopener noreferrer">
                        <div className="store-t-shirt-div">
                            <img src={love} alt="White t-shirt that says I heart ramen. Ramen is written in Japanese letters. The heart has a distressed appearance. Letters are black and heart is red" />
                            <p className="store-t-shirt-description">White T-Shirt With I Love Ramen</p>
                            <p className="store-t-shirt-price">¥3,500</p>
                        </div>
                    </a>
                    <div className="store-t-shirt-div">
                        <a href="https://shop.mactionplanet.com/collections/maction-planet-x-ramen-adventures/products/ramen-rider" target="_blank" rel="noopener noreferrer">
                            <img src={black} alt="Black t-shirt with red Japanese lettering that say Ramen Rider" />
                        </a>
                        <p className="store-t-shirt-description">Black "Ramen Rider" T-Shirt</p>
                        <a href="https://shop.mactionplanet.com/collections/maction-planet-x-ramen-adventures/products/ramen-rider-limited-edition" className="store-link" target="_blank" rel="noopener noreferrer">
                            Also Available In Red
                        </a>
                        <p className="store-t-shirt-price">¥3,500</p>
                    </div>
                    <a href="https://shop.mactionplanet.com/collections/maction-planet-x-ramen-adventures/products/tokyo-ramen" target="_blank" rel="noopener noreferrer">
                        <div className="store-t-shirt-div">
                            <img src={blue} alt="Blue t-shirt with logo depicting red chopsticks holding ramen (white) forming the word 'Tokyo' falling into a red bowl" />
                            <p className="store-t-shirt-description">Blue T-Shirt With Tokyo Ramen</p>
                            <p className="store-t-shirt-price">¥3,500</p>
                        </div>
                    </a>
                </div>
            </div>   
        );
    }
}

export default Store;