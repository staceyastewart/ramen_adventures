import React, { Component } from 'react';
import OsakaCarousel from './OsakaCarousel';
import OsakaCarouselMobile from './OsakaCarouselMobile';

class OsakaSchool extends Component {
    render() {
        return (
            <div className="osaka-school-wrapper">
                <div className="osaka-school-container">
                    <h1 className="osaka-school-header">Osaka Ramen School</h1>
                    <h2 className="osaka-school-subheader">A 1-day private crash course in all things ramen!</h2>
                    <OsakaCarousel />
                    <OsakaCarouselMobile />
                    <h2 className="osaka-school-subheader osaka-details">Details:</h2>
                    <div className="osaka-school-details-container">
                        <div className="osaka-school-details">
                            <p className="osaka-school-details-text question-box">Where?</p>
                            <p className="osaka-school-details-text">Nagase, Osaka. I would suggest you stay in Kansai the night before. The station is very near both Osaka and Nara.</p>
                        </div>
                        <div className="osaka-school-details">
                            <p className="osaka-school-details-text question-box">When?</p>
                            <p className="osaka-school-details-text">There is no set schedule. Miyajima-sensei trains Japanese students regularly in long courses, sometimes more than two weeks. Please give as much notice as possible so we can try and coordinate.</p>
                        </div>
                        <div className="osaka-school-details">
                            <p className="osaka-school-details-text question-box"> How Much?</p>
                            <p className="osaka-school-details-text">
                                The cost for one or two students is 55,000 yen. This includes any service fees.
                                The cost for three students is 65,000 yen.
                                The cost for four students is 75,000 yen.
                            </p>
                        </div>
                        <div className="osaka-school-details">
                            <p className="osaka-school-details-text question-box">Sign Up!</p>
                            <p className="osaka-school-details-text">
                                Please mail me at <a className="tokyo-school-link" href="mailto:ramenamerican@gmail.com" target="_blank" rel="noopener noreferrer">ramenamerican@gmail.com</a> with the days you would like to go.
                            </p>
                        </div>
                    </div>
                    <h2 className="osaka-school-subheader">FAQ:</h2>
                    <div className="osaka-school-faq-container">
                        <div className="osaka-faq-div">
                            <div className="osaka-q">
                                <p className="osaka-bold">Q:</p>
                                <p className="osaka-answer-text">Should I take notes?</p>
                            </div>
                            <div className="osaka-a">
                                <p className="osaka-bold">A:</p> 
                                <p className="osaka-answer-text">You are encouraged to take notes and ask as many questions as you need.</p>
                            </div>
                        </div>
                        <div className="osaka-faq-div">
                            <div className="osaka-q">
                                <p className="osaka-bold">Q:</p>
                                <p className="osaka-answer-text">Why do you need my date of birth?</p>
                            </div>
                            <div className="osaka-a">
                                <p className="osaka-bold">A:</p>
                                <p className="osaka-answer-text">We will give you a certificate of course completion, and this includes your date of birth. It is common in Japan for this sort of thing to have your birth date next to your name.</p>
                            </div>
                        </div>
                        <div className="osaka-faq-div">
                            <div className="osaka-q">
                                <p className="osaka-bold">Q:</p>
                                <p className="osaka-answer-text">Will I be able to open and run a ramen shop after this course?</p>
                            </div>
                            <div className="osaka-a">
                                <p className="osaka-bold">A:</p>
                                <p className="osaka-answer-text">You will have a knowledge of the ingredients needed to make ramen. Restaurant management is a whole other thing. Miyajima-sensei teaches much longer courses for people looking to open a shop.  Please let me know if that is something you would be interested in.</p>
                            </div>
                        </div>
                        <div className="osaka-faq-div">
                            <div className="osaka-q">
                                <p className="osaka-bold">Q:</p>
                                <p className="osaka-answer-text">Can I request a certain kind of ramen?</p>
                            </div>
                            <div className="osaka-a">
                                <p className="osaka-bold">A:</p>
                                <p className="osaka-answer-text">Totally! The standard we will make is a creamy soup and a clear soup, both made with chicken and pork bones. Specific styles are doable. Jiro-kei anyone?</p>
                            </div>
                        </div>
                        <div className="osaka-faq-div">
                            <div className="osaka-q">
                                <p className="osaka-bold">Q:</p>
                                <p className="osaka-answer-text">What airport should I fly into?</p>
                            </div>
                            <div className="osaka-a">
                                <p className="osaka-bold">A:</p>
                                <p className="osaka-answer-text">Kansai International Airport (KIX) is the closest. The school is less than an hour from the airport.</p>
                            </div>
                        </div>
                        <div className="osaka-faq-div">
                            <div className="osaka-q">
                                <p className="osaka-bold">Q:</p>
                                <p className="osaka-answer-text">How do I get to Nagase Station?</p>
                            </div>
                            <div className="osaka-a">
                                <p className="osaka-bold">A:</p>
                                <p className="osaka-answer-text">Nagase is on the Kintetsu Line. The best way is to take the local train from Tsuruhashi. Don't take the express train, it will send you flying past Nagase!</p>
                            </div>
                        </div>
                        <div className="osaka-faq-div">
                            <div className="osaka-q">
                                <p className="osaka-bold">Q:</p>
                                <p>Where should I stay?</p>
                            </div>
                            <div className="osaka-a">
                                <p className="osaka-bold">A:</p>
                                <p className="osaka-answer-text">YI would suggest staying in a more central part of Osaka the night before. Namba has plenty of cheap hotels and a lot of good places to eat and sights to see. Also, you could easily stay in historic Nara. Nagase is only about 30 minutes from Nara.</p>
                            </div>
                        </div>
                        <div className="osaka-faq-div">
                            <div className="osaka-q">
                                <p className="osaka-bold">Q:</p>
                                <p className="osaka-answer-text">What is your cancellation policy?</p>
                            </div>
                            <div className="osaka-a">
                                <p className="osaka-bold">A:</p>
                                <p className="osaka-answer-text">We require payment for the class in advance. We have a 1 month full refund policy. Over 14 days, we can't offer any refunds, but can try and reschedule the date if you need to change it. Within 14 days, we can not offer any refunds.</p>
                            </div>
                        </div>            
                    </div>
                    <div className="osaka-bottom-container">
                        <h2 className="osaka-school-subheader">Professional Classes:</h2>
                        <p>We can do classes that are less casual than this one. These are designed for students with restaurant experience who are looking to incorporate ramen into their overseas ventures. Information on the school site:
                        <a className="tokyo-school-link osaka-link" href="http://ramenschool.jp/ramenadventures/" target="_blank" rel="noopener noreferrer"> http://ramenschool.jp/ramenadventures/</a></p>
                        <h2 className="osaka-school-subheader">Additional Links:</h2>
                        <p>Here is an interview with Miyajima-sensei in English:</p>
                        <p><a className="tokyo-school-link osaka-link" href="http://www.kansaiscene.com/2014/01/thank-god-noodles-r-amen/" target="_blank" rel="noopener noreferrer">http://www.kansaiscene.com/2014/01/thank-god-noodles-r-amen/</a></p>
                        <p>Read about student experiences here:</p>
                        <p><a className="tokyo-school-link osaka-link" href="http://www.friendsinramen.com/2012/10/ramen-school.html" target="_blank" rel="noopener noreferrer">http://www.friendsinramen.com/2012/10/ramen-school.html</a></p>
                        <p><a className="tokyo-school-link osaka-link" href="http://likeafishinwater.com/2013/11/21/osaka-ramen-school/" target="_blank" rel="noopener noreferrer">http://likeafishinwater.com/2013/11/21/osaka-ramen-school/</a></p>
                        <p><a className="tokyo-school-link osaka-link" href="http://www.seriouseats.com/2016/03/ramen-school-osaka-how-ramen-is-made.html" target="_blank" rel="noopener noreferrer">http://www.seriouseats.com/2016/03/ramen-school-osaka-how-ramen-is-made.html</a></p>
                        <div className="osaka-video-wrapper">
                            <iframe className="osaka-school-video" src="https://www.youtube.com/embed/YAEyj4-cXFw" frameBorder="0" allowFullScreen title="ramen lesson at Tokyo ramen school"></iframe>
                        </div>
                    </div>
                </div> 
            </div>
        );
    }
}

export default OsakaSchool;