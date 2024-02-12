const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });


const modalBtns = document.querySelectorAll('.modal-btn');
const modalCloseBtn = document.querySelector('#close-btn')
const modal = document.querySelector('.modal')
const modalTech = document.querySelector('.modal-tech')
const modalImageWrapper = document.querySelector('#modal-image-wrapper')

modalBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    let projectId = this.dataset.projectid
    fetch(`/get_project_details/${projectId}/`)
      .then(response => response.json())
      .then(data => {
        modalTech.innerHTML = ''
        modalImageWrapper.innerHTML = ''
        let tech_tag_list = data.technology.split(';')
        for (let tech_tag of tech_tag_list) {
          let tag = document.createElement('span')
          tag.classList.add('text-xs', 'text-white', 'bg-primary-blue-500', 'py-1', 'px-2')
          tag.innerText = tech_tag
          modalTech.append(tag)
        }
        document.getElementById('modal-title').innerText = data.title;
        document.getElementById('modal-summary').innerText = data.summary;
        document.getElementById('modal-github-link').href = data.githubUrl

        let image_list = [data.imageMain, data.image1, data.image2, data.image3, data.image4, data.image5]
        for (let image of image_list) {
          let imageFrame = document.createElement('div')
          imageFrame.classList.add('max-h-96', 'w-auto', 'shadow-2xl')
          let imageSrc = document.createElement('img')
          imageSrc.src = image
          imageFrame.append(imageSrc)
          modalImageWrapper.append(imageFrame)
        }

        document.querySelector('.modal').style.display = 'flex'
      });
  })
});


modalCloseBtn.addEventListener('click', function() {
  modal.style.display = 'none'
})