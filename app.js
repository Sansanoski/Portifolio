let spanText = document.querySelector('#spanID')
const barMenu =document.querySelector('.barMenu')
const containerLinks = document.querySelector('.containerLInk')
const buttonGoTopPage = document.querySelector('.getTopPage')
const ul = document.querySelector('ul')
const closeMenuBar = document.querySelector('.closeMenuBar')
const linksToNav = document.querySelectorAll('a')
const stacksIcon = document.querySelectorAll('.stacks')
const showCurriculum = document.querySelector('.resume')
const divBlur = document.querySelector('.divBlur')
const divCurriculo = document.querySelector('.divCurriculo')
const divblur = document.querySelector('.divblur')
const main = document.querySelector('main')

function getText (text , counter ) {
    if(counter < text.length) {
        setTimeout(() => {
            spanText.textContent += text.charAt(counter)
            counter ++;
            getText(text , counter)
        } , 50)
    }
  }
  getText('WALLACE SANSANOSKI' , 0)
  // const  insetNameScreen = (text , counter) => {
  //   if(counter < text.length){
  //    const idSetinterval2= setInterval(() => {
  //       console.log(text.charAt(counter))
  //       spanText.style.display = 'inline'
  //       counter++
  //     },1000)
  //   }
  // }
  // insetNameScreen(spanText.textContent , 0)


const closeBarMenu = event =>{
    const clickedElement = event.target.tagName
    if(clickedElement === 'A'|| clickedElement === 'SPAN'|| clickedElement === 'UL'||clickedElement=== 'LI'){
      console.log(clickedElement)
        ul.classList.remove('showUL')
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

  const showOrRemoveButtonGoToTopPage = ()=> {
    if(window.pageYOffset >= 900){
        buttonGoTopPage.classList.add('show')
        return
    }
    else if(window.pageYOffset < 500){
        buttonGoTopPage.classList.remove('show')
        return
    } 
  }

const buttonGoUpPage =  event => {
    window.scrollTo({
        top : 0 ,
        behavior :"smooth"
    })
  }

const openAbdCloseMenuBar = ()=> {
  barMenu.classList.add('removeBarMenu')
  ul.classList.add('showUL')
}

buttonGoTopPage.addEventListener('click',buttonGoUpPage)
window.addEventListener('scroll',showOrRemoveButtonGoToTopPage)
ul.addEventListener('click' ,closeBarMenu)
barMenu.addEventListener('click' , openAbdCloseMenuBar)

const idSetinterval = setInterval(() => {
  stacksIcon.forEach(item => {
    item.classList.toggle('animate__bounce')
  })
  if(document.documentElement.clientWidth < 300){
    clearInterval(2)
  }
},1000)

showCurriculum.addEventListener('click', () => {
  divCurriculo.style.display ='flex'
  divblur.style.display = 'block'
})
main.addEventListener('click' , event => {
  if(event.target.tagName === 'DIV'|| event.target.tagName === 'SPAN'||event.target.tagName === 'IMG' ){
    divCurriculo.style.display ='none'
    divblur.style.display = 'none'
}
})