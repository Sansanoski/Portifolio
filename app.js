let spanText = document.querySelector('[data-js="introduction-myName"]')
const buttonGoTopPage = document.querySelector('[data-js="icon-to-up-and-down"]')
const barMenu =document.querySelector('[ data-js="barMeu"]')
const stacksIcon = document.querySelectorAll('[data-js="iconStack"]')
const ULMenuBar = document.querySelector('[data-js="menu-bar"]')
const containerLinks = document.querySelector('[data-js="container-lInk"]')
const closeMenuBar = document.querySelector('[data-js="closeMenuBar"]')
const getResume= document.querySelector('[data-js="resume"]')
const divBlur = document.querySelector('[data-js="container-blur"]')
const divCurriculo = document.querySelector('[data-js="container-resume"]')
const mainContainer = document.querySelector('[data-js="main-container"]')

const  logIntroductionIntoScreen = (text, counter) => {

  const isCounterMorethanTextLength = counter < text.length

  if(isCounterMorethanTextLength) {
    setTimeout(() => {
      spanText.textContent += text.charAt(counter)
      counter++
      logIntroductionIntoScreen(text, counter)
    }, 70)
  }
}
  logIntroductionIntoScreen('WALLACE SANSANOSKI', 0)


const closeBarMenu = event => {
  const clickedElement = event.target.tagName
  const clickedTagHTML = ['A', 'LI', 'SPAN', 'UL'].includes(clickedElement)

  if (clickedTagHTML) {
    ULMenuBar.classList.remove('showUL')
    barMenu.classList.remove('removeBarMenu')
  }
}

const swiper = new Swiper('.swiper', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

const showOrRemoveButtonGoToTopPage = () => {

  const pageOFFSETisMoreThan900px = window.pageYOffset >= 900

  pageOFFSETisMoreThan900px
    ? buttonGoTopPage.classList.add('show')
    : buttonGoTopPage.classList.remove('show')

}

const buttonGoUpPage = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}


const openAndCloseMenuBar = () => {
  barMenu.classList.add('removeBarMenu')
  ULMenuBar.classList.add('showUL')
}

const stopAnimationIconStack = id => {
  const pageWidthIsLessThan300 = document.documentElement.clientWidth < 300
  if (pageWidthIsLessThan300) {
    clearInterval(id)
  }
}

const idSetinterval = setInterval(() => {

  const insertAnimationClassIntoICON = item => {
    item.classList.toggle('animate__bounce')
  }

  stacksIcon.forEach(insertAnimationClassIntoICON)

  stopAnimationIconStack(idSetinterval)

}, 1000)

const showResumeIntoScreen = () => {
  divCurriculo.style.display ='flex'
  divBlur.style.display = 'block'
}

const hideResumeIntoScreen = event => {
  
  const clickedElement = event.target.tagName
  const isElementCliked = clickedElement === 'DIV'|| clickedElement === 'SPAN'||clickedElement === 'IMG'
  
  if(isElementCliked){
    divCurriculo.style.display ='none'
    divBlur.style.display = 'none'
  }
}

getResume.addEventListener('click', showResumeIntoScreen)
mainContainer.addEventListener('click', hideResumeIntoScreen)
buttonGoTopPage.addEventListener('click', buttonGoUpPage)
window.addEventListener('scroll', showOrRemoveButtonGoToTopPage)
ULMenuBar.addEventListener('click', closeBarMenu)
barMenu.addEventListener('click', openAndCloseMenuBar)
