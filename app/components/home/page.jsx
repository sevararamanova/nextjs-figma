import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../images/Logo.png';
import hireMe from '../../images/Hire.png';
import saly from '../../images/Saly.png';
import group from '../../images/Group.png';
import twitter from '../../images/btwitter.png';
import linkedin from '../../images/blinkedin.png';
import medium from '../../images/bmedium.png';
import computer1 from '../../images/computer.png';
import computer2 from '../../images/computer2.png';
import footer from '../../images/footerLogo.png';

const Home = () => {
  return (
    <>
      <div className='navbar'>
        <div className='navbar__logo'>
          <Image src={logo} alt="logo" />
          <Image id="hireMe" src={hireMe} alt="hireMe" width={140} />
        </div>
        <div className='navbar__links'>
          <Link href="/">Portfolio</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/cv">CV</Link>
          <Link href="/store">Store</Link>
          <Link href="/freelance">Freelance</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>

      <div className='hero'>
        <div className='hero__display'>
          <div className='hero__txt'>
            <span id="red">Blog Posts</span><br />
            <span>I think so, this is it.</span>
            <div className='p'>
              <p>
                Design begins after I begin to think about how to present an<br />
                experience most successfully, whether a button I put in can solve a problem.<br />
                The only point in design is not<br />
                ui design, if the user does not have a good<br />
                experience at the end of the product, the design will be<br />
                considered unsuccessful in my opinion.
              </p>
              <div className='btnLinks'>
                <Image src={twitter} alt="Twitter" />
                <Image src={linkedin} alt="LinkedIn" />
                <Image src={medium} alt="Medium" />
              </div>
            </div>
          </div>

          <div className='hero__img'>
            <Image id="img1" src={group} alt="group" />
            <Image id="img2" src={saly} alt="saly" />
          </div>
        </div>
      </div>
      <div className='card'>
        <div className='cards__a'>
          <Link href="/">All</Link>
          <Link href="/ui-design">UI Design</Link>
          <Link href="/ux-design">UX Design</Link>
          <Link href="/product-design">Product Design</Link>
          <Link href="/articles">Articles</Link>
          <Link href="/tutorials">Tutorials</Link>
          <Link href="/news">News</Link>
        </div>
        <div className='cards'>
          {[computer1, computer2, computer1, computer2, computer1, computer2].map((src, index) => (
            <div className='umumiy' key={index}>
              <div className='cards__one'>
                <Image src={src} alt={`Computer ${index + 1}`} width={460} />
                <p>NOV 23 2020</p>
                <div className='card__txt'>
                  <h3>This way is wrong about UI Design.</h3>
                  <p>
                    A quick guide to assisting users in the challenging steps from learning<br />
                    about your podcast on the web. A quick guide to assisting users in the<br />
                    challenging steps from learning about your podcast on the web.
                  </p>
                </div>
                <Link href={`/singlePage/${index + 1}`}>LEARN MORE</Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='footer'>
        <Image src={footer} />
      </div>
    </>
  );
};

export default Home;
