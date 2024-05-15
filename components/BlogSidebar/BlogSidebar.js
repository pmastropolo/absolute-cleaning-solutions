import React from 'react';
import Link from "next/link";
import Services from '../../api/service';
import Projects from '../../api/project';
import about from '/public/images/blog/about-widget.jpg'
import blogs from '../../api/blogs'
import Image from 'next/image';

const SubmitHandler = (e) => {
    e.preventDefault()
}

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogSidebar = (props) => {
    return (
        <div className={`col col-lg-4 col-12 ${props.blLeft}`}>
            <div className="blog-sidebar">
                <div className="widget about-widget">
                    <div className="img-holder">
                        <Image src={about} alt="Josh Tatum Blog Author and Owner of Absolute Cleaning Solutions" />
                    </div>
                    <h4>Josh Tatum</h4>
                    <p>Welcome to our blog! I'm Josh Tatum, the owner of Absolute Cleaning Solutions. Dive into our posts for expert cleaning tips and updates. Stick around for the best in cleaning!</p>

                    <div className="social">
                        <ul className="clearfix">
                            <li><Link onClick={ClickHandler} href="/blog-single/Save-Money-on-Cleaning-Supplies"><i className="ti-facebook"></i></Link></li>
                            <li><Link onClick={ClickHandler} href="/blog-single/Save-Money-on-Cleaning-Supplies"><i className="ti-twitter-alt"></i></Link></li>
                            <li><Link onClick={ClickHandler} href="/blog-single/Save-Money-on-Cleaning-Supplies"><i className="ti-linkedin"></i></Link></li>
                            <li><Link onClick={ClickHandler} href="/blog-single/Save-Money-on-Cleaning-Supplies"><i className="ti-pinterest"></i></Link></li>
                        </ul>
                    </div>
                    <div className="aw-shape">
                    </div>
                </div>
                <div className="widget search-widget">
                    <form onSubmit={SubmitHandler}>
                        <div>
                            <input type="text" className="form-control" placeholder="Search Post.." />
                            <button type="submit"><i className="ti-search"></i></button>
                        </div>
                    </form>
                </div>
                <div className="widget category-widget">
                    <h3>Categories</h3>
                    <ul>
                        {Services.slice(0, 6).map((service, Sitem) => (
                            <li key={Sitem}><Link onClick={ClickHandler} href="/service-single/[slug]" as={`/service-single/${service.slug}`}>{`${service.sTitle} Cleaning`} <span>{service.Id}</span></Link></li>
                        ))}
                    </ul>
                </div>
                <div className="widget recent-post-widget">
                    <h3>Related Posts</h3>
                    <div className="posts">
                        {blogs.map((blog, bl) => (
                            <div className="post" key={bl}>
                                <div className="img-holder">
                                    <Image src={blog.screens} alt="" />
                                </div>
                                <div className="details">
                                    <h4><Link onClick={ClickHandler} href='/blog-single/[slug]' as={`/blog-single/${blog.slug}`}>{blog.title}</Link></h4>
                                    <span className="date">{blog.create_at}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="widget wpo-instagram-widget">
                    <div className="widget-title">
                        <h3>Practice</h3>
                    </div>
                    <ul className="d-flex">
                        {Projects.slice(0,3).map((project, Sitem) => (
                            <li key={Sitem}><Link onClick={ClickHandler} href='/project-single/[slug]' as={`/project-single/${project.slug}`}><Image src={project.pImg} alt="" /></Link></li>
                        ))}
                    </ul>
                </div>
                <div className="widget tag-widget">
                    <h3>Tags</h3>
                    <ul>
                        <li><Link onClick={ClickHandler} href="/blog-single/Save-Money-on-Cleaning-Supplies">Kitchen</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/Save-Money-on-Cleaning-Supplies">Office</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/Save-Money-on-Cleaning-Supplies">Window</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/Save-Money-on-Cleaning-Supplies">Floor</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/Save-Money-on-Cleaning-Supplies">Plumbing</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/Save-Money-on-Cleaning-Supplies">Car</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/Save-Money-on-Cleaning-Supplies">Shop</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/Save-Money-on-Cleaning-Supplies">buthroom</Link></li>
                    </ul>
                </div>
                <div className="wpo-contact-widget widget">
                <h2>Ready to Shine?<br /> Let's Get Cleaning!</h2>
                <p>At Absolute Cleaning Solutions, we master the art of clean. From stubborn stains to overall spruce-ups, we tackle it all. Why wait?</p>
                <Link onClick={ClickHandler} href="/contact">Contact Us Today!</Link>
                </div>
            </div>
        </div>
    )

}

export default BlogSidebar;
