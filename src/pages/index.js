import React from 'react';
import aboutbanner from '../component/aboutbanner.jpg';
import develop from '../component/service1.png';
import webdesign from '../component/service2.png';
import workarrow from '../component/work-arrow.png';

const Home = () => {
  return (
    
    <div className="body-layout">
      <div className="about-section">
      <div className="container">
			<div className="row">
      <div className="col-lg-5 col-md-5ome-about-left">
      <img  className="img" src= {aboutbanner} classNameName="img"/> 
</div>
<div className="col-lg-1 col-md-1 ome-about-left">
</div>

<div className="col-lg-6 col-md-6 home-about-right">
<h2 className="about_heading">About <strong>CodeNomad</strong></h2>
<p>Today ,CodeNomad is one of of the fastest growing companies in the IT sector with an urge to do better and better .We provide convenient and innovative solutions for Web development, Web designing and Application development . Our SEO services have helped out many of our clients to establish their online presence .Our vision is to be a leading IT company in the upcoming years by doing some real quality work for our clients .</p>
<div className="intro_layer page-bottom" data-animation="expandUp" data-toggle="modal">
<a className="btn btn-maincolor" href="about">View Full Details <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a></div>

</div>
			</div>
			</div>
      </div> 

      <section className="s-pt-30 s-pb-3 service-item2 ls " id="services">
				<div className="container animate animated fadeInUp" data-animation="fadeInUp">
					<div className="row c-mb-50 c-mb-md-60">
						<div className="d-none d-lg-block divider-20"></div>
						<div className="SERVICESsec">
						<h2 className="about_heading" style={{textAlign: 'center'}}>THE <strong>SERVICES</strong> THAT WE ARE PROVIDING</h2>
						</div>
								<div className="col-12 col-md-6 col-lg-4 margin-b">
							<div className="vertical-item text-center">
								<div className="item-media">
									<a href="development"><img src={develop} /></a>
								</div>
								<div className="item-content">
									<h6>
										<a href="development">Development</a>
									</h6>

									<p>
										Specialized in custom programming for most complex code you can think
									</p>

								</div>
							</div>
						</div>
						
									<div className="col-12 col-md-6 col-lg-4 margin-b">
							<div className="vertical-item text-center">
								<div className="item-media">
									<a href="web-design"><img src={webdesign} /></a>
								</div>
								<div className="item-content">
									<h6>
										<a href="web-design">Web Design</a>
									</h6>

									<p>
										Crafting interface in a noteworthy manner by establishing unique user friendly visual design.
									</p>
								</div>
							</div>
						</div>
								<div className="col-12 col-md-6 col-lg-4 margin-b">
							<div className="vertical-item text-center">
								<div className="item-media">
									<a href="ecommerce"><img src={develop} /></a>
								</div>
								<div className="item-content">
									<h6>
										<a href="ecommerce">Ecommerce</a>
									</h6>

									<p>
										We build fully functional online stores to attract new customers and allow them to avail services. 
									</p>

								</div>
							</div>
						</div>
						<div className="col-12 col-md-6 col-lg-4 margin-b">
							<div className="vertical-item text-center">
								<div className="item-media">
								<a href="marketing"><img src={webdesign} /></a>
								</div>
								<div className="item-content">
									<h6>
										<a href="marketing">Marketing</a>
									</h6>

									<p>
									We utilize key digital marketing strategies that have been implemented to get traffic &amp; users

									</p>

								</div>
							</div>
						</div>
				
						<div className="col-12 col-md-6 col-lg-4 margin-b">
							<div className="vertical-item text-center">
								<div className="item-media">
									<a href="seo-optimization"><img src={develop} /></a>
								</div>
								<div className="item-content">
									<h6>
										<a href="seo-optimization">SEO Optimization</a>
									</h6>

									<p>
										Making the website user friendly to rank on the main page of google, Bing &amp; other Search Engines is our claim to fame.
									</p>
								</div>
							</div>
						</div>
					
						<div className="col-12 col-md-6 col-lg-4 margin-b">
							<div className="vertical-item text-center">
								<div className="item-media">
									<a href="branding"><img src={webdesign} /></a>
								</div>
								<div className="item-content">
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
      
      <section className="discuss_project" id="Opportunities">
<div className="discuss_projectinner">
<div className="container">
<div className="content">
<h1 className="animate animated fadeInUp" data-animation="fadeInUp">
									Let’s create something awesome together
</h1>
<p>
									We'll accomplish your objectives and to develop business.
</p>
				<div className="intro_layer page-bottom">
<a className="btn btn-maincolor" href="JavaScript:void(0);" onclick="openlivechat('mylivechat_collapsed')">Discuss project</a></div>
							</div>

</div>
</div>
</section>


<section className="animate animated fadeInUp" id="steps" data-animation="fadeInUp">
	<div className="container ">
<h2 className="about_heading"><strong>Our Working Process</strong></h2>
<div className="working_seteps">
<p className="discrption_working">
We understand your business requirements &amp; define the target audience. Then discover the best strategies to make your website up to date &amp; according to the standards of online industry.</p>
<div className="total-work-process d-flex flex-wrap justify-content-around align-items-center">
<div className="single-work-process">
<div className="work-icon-box">
<span className=""><span className=""><img src={webdesign} /></span></span>
</div>
<h4 className="caption">1. Strategy</h4>
</div>
<div className="work-arrow">
<img src={workarrow} alt=""/>
</div>
<div className="single-work-process">
<div className="work-icon-box">
<span className="lnr lnr-layers"><img src={webdesign} /></span>
</div>
<h4 className="caption">2. Design</h4>
</div>
<div className="work-arrow">
<img src={workarrow} alt=""/>
</div>
<div className="single-work-process">
<div className="work-icon-box">
<span className="lnr lnr-layers"><img src={webdesign} /></span>
</div>
<h4 className="caption">3. Develop</h4>
</div>
<div className="work-arrow">
<img src={workarrow} alt=""/>
</div>
<div className="single-work-process">
<div className="work-icon-box">
<span className="lnr lnr-layers"><img src={webdesign} /></span>
</div>
<h4 className="caption">4. Testing</h4>
</div>
<div className="work-arrow">
<img src={workarrow} alt=""/>
</div>
<div className="single-work-process">
<div className="work-icon-box">
<span className="lnr lnr-layers"><img src={webdesign}  /></span>
</div>
<h4 className="caption">5. Support</h4>
</div>

</div>
</div>
</div>

</section>

<footer>
<div class="container">
					<div className="row align-items-center">
					<div className="divider-20 d-none d-lg-block"></div>
						<div className="col-md-12 text-center">
							<p>© Copyright
								<span className="copyright_year">2021</span> All Rights Reserved</p>
						</div>

					</div>
				</div>
</footer>

    </div>

  );
};
 
export default Home;