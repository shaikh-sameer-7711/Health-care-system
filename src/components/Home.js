

export default function Home()
{
    return<div>
<div className="ulockd-home-slider">
<div className="container-fluid">
    <div className="row">
        <div className="pogoSlider" id="js-main-slider">
        <div className="pogoSlider-slide" data-transition="fade" data-duration="1500" style={{backgroundImage:'url("images/home 1.jpg")'}}>
                <div className="lbox-caption pogoSlider-slide-element">
                    <div className="lbox-details">
                        <h1>Welcome to Health Lab</h1>
                        <p>Fusce convallis ante id purus sagittis malesuada. Sed erat ipsum </p>
                        <a href="#"className="btn">Contact Us</a>
                    </div>
                </div>
            </div>
            <div className="pogoSlider-slide" data-transition="fade" data-duration="1500" style={{backgroundImage:'url("images/home ambulance.jpg")'}}>
                <div className="lbox-caption pogoSlider-slide-element">
                    <div className="lbox-details">
                        <h1>We are Expert in The Field of Health Lab</h1>
                        <p>Fusce convallis ante id purus sagittis malesuada. Sed erat ipsum</p>
                        <a href="#appointment"className="btn">Appointment</a>
                    </div>
                </div>
            </div>
            <div className="pogoSlider-slide" data-transition="fade" data-duration="1500" style={{backgroundImage:'url("images/home clinic.jpg")'}}>
                <div className="lbox-caption pogoSlider-slide-element">
                    <div className="lbox-details">
                        <h1>Welcome to Health Lab</h1>
                        <p>Fusce convallis ante id purus sagittis malesuada. Sed erat ipsum </p>
                        <a href="#" className="btn">Contact Us</a>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</div>
</div>

<div id="gallery" className="gallery-box">
		<div className="container-fluid">
			<div className="row">
				<div className="col-lg-12">
					<div className="title-box">
						<h2>Gallery</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
					</div>
				</div>
			</div>
			
			<div className="popup-gallery row clearfix">
				<div className="col-md-3 col-sm-6">
					<div className="box-gallery">
						<img src="images/gallery-01.jpg" alt=""/>
						<div className="box-content">	
							<h3 className="title">Healing Hands: Compassionate Care</h3>
							<ul className="icon">
								<li><a href="images/gallery-01.jpg"><i className="fa fa-picture-o" aria-hidden="true"></i></a></li>								
							</ul>
						</div>
					</div>
				</div>
				<div className="col-md-3 col-sm-6">
					<div className="box-gallery">
						<img src="images/gallery-02.jpg" alt=""/>
						<div className="box-content">
							<h3 className="title">Your Partner in Health</h3>
							<ul className="icon">
								<li><a href="images/gallery-02.jpg"><i className="fa fa-picture-o" aria-hidden="true"></i></a></li>								
							</ul>
						</div>
					</div>
				</div>
				<div className="col-md-3 col-sm-6">					
					<div className="box-gallery">
						<img src="images/gallery-03.jpg" alt=""/>
						<div className="box-content">
						<h3 className="title">Empowering Wellness</h3>							
							<ul className="icon">
								<li><a href="images/gallery-03.jpg"><i className="fa fa-picture-o" aria-hidden="true"></i></a></li>								
							</ul>
						</div>
					</div>
				</div>
				<div className="col-md-3 col-sm-6">
					<div className="box-gallery">
						<img src="images/gallery-04.jpg" alt=""/>
						<div className="box-content">	
							<h3 className="title">Leading the Way to Better Health</h3>
							<ul className="icon">
								<li><a href="images/gallery-04.jpg"><i className="fa fa-picture-o" aria-hidden="true"></i></a></li>								
							</ul>
						</div>
					</div>
				</div>
				<div className="col-md-3 col-sm-6">
					<div className="box-gallery">
						<img src="images/gallery-05.jpg" alt=""/>
						<div className="box-content">							
							<h3 className="title">Your Health, Our Priority</h3>
							<ul className="icon">
								<li><a href="images/gallery-05.jpg"><i className="fa fa-picture-o" aria-hidden="true"></i></a></li>								
							</ul>
						</div>
					</div>
				</div>
				<div className="col-md-3 col-sm-6">					
					<div className="box-gallery">
						<img src="images/gallery-06.jpg" alt=""/>
						<div className="box-content">
							<h3 className="title">Where Expertise Meets Empathy</h3>
							<ul className="icon">
								<li><a href="images/gallery-06.jpg"><i className="fa fa-picture-o" aria-hidden="true"></i></a></li>								
							</ul>
						</div>
					</div>
				</div>
				<div className="col-md-3 col-sm-6">
					<div className="box-gallery">
						<img src="images/gallery-07.jpg" alt=""/>
						<div className="box-content">
							<h3 className="title">Experience the Difference</h3>
							<ul className="icon">
								<li><a href="images/gallery-07.jpg"><i className="fa fa-picture-o" aria-hidden="true"></i></a></li>								
							</ul>
						</div>
					</div>
				</div>
				<div className="col-md-3 col-sm-6">
					<div className="box-gallery">
						<img src="images/gallery-08.jpg" alt=""/>
						<div className="box-content">		
							<h3 className="title">Committed to Excellence</h3>
							<ul className="icon">
								<li><a href="images/gallery-08.jpg"><i className="fa fa-picture-o" aria-hidden="true"></i></a></li>								
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

{/* <!-- Start Team --> */}
    <div id="team" className="team-box">
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<div className="title-box">
						<h2>Our Doctor</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
					</div>
				</div>
			</div>
			
			<div className="row">
                <div className="col-md-4 col-sm-6">
                    <div className="our-team">
                        <div className="pic">
                            <img src="images/img-1.jpg" alt=""/>
                        </div>
                        <div className="team-content">
                            <h3 className="title">Elina Fobs</h3>
                            <span className="post"> Cardiac Surgeon</span>
                            <ul className="social">
                                <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-sm-6">
                    <div className="our-team">
                        <div className="pic">
                            <img src="images/img-2.jpg" alt=""/>
                        </div>
                        <div className="team-content">
                            <h3 className="title">Devid Goerg</h3>
                            <span className="post">Heart Surgery Specialist</span>
                            <ul className="social">
                                <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-sm-6">
                    <div className="our-team">
                        <div className="pic">
                            <img src="images/img-3.jpg" alt=""/>
                        </div>
                        <div className="team-content">
                            <h3 className="title">Julia Steve </h3>
                            <span className="post">Expert Cardiac Surgeon</span>
                            <ul className="social">
                                <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
			
		</div>
	</div>
    {/* <!-- End Team --> */}


    <div id="blog" className="blog-box">
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<div className="title-box">
						<h2>Blog</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-4 col-md-6 col-sm-12">
					<div className="blog-inner">
						<div className="blog-img">
							<img className="img-fluid" src="images/blog-img-01.jpg" alt="" />
						</div>
						<div className="item-meta">
							<a href="#"><i className="fa fa-comments-o"></i> 5 Comment </a>
							<a href="#"><i className="fa fa-user-o"></i> Admin</a>
							<span className="dti">25 July 2018</span>
						</div>
						<h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
						<a className="new-btn-d br-2" href="#">Read More <i className="fa fa-angle-double-right" aria-hidden="true"></i></a>
					</div>
				</div>
				<div className="col-lg-4 col-md-6 col-sm-12">
					<div className="blog-inner">
						<div className="blog-img">
							<img className="img-fluid" src="images/blog-img-02.jpg" alt="" />
						</div>
						<div className="item-meta">
							<a href="#"><i className="fa fa-comments-o"></i> 5 Comment </a>
							<a href="#"><i className="fa fa-user-o"></i> Admin</a>
							<span className="dti">25 July 2018</span>
						</div>
						<h2>Proin vel sem ut lorem rhoncus lacinia. </h2>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
						<a className="new-btn-d br-2" href="#">Read More <i className="fa fa-angle-double-right" aria-hidden="true"></i></a>
					</div>
				</div>
				<div className="col-lg-4 col-md-6 col-sm-12">
					<div className="blog-inner">
						<div className="blog-img">
							<img className="img-fluid" src="images/blog-img-03.jpg" alt="" />
						</div>
						<div className="item-meta">
							<a href="#"><i className="fa fa-comments-o"></i> 5 Comment </a>
							<a href="#"><i className="fa fa-user-o"></i> Admin</a>
							<span className="dti">25 July 2018</span>
						</div>
						<h2>Aliquam egestas magna a malesuada rutrum. </h2>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
						<a className="new-btn-d br-2" href="#">Read More <i className="fa fa-angle-double-right" aria-hidden="true"></i></a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
}