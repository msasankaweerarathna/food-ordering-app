import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import HomeMenu from "./components/layout/HomeMenu"; 
import SectionHeaders from "./components/layout/SectionHeaders";


export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <HomeMenu/>
      <section className="text-center my-16">
        <SectionHeaders
          subHeader={'Our story'}
          mainHeader={'About us'}
        />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex-col gap-4">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis eveniet, asperiores accusamus in autem expedita odit quam officiis qui doloremque maiores optio facere molestias eius aperiam mollitia tempora dolorem minima.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sequi nostrum iure perspiciatis magnam, optio necessitatibus maiores aliquam quidem, ex fugiat placeat ad veniam dolorem provident. Illo sunt esse repudiandae.
          </p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat repudiandae in accusamus beatae numquam debitis delectus natus fugiat </p>
        </div>
      </section>

      <section className="text-center my-8" id="contact">
        <SectionHeaders
          subHeader={'Don\'t hesitate'}
          mainHeader={'Contact us'}
        />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel:+46738123123">
            +46 738 123 123
          </a>
        </div>
      </section>
      <footer className="border-t p-8 text-center text-gray-500 mt-8">
        &copy; 2024 All rights reserved 
      </footer>
    </>
  );
}
