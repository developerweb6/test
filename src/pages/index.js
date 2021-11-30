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
      
    </div>

  );
};
 
export default Home;