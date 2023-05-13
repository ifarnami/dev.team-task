import "./Hero.css";

function Hero() {
  return (
    <main className="flex-center-center">
      <section className="flex-center-center">
        <div className="header mb-5">
          <h1>We Design and Code</h1>
          <h1>For YOU</h1>
        </div>
        <div className="content mb-5">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <button>
          <div class="svg-wrapper-1">
            <div class="svg-wrapper">
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>
          <span><a href="mailto:farnam.faryar@GMAIL.COM">Email Us</a></span>
        </button>
      </section>
    </main>
  );
}

export default Hero;
