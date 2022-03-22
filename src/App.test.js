import React from 'react';
import {render, screen, cleanup} from '@testing-library/react';
import Navbar from "../src/Shared/Navbar/Navbar";
// import Product from "../src/Component/Product/Product";
import Blogs from '../src/Component/Blogs/Blogs';
// import Reviews from '../src/Component/Reviews/Reviews';
// import OurPartner from '../src/Component/OurPartner/OurPartner';
import Footer from '../src/Shared/Footer/Footer';
// import BlogsHome from '../src/Component/Blogs/BlogsHome/BlogsHome';
import { MemoryRouter } from 'react-router-dom';



afterEach(() => {
    cleanup()
})

describe("home page component testing", () => {
    test('nabver component test', () => {
        render(<MemoryRouter>
            <Navbar/>
        </MemoryRouter>);
        const optionOne = screen.getByTestId("optionOne")
        expect(optionOne).toBeInTheDocument();
    });
    // test('product component test', () => {
    //     render(<MemoryRouter>
    //         <Product/>
    //     </MemoryRouter>);
        
    // });

    // test('reviews component test', () => {
    //     render(<MemoryRouter>
    //         <Reviews/>
    //     </MemoryRouter>);
    //     const reviewTitle = screen.getByTestId('reviewTitle');
    //     expect(reviewTitle).toBeInTheDocument();
        
    // });
    // test('OurPartnar component test', () => {
    //     render(<MemoryRouter>
    //         <OurPartner/>
    //     </MemoryRouter>);
    // });
    test('Footer component test', () => {
        render(<MemoryRouter>
            <Footer/>
        </MemoryRouter>);
    });

    test('blog component test', () => {
        render(<MemoryRouter>
            <Blogs/>
        </MemoryRouter>);
        const textElementOne = screen.getByTestId("blogTitle");
        expect(textElementOne).toBeInTheDocument();
        // expect(textElementOne).toHaveTextContent('From Blogs');
    })
})

describe("test our blog page", () => {
    // test("BlogsHome component test", () => {
    //     render(<MemoryRouter>
    //         <BlogsHome></BlogsHome>
    //     </MemoryRouter>)
    // })
})