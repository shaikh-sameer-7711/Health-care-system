import { Link } from "react-router-dom";

export default function About()
{
    return<>
    
    <div id="about" className="about-box">
		<div className="about-a1">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="title-box">
							<h2>About Us</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12">
						<div className="row align-items-center about-main-info">
							<div className="col-lg-6 col-md-6 col-sm-12">
								<h2> Welcome to Health Lab </h2>
								<p>Fusce convallis ante id purus sagittis malesuada. Sed erat ipsum, suscipit sit amet auctor quis, vehicula ut leo. Maecenas felis nulla, tincidunt ac blandit a, consectetur quis elit. Nulla ut magna eu purus cursus sagittis. Praesent fermentum tincidunt varius. Proin sit amet tempus magna. Fusce pellentesque vulputate urna. </p>
								<p>Fusce convallis ante id purus sagittis malesuada. Sed erat ipsum, suscipit sit amet auctor quis, vehicula ut leo. Maecenas felis nulla, tincidunt ac blandit a, consectetur quis elit. Nulla ut magna eu purus cursus sagittis. Praesent fermentum tincidunt varius. Proin sit amet tempus magna. Fusce pellentesque vulputate urna. </p>
								<Link href="#" clLinkssName="new-btn-d br-2">Read More</Link>
							</div>
							<div className="col-lg-6 col-md-6 col-sm-12">
								<div className="about-m">
									<ul id="banner">
										<li>
											<img src="images/about-img-01.jpg" alt="image not found"/>
										</li>
										<li>
											<img src="images/about-img-02.jpg" alt="image not found"/>
										</li>
										<li>
											<img src="images/about-img-03.jpg" alt="image not found"/>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
        
    </>
}