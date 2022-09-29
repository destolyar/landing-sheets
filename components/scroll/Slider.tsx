import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { SliderItem } from './SliderItem';

export const Slider: React.FC = () => {
    return(
        <div>
            <h2>There are others like Christian.</h2>

            <Carousel autoPlay infiniteLoop showStatus={false} dynamicHeight={false} showThumbs={false}>
                <div>
                    <SliderItem
                    profileImage="profiles/matthew-christ.png"
                    name=" Christ"
                    role="Partnership Director"
                    testimonial="The Masterclass has just been a phenomenon tool for us.
                        The amount of things, tips, tricks and frameworks we learned was a game changer for our business.
                        The best part was the community since we were able to find answers to stuggles people had already faced."
                    booked="21%+"
                    beforeResult="3 weeks"/>
                </div>
                <div>
                    <SliderItem
                        profileImage="profiles/ahmed-jemaa.png"
                        name="Ahmed Jemaa"
                        role="Managing Director"
                        testimonial="I got better results from following everything in the course than the $5,000 consultant I hired or all the other courses I bought.
                            The value included in the Masterclass is crazy and the ROI from it is probably of hundreds of thousands of dollars."
                        booked="22%+"
                        beforeResult="3.5 weeks"/>
                </div>
                <div>
                    <SliderItem
                        profileImage="profiles/ibrahim-gonzalez.png"
                        name="Ibrahim Gonzalez"
                        role="CEO"
                        testimonial="By applying only 10% of the course, we got an immediate return on our campaigns.
                            Obviously I wouldn't like competitors to have it but otherwise I really recommend people going through it."
                        booked="15%+"
                        beforeResult="3 weeks"/>
                </div>
                <div>
                    <SliderItem
                        profileImage="profiles/nadja-el-fertasi.png"
                        name="Nadja El Fertasi"
                        role="CEO"
                        testimonial="Before taking the course, I saw Sales as something very awkward.
                            G has really helped me change that perception with very actionable, specific and tangible tips.
                            There's just so much more value than what I expected."
                        booked="17%+"
                        beforeResult="2.5 weeks"/>
                </div>
                <div>
                    <SliderItem
                        profileImage="profiles/scott-pooch.png"
                        name="Scott Pooch"
                        role="CEO"
                        testimonial="I'm not new to Email outreach and still found myself rewatching many of the modules and taking tons of notes.
                            There were also some fun and unique scenarios presented at the end of the course."
                        booked="19%+"
                        beforeResult="2.5 weeks"/>
                </div>
            </Carousel>
        </div>
    )
}
