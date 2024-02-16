showReview();
function showReview() {
  videoSection.innerHTML = "";
  const videoSectionEl = document.createElement("div");
  videoSectionEl.classList.add("container");
  videoSectionEl.classList.add("light-bg");
  videoSectionEl.innerHTML = `
    <div class="row align-items-center">
            <div class="col-12 col-md-6 py-5">
              <h2>Radiant Arc was fantastic to work with</h2>
              <p class="my-4">
              The website Metabolic Health India is a fantastic one. I have got appreciations from my national and international friends also. It came out very colourful capturing what exactly i wanted. The 2nd website Metabolic Health Conference was made in a short notice and also has come out well. Looking forward to more associations.
              </p>

              <figcaption class="reviewer-info d-flex align-items-center mt-5">
                <img
                  class="rounded-circle"
                  src="https://media.licdn.com/dms/image/D4D03AQHZU0Zr7yr3cw/profile-displayphoto-shrink_800_800/0/1694772595374?e=2147483647&v=beta&t=5-pRBwgxNj5ex1NyWSuu3-k6CVRF3jQqDCkXvAQ7CSQ"
                  alt=""
                  srcset=""
                  style="width: 50px; height: 50px"
                />
                <div class="px-3">
                  <div class="fs-6 cl-blue-700 fw-bold">Shashikant Iyengar</div>
                  <span class="mt-1 cl-primary">CEO at Metabolic Health</span>
                </div>
              </figcaption>
            </div>
            <div
              class="col-12 col-md-6 video-wrapper overflow-hidden b-6 position-relative"
            >
              <a href="#">
                <img
                  class="img-fit-cover"
                  src="https://static.wixstatic.com/media/7c7fcc_6f32f814ff5d49bc94a9e99f14831a73~mv2.png"
                  alt=""
                  srcset=""
                  style="filter: revert;"
                />
              </a>
            </div>
          </div>
    `;
  videoSection.appendChild(videoSectionEl);
}
