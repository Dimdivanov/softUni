import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      {/*-----Video Start-----*/}
      <section className="video-section prelative text-center white">
        <div className="section-padding video-overlay">
          <div className="container">
            <h3>Watch Now</h3>
            <i className="fa fa-play" id="video-icon" aria-hidden="true" />
            <div className="video-popup">
              <div className="video-src">
                <div className="iframe-src">
                  <iframe src="https://www.youtube.com/embed/Ku52zNnft8k?rel=0&showinfo=0" allowFullScreen="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*-----Video End-----*/}
      {/*-----Features Start-----*/}
      <section className="feature section-padding" data-scroll-index={2}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sectioner-header text-center">
                <h3>Features</h3>
                <span className="line" />
                <p>
                  Sed quis nisi nisi. Proin consectetur porttitor dui sit amet viverra. Fusce sit amet lorem faucibus,
                  vestibulum ante in, pharetra ante.
                </p>
              </div>
              <div className="section-content text-center">
                <div className="row">
                  <div className="col-md-4 col-sm-12">
                    <div className="media single-feature wow fadeInUp" data-wow-delay="0.2s">
                      <div className="media-body text-right media-right-margin">
                        <h5>Fast Processing</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididugnt ut
                          labore
                        </p>
                      </div>
                      <div className="media-right icon-border">
                        {' '}
                        <span className="fa fa-bolt" aria-hidden="true" />{' '}
                      </div>
                    </div>
                    <div className="media single-feature wow fadeInUp" data-wow-delay="0.4s">
                      <div className="media-body text-right media-right-margin">
                        <h5>Low Power Consuming</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididugnt ut
                          labore
                        </p>
                      </div>
                      <div className="media-right icon-border">
                        {' '}
                        <span className="fa fa-battery-full" aria-hidden="true" />{' '}
                      </div>
                    </div>
                    <div className="media single-feature wow fadeInUp" data-wow-delay="0.6s">
                      <div className="media-body text-right media-right-margin">
                        <h5>Wifi Compatibility</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididugnt ut
                          labore
                        </p>
                      </div>
                      <div className="media-right icon-border">
                        {' '}
                        <span className="fa fa-wifi" aria-hidden="true" />{' '}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 d-none d-md-block d-lg-block">
                    <div className="feature-mobile">
                      {' '}
                      <img src="images/iphone-screen-with-shadow.png" className="img-fluid wow fadeInUp" />{' '}
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className="media single-feature wow fadeInUp" data-wow-delay="0.2s">
                      <div className="media-left icon-border media-right-margin">
                        {' '}
                        <span className="fa fa-check-double" aria-hidden="true" />{' '}
                      </div>
                      <div className="media-body text-left">
                        <h5>Regular Updates</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididugnt ut
                          labore
                        </p>
                      </div>
                    </div>
                    <div className="media single-feature wow fadeInUp" data-wow-delay="0.4s">
                      <div className="media-left icon-border media-right-margin">
                        {' '}
                        <span className="fa fa-dollar-sign" aria-hidden="true" />{' '}
                      </div>
                      <div className="media-body text-left">
                        <h5>Save Money</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididugnt ut
                          labore
                        </p>
                      </div>
                    </div>
                    <div className="media single-feature wow fadeInUp" data-wow-delay="0.6s">
                      <div className="media-left icon-border media-right-margin">
                        {' '}
                        <span className="fa fa-hdd" aria-hidden="true" />{' '}
                      </div>
                      <div className="media-body text-left">
                        <h5>Unlimited Storage</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididugnt ut
                          labore
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*-----Features End-----*/}
      {/*-----Team Start-----*/}
      <section className="team section-padding" data-scroll-index={3}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sectioner-header text-center">
                <h3>Our Team</h3>
                <span className="line" />
                <p>
                  Sed quis nisi nisi. Proin consectetur porttitor dui sit amet viverra. Fusce sit amet lorem faucibus,
                  vestibulum ante in, pharetra ante.
                </p>
              </div>
              <div className="section-content text-center">
                <div className="row">
                  <div className="col-md-4">
                    <div className="team-detail wow bounce" data-wow-delay="0.2s">
                      {' '}
                      <img src="images/user1.jpg" className="img-fluid" />
                      <h4>Nitu Singh</h4>
                      <p>Marketing Specialist</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="team-detail wow bounce" data-wow-delay="0.4s">
                      {' '}
                      <img src="images/user2.jpg" className="img-fluid" />
                      <h4>Yogesh Singh</h4>
                      <p>CEO &amp; Founder</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="team-detail wow bounce" data-wow-delay="0.6s">
                      {' '}
                      <img src="images/user3.jpg" className="img-fluid" />
                      <h4>Nisha Sharma</h4>
                      <p>Web Developer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*-----Team End-----*/}
      {/*-----Testimonial Start-----*/}
      <section className="testimonial section-padding" data-scroll-index={4}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sectioner-header text-center white">
                <h3>Testimonials</h3>
                <span className="line" />
                <p className="white">
                  Sed quis nisi nisi. Proin consectetur porttitor dui sit amet viverra. Fusce sit amet lorem faucibus,
                  vestibulum ante in, pharetra ante.
                </p>
              </div>
              <div className="section-content">
                <div className="row">
                  <div className="offset-md-2 col-md-8 col-sm-12">
                    <div className="slider">
                      <div className="slider-item">
                        <div className="test-img">
                          <img src="images/user1.jpg" alt="Placeholder" width={157} height={157} />
                        </div>
                        <div className="test-text">
                          <span className="title">
                            <span>John Michal</span> Digital Designer
                          </span>{' '}
                          Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                          aliquam eratvo lutpat.
                        </div>
                      </div>
                      <div className="slider-item">
                        <div className="test-img">
                          <img src="images/user3.jpg" alt="Placeholder" width={157} height={157} />
                        </div>
                        <div className="test-text">
                          <span className="title">
                            <span>Steve Smith</span> App User
                          </span>{' '}
                          Euismod tincidunt ut laoreet dolore magna aliquam eratvo lutpat. Ut wisi enim ad minim veniam,
                          quis nostrud v
                        </div>
                      </div>
                      <div className="slider-item">
                        <div className="test-img">
                          <img src="images/user3.jpg" alt="Placeholder" width={157} height={157} />
                        </div>
                        <div className="test-text">
                          <span className="title">
                            <span>Gordon Shaw</span> Blogger
                          </span>{' '}
                          Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                          aliquam eratvo lutpat. Ut wisi enim ad minim veniam, quis nostrud v
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*-----Testimonial End-----*/}
      {/*-----FAQ Start-----*/}
      <section className="faq section-padding prelative" data-scroll-index={5}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sectioner-header text-center">
                <h3>Frequently Asked Questions</h3>
                <span className="line" />
                <p>
                  Sed quis nisi nisi. Proin consectetur porttitor dui sit amet viverra. Fusce sit amet lorem faucibus,
                  vestibulum ante in, pharetra ante.
                </p>
              </div>
              <div className="section-content">
                <div className="row">
                  <div className="col-md-6 faq-content wow fadeInUp" data-wow-delay="0.2s">
                    <h4>Nam tellus felis, dignissim quis dui ?</h4>
                    <p>
                      Suspendisse fermentum placerat enim, at pellentesque augue. Nullam elit est, ultricies et tellus
                      ac, euismod placerat orci. Donec commodo.
                    </p>
                  </div>
                  <div className="col-md-6 faq-content wow fadeInUp" data-wow-delay="0.2s">
                    <h4>Mauris scelerisque, dui non faucibus vulputate ?</h4>
                    <p>
                      Sed tempus in neque ac rhoncus. Phasellus vehicula, erat tempor malesuada egestas, mauris tellus
                      malesuada erat, at vestibulum nulla ex et lectus. Nullam elit est, ultricies et tellus ac, euismod
                      placerat orci.
                    </p>
                  </div>
                  <div className="col-md-6 faq-content wow fadeInUp" data-wow-delay="0.4s">
                    <h4>Nullam elit est, ultricies et tellus ac ?</h4>
                    <p>
                      Ut vestibulum euismod aliquet. Quisque nec malesuada nibh. Vivamus euismod nunc eu leo faucibus,
                      vel elementum justo posuere. In sed varius nisi. Curabitur id porta ipsum, et vestibulum dui.
                    </p>
                  </div>
                  <div className="col-md-6 faq-content wow fadeInUp" data-wow-delay="0.4s">
                    <h4>Suspendisse fermentum placerat enim, at pellentesque augue elit est ?</h4>
                    <p>Vivamus euismod nunc eu leo faucibus, vel elementum justo posuere. In sed varius nisi.</p>
                  </div>
                  <div className="col-md-6 faq-content wow fadeInUp" data-wow-delay="0.6s">
                    <h4>Ut vestibulum euismod aliquet. Quisque nec malesuada nibh ?</h4>
                    <p>
                      Suspendisse fermentum placerat enim, at pellentesque augue. Nullam elit est, ultricies et tellus
                      ac, euismod placerat orci. Donec commodo dapibus congue.
                    </p>
                  </div>
                  <div className="col-md-6 faq-content wow fadeInUp" data-wow-delay="0.6s">
                    <h4>Donec commodo dapibus congue ?</h4>
                    <p>
                      Nullam elit est, ultricies et tellus ac, euismod placerat orci fermentum placerat enim, at
                      pellentesque augue. Nullam elit est, ultricies et tellus ac, euismod placerat orci. Donec commodo
                      dapibus congue.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*-----FAQ End-----*/}
      {/*-----Contact Start-----*/}
      <section className="contact section-padding" data-scroll-index={6}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sectioner-header text-center">
                <h3>Contact us</h3>
                <span className="line" />
                <p>
                  Sed quis nisi nisi. Proin consectetur porttitor dui sit amet viverra. Fusce sit amet lorem faucibus,
                  vestibulum ante in, pharetra ante.
                </p>
              </div>
              <div className="section-content">
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-8">
                    <form id="contact_form" action="">
                      <div className="row">
                        <div className="col">
                          <input
                            type="text"
                            id="your_name"
                            className="form-input w-100"
                            name="full-name"
                            placeholder="Full Name"
                            required=""
                          />
                        </div>
                        <div className="col">
                          <input
                            type="email"
                            id="email"
                            className="form-input w-100"
                            name="email"
                            placeholder="Email"
                            required=""
                          />
                        </div>
                      </div>
                      <input
                        type="text"
                        id="subject"
                        className="form-input w-100"
                        name="subject"
                        placeholder="Subject"
                      />
                      <textarea
                        className="form-input w-100"
                        id="message"
                        placeholder="Message"
                        name="message"
                        defaultValue={''}
                      />
                      <button className="btn-grad w-100 text-uppercase" type="submit" name="button">
                        submit
                      </button>
                    </form>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-4">
                    <div className="contact-info white">
                      <div className="contact-item media">
                        {' '}
                        <i className="fa fa-map-marker-alt media-left media-right-margin" />
                        <div className="media-body">
                          <p className="text-uppercase">Address</p>
                          <p className="text-uppercase">New Delhi, India</p>
                        </div>
                      </div>
                      <div className="contact-item media">
                        {' '}
                        <i className="fa fa-mobile media-left media-right-margin" />
                        <div className="media-body">
                          <p className="text-uppercase">Phone</p>
                          <p className="text-uppercase">
                            <a className="text-white" href="tel:+15173977100">
                              009900990099
                            </a>{' '}
                          </p>
                        </div>
                      </div>
                      <div className="contact-item media">
                        {' '}
                        <i className="fa fa-envelope media-left media-right-margin" />
                        <div className="media-body">
                          <p className="text-uppercase">E-mail</p>
                          <p className="text-uppercase">
                            <a className="text-white" href="mailto:abcdefg@gmail.com">
                              yogeshsingh.now@gmail.com
                            </a>{' '}
                          </p>
                        </div>
                      </div>
                      <div className="contact-item media">
                        {' '}
                        <i className="fa fa-clock media-left media-right-margin" />
                        <div className="media-body">
                          <p className="text-uppercase">Working Hours</p>
                          <p className="text-uppercase">Mon-Fri 9.00 AM to 5.00PM.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*-----Contact End-----*/}
      {/*-----Download End-----*/}
      <section className="download section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sectioner-header text-center white">
                <h3>Download Our App</h3>
                <span className="line" />
                <p className="white">
                  Sed quis nisi nisi. Proin consectetur porttitor dui sit amet viverra. Fusce sit amet lorem faucibus,
                  vestibulum ante in, pharetra ante.
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="section-content text-center">
                <ul>
                  <li>
                    <a href="#">
                      <img src="images/appstore.png" className="wow fadeInUp" data-wow-delay="0.4s" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/playstore.png" className="wow fadeInUp" data-wow-delay="0.7s" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*-----Download End-----*/}
      <footer className="footer-copy">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <p>
                2018 © Applight. Website Designed by{' '}
                <a href="http://w3Template.com" target="_blank" rel="dofollow">
                  W3 Template
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
