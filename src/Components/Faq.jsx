import React from 'react'

const Faq = () => {
  return (
    <div className="container  faq-cont2 mt-5 ">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="faq-container">
                        <div className="accordion" id="faqAccordion">
                            <div className="accordion-item mb-3">
                                <h2 className="accordion-header" id="faqHeadingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#faqCollapseOne" aria-expanded="true"
                                        aria-controls="faqCollapseOne">
                                        Non consectetur a erat nam at lectus urna duis?
                                    </button>
                                </h2>
                                <div id="faqCollapseOne" className="accordion-collapse collapse show"
                                    aria-labelledby="faqHeadingOne" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus
                                        laoreet
                                        non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus
                                        dolor
                                        purus non.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item mb-3">
                                <h2 className="accordion-header" id="faqHeadingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#faqCollapseTwo" aria-expanded="false"
                                        aria-controls="faqCollapseTwo">
                                        Feugiat scelerisque varius morbi enim nunc faucibus?
                                    </button>
                                </h2>
                                <div id="faqCollapseTwo" className="accordion-collapse collapse"
                                    aria-labelledby="faqHeadingTwo" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id
                                        interdum
                                        velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque
                                        eleifend
                                        donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros
                                        in
                                        cursus turpis massa tincidunt dui.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item mb-3">
                                <h2 className="accordion-header" id="faqHeadingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#faqCollapseThree" aria-expanded="false"
                                        aria-controls="faqCollapseThree">
                                        Dolor sit amet consectetur adipiscing elit pellentesque?
                                    </button>
                                </h2>
                                <div id="faqCollapseThree" className="accordion-collapse collapse"
                                    aria-labelledby="faqHeadingThree" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci.
                                        Faucibus
                                        pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit.
                                        Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis
                                        tellus. Urna molestie at elementum eu facilisis sed odio morbi quis.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item mb-3">
                                <h2 className="accordion-header" id="faqHeadingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#faqCollapseFour" aria-expanded="false"
                                        aria-controls="faqCollapseFour">
                                        Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?
                                    </button>
                                </h2>
                                <div id="faqCollapseFour" className="accordion-collapse collapse"
                                    aria-labelledby="faqHeadingFour" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id
                                        interdum
                                        velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque
                                        eleifend
                                        donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros
                                        in
                                        cursus turpis massa tincidunt dui.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item mb-3">
                                <h2 className="accordion-header" id="faqHeadingFive">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#faqCollapseFive" aria-expanded="false"
                                        aria-controls="faqCollapseFive">
                                        Tempus quam pellentesque nec nam aliquam sem et tortor?
                                    </button>
                                </h2>
                                <div id="faqCollapseFive" className="accordion-collapse collapse"
                                    aria-labelledby="faqHeadingFive" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim
                                        suspendisse in
                                        est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl
                                        suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item mb-3">
                                <h2 className="accordion-header" id="faqHeadingSix">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#faqCollapseSix" aria-expanded="false"
                                        aria-controls="faqCollapseSix">
                                        Perspiciatis quod quo quos nulla quo illum ullam?
                                    </button>
                                </h2>
                                <div id="faqCollapseSix" className="accordion-collapse collapse"
                                    aria-labelledby="faqHeadingSix" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        Enim ea facilis quaerat voluptas quidem et dolorem. Quis et consequatur non sed
                                        in
                                        suscipit sequi. Distinctio ipsam dolore et.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Faq
