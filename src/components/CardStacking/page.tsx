'use client';
import { ReactLenis } from 'lenis/react';
export default function index() {
  return (
    <ReactLenis root>
        <section className="text-white w-full ">
          <div className="flex flex-col md:flex-row justify-between px-16">
            <div className="grid gap-2">
              <figure className="sticky top-0 h-screen grid place-content-center">
                <article className="bg-green-500 h-96 w-full md:w-[80%] rounded-lg rotate-6 p-4 grid place-content-center gap-4">
                  <h1 className="text-2xl font-semibold">Image MouseTrail</h1>
                  <p>
                    An Mouse who is running with couple of images and the best
                    part is you can hide all the images when you don't move your
                    mouse. I hope you'll love it
                  </p>
                  <a
                    href="https://ui-layout.com/components/image-mousetrail"
                    target="_blank"
                    className="w-fit bg-black p-3 rounded-md cursor-pointer"
                  >
                    Click to View
                  </a>
                </article>
              </figure>
              <figure className="sticky top-0 h-screen grid place-content-center">
                <article className="bg-pink-500 h-96 w-full md:w-[80%] rounded-lg -rotate-6 p-4 grid place-content-center gap-4">
                  <h1 className="text-2xl font-semibold">Image MouseTrail</h1>
                  <p>
                    An Mouse who is running with couple of images and the best
                    part is you can hide all the images when you don't move your
                    mouse. I hope you'll love it
                  </p>
                  <a
                    href="https://ui-layout.com/components/image-mousetrail"
                    target="_blank"
                    className="w-fit bg-black p-3 rounded-md cursor-pointer"
                  >
                    Click to View
                  </a>
                </article>
              </figure>
              <figure className="sticky top-0 h-screen grid place-content-center">
                <article className="bg-orange-500 h-96  w-full md:w-[80%] rounded-lg rotate-6 p-4 grid place-content-center gap-4">
                  <h1 className="text-2xl font-semibold">Image MouseTrail</h1>
                  <p>
                    An Mouse who is running with couple of images and the best
                    part is you can hide all the images when you don't move your
                    mouse. I hope you'll love it
                  </p>
                  <a
                    href="https://ui-layout.com/components/image-mousetrail"
                    target="_blank"
                    className="w-fit bg-black p-3 rounded-md cursor-pointer"
                  >
                    Click to View
                  </a>
                </article>
              </figure>
              <figure className="sticky top-0 h-screen grid place-content-center">
                <article className="bg-blue-500 h-96  w-full md:w-[80%] rounded-lg -rotate-6 p-4 grid place-content-center gap-4">
                  <h1 className="text-2xl font-semibold">Image MouseTrail</h1>
                  <p>
                    An Mouse who is running with couple of images and the best
                    part is you can hide all the images when you don't move your
                    mouse. I hope you'll love it
                  </p>
                  <a
                    href="https://ui-layout.com/components/image-mousetrail"
                    target="_blank"
                    className="w-fit bg-black p-3 rounded-md cursor-pointer"
                  >
                    Click to View
                  </a>
                </article>
              </figure>
            </div>
            <div className="sticky top-0 h-full md:h-screen grid place-content-center">
              <h1 className="text-black hidden md:block text-4xl px-8 font-medium text-center tracking-tight leading-[120%]">
                What We <br /> Have Now😎
              </h1>
            </div>
          </div>
        </section>
    </ReactLenis>
  );
}
