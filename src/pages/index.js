import React from 'react';
import aboutbanner from '../component/aboutbanner.jpg';
const Home = () => {
  return (
    
    <div className="body-layout">
      <div className="about-section">
      <div class="container">
			<div class="row">
      <div class="col-lg-5 col-md-5ome-about-left">
      <img  className="img" src= {aboutbanner} className="img"/> 
</div>
<div class="col-lg-1 col-md-1 ome-about-left">
</div>

<div class="col-lg-6 col-md-6 home-about-right">
<h2 class="about_heading">About <strong>CodeNomad</strong></h2>
<p>Today ,CodeNomad is one of of the fastest growing companies in the IT sector with an urge to do better and better .We provide convenient and innovative solutions for Web development, Web designing and Application development . Our SEO services have helped out many of our clients to establish their online presence .Our vision is to be a leading IT company in the upcoming years by doing some real quality work for our clients .</p>
<div class="intro_layer page-bottom" data-animation="expandUp" data-toggle="modal">
<a class="btn btn-maincolor" href="about">View Full Details <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></div>

</div>
			</div>
			</div>
      </div> 

      <section class="s-pt-30 s-pb-3 service-item2 ls " id="services">
				<div class="container animate animated fadeInUp" data-animation="fadeInUp">
					<div class="row c-mb-50 c-mb-md-60">
						<div class="d-none d-lg-block divider-20"></div>
						<div class="SERVICESsec">
						<h2 class="about_heading">THE <strong>SERVICES</strong> THAT WE ARE PROVIDING</h2>
						</div>
								<div class="col-12 col-md-6 col-lg-4">
							<div class="vertical-item text-center">
								<div class="item-media">
									<a href="development"></a>
								</div>
								<div class="item-content">
									<h6>
										<a href="development">Development</a>
									</h6>

									<p>
										Specialized in custom programming for most complex code you can think
									</p>

								</div>
							</div>
						</div>
						
									<div class="col-12 col-md-6 col-lg-4">
							<div class="vertical-item text-center">
								<div class="item-media">
									<a href="web-design"></a>
								</div>
								<div class="item-content">
									<h6>
										<a href="web-design">Web Design</a>
									</h6>

									<p>
										Crafting interface in a noteworthy manner by establishing unique user friendly visual design.
									</p>
								</div>
							</div>
						</div>
								<div class="col-12 col-md-6 col-lg-4">
							<div class="vertical-item text-center">
								<div class="item-media">
									<a href="ecommerce"></a>
								</div>
								<div class="item-content">
									<h6>
										<a href="ecommerce">Ecommerce</a>
									</h6>

									<p>
										We build fully functional online stores to attract new customers and allow them to avail services. 
									</p>

								</div>
							</div>
						</div>
						<div class="col-12 col-md-6 col-lg-4">
							<div class="vertical-item text-center">
								<div class="item-media">
								<a href="marketing"></a>
								</div>
								<div class="item-content">
									<h6>
										<a href="marketing">Marketing</a>
									</h6>

									<p>
									We utilize key digital marketing strategies that have been implemented to get traffic &amp; users

									</p>

								</div>
							</div>
						</div>
				
						<div class="col-12 col-md-6 col-lg-4">
							<div class="vertical-item text-center">
								<div class="item-media">
									<a href="seo-optimization"></a>
								</div>
								<div class="item-content">
									<h6>
										<a href="seo-optimization">SEO Optimization</a>
									</h6>

									<p>
										Making the website user friendly to rank on the main page of google, Bing &amp; other Search Engines is our claim to fame.
									</p>
								</div>
							</div>
						</div>
					
						<div class="col-12 col-md-6 col-lg-4">
							<div class="vertical-item text-center">
								<div class="item-media">
									<a href="branding"></a>
								</div>
								<div class="item-content">
									<h6>
										<a href="branding">Branding</a>
									</h6>

									<p>
										At CodeNomad we help business owners to build their online reputation, brand identity and gear up for future audience.
									</p>

								</div>
							</div>
						</div>
					
					</div>
					
				</div>
			</section>
      
    </div>

  );
};
 
export default Home;