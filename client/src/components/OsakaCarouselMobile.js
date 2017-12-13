import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';

class OsakaCarouselMobile extends Component {
    render() {
        return (
            <div className="osaka-carousel-mobile">
                <Carousel showThumbs={false} showArrows={true} dynamicHeight emulateTouch useKeyboardArrows>
                    <div className="osaka-school-image-div">
                        <img src="https://farm9.staticflickr.com/8797/16898277690_3cc4a8171f_c.jpg"
                            alt=""
                            className="osaka-school-big-image" />
                    </div>
                    <div className="osaka-school-image-div">
                        <img src="http://farm9.staticflickr.com/8486/8195246935_7f9eefc9a9.jpg"
                            alt=""
                            className="osaka-school-image" />
                    </div>
                    <div className="osaka-school-image-div">
                        <img src="http://farm9.staticflickr.com/8198/8195227075_c2c960c57b.jpg"
                            alt=""
                            className="osaka-school-image" />
                    </div>
                    <div className="osaka-school-image-div">
                        <img src="http://farm9.staticflickr.com/8479/8196322516_834c78e871.jpg"
                            alt=""
                            className="osaka-school-image" />
                    </div>
                    <div className="osaka-school-image-div">
                        <img src="http://farm9.staticflickr.com/8342/8196326292_2bb525d78a.jpg"
                            alt=""
                            className="osaka-school-big-image" />
                    </div>
                    <div className="osaka-school-image-div">
                        <img src="http://farm9.staticflickr.com/8349/8196328874_c6c50ea50e.jpg"
                            alt=""
                            className="osaka-school-image" />
                    </div>
                    <div className="osaka-school-image-div">
                        <img src="http://farm9.staticflickr.com/8482/8195233369_c885b685e3.jpg"
                            alt=""
                            className="osaka-school-image" />
                    </div>
                    <div className="osaka-school-image-div">
                        <img src="http://farm9.staticflickr.com/8486/8196330766_9a262ef444.jpg"
                            alt=""
                            className="osaka-school-image" />
                    </div>
                    <div className="osaka-school-image-div">
                        <img src="http://farm9.staticflickr.com/8346/8196333802_3aee060127.jpg"
                            alt=""
                            className="osaka-school-image" />
                    </div>
                    <div className="osaka-school-image-div">
                        <img src="http://farm9.staticflickr.com/8339/8196336760_f1eb60354e.jpg"
                            alt=""
                            className="osaka-school-image" />
                    </div>
                    <div className="osaka-school-image-div">
                        <img src="http://farm9.staticflickr.com/8347/8196332252_104633afb1.jpg"
                            alt=""
                            className="osaka-school-image" />
                    </div>
                    <div className="osaka-school-image-div">
                        <img src="http://farm9.staticflickr.com/8208/8195245085_c71ce5bccc.jpg"
                            alt=""
                            className="osaka-school-big-image" />
                    </div>
                </ Carousel>
                <p className="legend" id="legend">How would you like to learn to make the above ramen; a creamy pork soup with handmade noodles and handmade toppings. The only thing not made from scratch was the bowl!
                                Ramen Adventures has teamed up with Osaka-based ramen school Toranoana to bring you a 1-day intensive ramen course designed for small groups of English speakers who want to enjoy a truly unique ramen experience in Japan.</p>
                <p className="legend" id="legend">Your day starts at 9am in Nagase (長瀬). Nagase station is only about 15 minutes from downtown Osaka.  Someone will meet you at the station.</p>
                <p className="legend" id="legend">The school is located on the main road leading to Kinki University.</p>
                <p className="legend" id="legend">Spend a few hours prepping the soup.</p>
                <p className="legend" id="legend">We'll be making two kinds of soup. One is a simple clear broth and one is a a thicker creamy broth.</p>
                <p className="legend" id="legend">Once the soup is going, you'll learn all about chashu and making perfect eggs.</p>
                <p className="legend" id="legend">It isn't all kitchen work! A crash course in ramen history and ramen culture is part of the curriculum.</p>
                <p className="legend" id="legend">When lunch is over (ramen, of course) it's time to make the noodles. Talk about what makes the varied style of noodles before getting our hands covered in flour.</p>
                <p className="legend" id="legend">Grab a beer from the local convenience store and celebrate. You just spent the day making your own bowl of ramen!</p>
                <p className="legend" id="legend">The class is finished around 3pm.
                                Still going strong, very strong, after over three years! Please try and book as far in advance as you can. I have had to turn away many eager students because the school is booked a few months in advance.
                                <a className="tokyo-school-link" href="http://ramenschool.jp/ramenadventures/" target="_blank" rel="noopener noreferrer"> http://ramenschool.jp/ramenadventures/</a></p>
            </div>
        );
    }
}

export default OsakaCarouselMobile;