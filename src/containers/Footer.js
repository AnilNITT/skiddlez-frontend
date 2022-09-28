const Footer =()=>{
    return(
        <div className="container">

                <div className="row ft">                       
                    
                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <div className="single_footer single_footer_address imgs">
                            <img src="logo3.png" alt="#"/>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-4 col-xs-12 pd">
                        <div className="single_footer">
                            <h4>Service</h4>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Product</a></li>
                                <li><a href="#">Solution</a></li>
                                <li><a href="#">Features</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div> 

                    <div className="col-md-4 col-sm-4 col-xs-12 pd">
                        <div className="single_footer single_footer_address">
                            <h4>About Us</h4>
                            <ul>
                                <li><a href="#">Terms & Conditions</a></li>
                                <li><a href="#">Copyrights</a></li>
                                <li><a href="#">FUP</a></li>
                                <li><a href="#">VAT</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-4 col-xs-12 pd">
                        <div className="single_footer single_footer_address">
                            <h4>Company</h4>
                            <ul>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Customers</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Career</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-4 col-xs-12 pd">
                        <div className="single_footer single_footer_address">
                            <h4>Content</h4>
                            <ul>
                                <li><a href="#">Categories</a></li>
                                <li><a href="#">Packs</a></li>
                                <li><a href="#">Offers</a></li>
                                <li><a href="#">Plugins</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <div className="single_footer single_footer_address imgs">
                            <img src="images.png" alt="#"/>
                        </div>
                    </div>
     
                </div>

                <div className="row ft">                       
                    
                    <div className="col-md-6 col-sm-6 col-xs-12 fts">
                        <div className="social_profile">
                            <ul>
                                <li><a href="https://www.facebook.com/" target="_blank" rel="noreferrer" style={{"background":"white"}}><img src="Facebook.png" alt="#"/></a></li>
                                {/* <li><a href="#" style={{"background":"cornflowerblue"}}><i className="fab fa-facebook-f"/></a></li> */}
                                <li><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" style={{"background":"white"}}><img src="Instagram.png" alt="#"/></a></li>
                                <li><a href="https://linkedin.com/" target="_blank" rel="noreferrer" style={{"background":"white"}}><img src="Linkedin.png" alt="#"/></a></li>
                                <li><a href="https://twitter.com/" target="_blank" rel="noreferrer" style={{"background":"white"}}><img src="Twitter.png" alt="#"/></a></li>
                            </ul>
                        </div>                          
                    </div>  

                    <div className="col-md-6 col-sm-6 col-xs-12 fts" style={{"margin-top": "40px"}}>
                        <div className="single_footer single_footer_address">
                            <img className="ft-img" src="Appstore.png" alt="#"/>
                        </div>
                        <div style={{"width": "10px"}}>{}</div>
                        <div className="single_footer single_footer_address">
                            <img className="ft-img" src="playstore.png" alt="#"/>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12 col-sm-12 col-xs-12">
                        <p className="copyright" style={{"margin": "1em 0em"}}>©2022 Skiddlez. All right reserved.</p>
                    </div>                 
                </div>    
                            
        </div>
    )
}

export default Footer;