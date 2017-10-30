import React, { Component } from 'react';
import tour from '../images/tour.jpg';

class Tours extends Component {
    render() {
        return (
            <div className="tours-wrapper">
                <div className="tours-container">
                    <h1 className="tours-header">Ramen Tours</h1>
                    <h2 className="media-subheader">Tokyo Ramen Tour!</h2>
                    <img src={tour} className="tours-image" alt="black and white of street view in Japan with Ramen shop in frame" />
                    <p>If you or your group are coming to Tokyo with food in mind, I am happy to provide private ramen tours. I have given food tours for chefs, food writers, restaurant groups, and tourists.</p>
                    <div className="tours-listing">
                        <p className="media-title">Ramen-Ramen</p>
                        <p className="media-text">Our most popular tour! We'll visit 2 ramen shops in about 2 hours. First up, something light and full of umami flavors, refined ramen with premium ingredients creating something amazing. Next is something a bit heavier, fatty and flavorful.</p>
                        <p>The cost for this tour is 20,000 yen, plus 5000 yen per additional person. All food and transportation from your hotel is included. Lunch or dinner times are available. Email <a className="media-link" href="mailto:ramenamerican@gmail.com" target="_blank" rel="noopener noreferrer">ramenamerican@gmail.com</a> to book a tour.</p>
                    </div>
                    <div className="tours-listing">
                        <p className="media-title">Ramen-Yakitori</p>
                        <p className="media-text">Yakitori shops serve up small skewers of meat (usually chicken), as well as small plates of snacks and tasty drinks. We'll hit up a very local yakitori shop after a bowl of ramen. Squeeze in with the regulars, and relax with a big kanpai!</p>
                        <p>The cost is 25,000 yen, plus 5000 yen per additional person. Ramen, five skewers of yakitori and a few small plates, plus two drinks are included in the price. This tour is only for evenings. Email <a className="media-link" href="mailto:ramenamerican@gmail.com" target="_blank" rel="noopener noreferrer">ramenamerican@gmail.com</a> to book a tour.</p>
                    </div>
                    <div className="tours-listing">
                        <p className="media-title">Ramen-Izakaya</p>
                        <p className="media-text">A bowl of ramen, followed by a visit to a local seafood izakaya. Izakaya's serve small plates that go great with Japanese sake or beer. Sushi, sashimi, tempura, the menu at these places change daily based on the fresh catch.</p>
                        <p>The cost is 25,000 yen, plus 7000 yen per additional person. Ramen, izakaya fare, and a couple drinks are included. Evening only. Email <a className="media-link" href="mailto:ramenamerican@gmail.com" target="_blank" rel="noopener noreferrer">ramenamerican@gmail.com</a> to book a tour.</p>
                    </div>
                    <div className="media-title tours-note">
                        Please note that for any tour, there is a cancellation fee of 10,000 yen within 10 days. Thank you for understanding.
                    </div>
                </div>
            </div>
        );
    }
}

export default Tours;