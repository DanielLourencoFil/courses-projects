class CarouselPages {
    constructor(sections, buttons, progressNumber, progressVisual, progressVisualColor = '#d30000'){
        this.progressNumberDisplayer = progressNumber;
        this.progressVisualDisplayer = progressVisual;
        this.sections = [...document.querySelectorAll(sections)];
        this.buttons = [...document.querySelectorAll(buttons)];
        this.progressNumber = document.querySelector(progressNumber);
        this.progressVisual = [...document.querySelectorAll(`.${progressVisual}`)];

        this.wrapperFirst = document.querySelector(`.section-1-wrapper`)
        this.wrapperLast = document.querySelector(`.section-${this.sections.length}-wrapper`)
        
        this.counterPage = 0;

        this.progressVisualColor = progressVisualColor
        this.scaleUp = 1.5;
        this.scaleDown = 1;

        //==== DEFAULT CSS
        this.progressVisual[0].style.backgroundColor = this.progressVisualColor
        this.progressNumber.textContent = `1/${sections.length}`;
        
        this.wrapperFirst.style.transform = `scale(${this.scaleDown})`
       
    }
    carousel = (event)=>{
        if(event){
            this.counterPage++
        }
        else{
        this.counterPage--
        }

        if(this.counterPage === 5){
            this.sections.forEach(section=>{
                section.style.left = "0"
            })
            this.counterPage = 0
            this.progressCounterDisplayer()
            this.wrapperLast.style.transform = `scale(${this.scaleUp})`
            this.wrapperFirst.style.transform = `scale(${this.scaleDown})`
            return
        }
        if(this.counterPage === -1){
            this.sections.forEach(section=>{
                if(section.classList.contains('section-5'))return
                section.style.left = "-100vw"
            })
            this.counterPage = 4
            this.progressCounterDisplayer()
            console.log(this.wrapperLast);
            this.wrapperLast.style.transform = 'scale(1)'
            return
        }
        
        this.progressCounterDisplayer();
        
        document.querySelector(`.section-${event ? this.counterPage : this.counterPage+1}`).style.left = `${event ? "-100vw": "0"}`

        document.querySelector(`.section-${event ? this.counterPage : this.counterPage+1}-wrapper`).style.transform = `scale(${event ? this.scaleUp : this.scaleDown})`
        
        document.querySelector(`.section-${event ? this.counterPage+1 : this.counterPage+2}-wrapper`).style.transform = `scale(${event ? this.scaleDown : this.scaleUp})`
    }
    progressCounterDisplayer = ()=>{
        this.progressNumber.textContent = `${this.counterPage+1}/${this.sections.length}`;
        this.progressVisual.forEach(item =>{
            if(item.classList.contains(`${this.progressVisualDisplayer}-${this.counterPage+1}`)){
                item.style.backgroundColor = this.progressVisualColor
            }
            else{
                item.style.backgroundColor = "transparent"
            }
        })
    }
    onWheel = ()=>{
        window.addEventListener('wheel', (e)=>{
        const scrollDown = e.deltaY > 0
        this.carousel(scrollDown)
        });
    }
    onClick = ()=>{
        this.buttons.forEach(btn =>{
            btn.addEventListener('click', (e)=>{
            const scrollDow = e.currentTarget.classList.contains('right-btn')
            this.carousel(scrollDow)
            })
        })
    }
}
const carousel = new CarouselPages('section', '.page-btn', '#progress-number', 'circle','green')
carousel.onWheel()
carousel.onClick()


//==== section 3 zoom efect on hover 
document.querySelector('.grapes-img').addEventListener('mouseover', function(e){
     document.querySelector('.section-3-wrapper').style.opacity = '.5';
})
document.querySelector('.grapes-img').addEventListener('mouseout', (e)=>{
    document.querySelector('.section-3-wrapper').style.opacity = '1'
    // this.style.opacity = '1';
})

/////////////////////







/*
let counterPage = 0;

const sections = document.querySelectorAll('section')
const progressCircles = document.querySelectorAll(`.circle`)
const progressCounter = document.querySelector('.progress h2');
const carouselBtns = document.querySelectorAll('.page-btn')

//==== DEFAULT CSS
//--- circle-1 selected and progressCounter set on on 1
progressCircles[0].style.backgroundColor = '#d30000'
progressCounter.textContent = `1/${sections.length}`;

//--- transition effect while changing sections
const wrapperFirst = document.querySelector('.section-1-wrapper')
const wrapperLast = document.querySelector(`.section-${sections.length}-wrapper`)
wrapperFirst.style.transform = 'scale(1)'

//==== carousel on wheel
window.addEventListener('wheel', (e)=>{
    const scrollDown = e.deltaY > 0
    carousel(scrollDown)
});

//==== carousel on click
[...carouselBtns].forEach(btn =>{
    btn.addEventListener('click', (e)=>{
        const scrollDow = e.currentTarget.classList.contains('right-btn')
        carousel(scrollDow)
    })
})

//==== section 3 zoom efect on hover 
document.querySelector('.grapes-img').addEventListener('mouseover', function(e){
     document.querySelector('.section-3-wrapper').style.opacity = '.5';
})
document.querySelector('.grapes-img').addEventListener('mouseout', (e)=>{
    document.querySelector('.section-3-wrapper').style.opacity = '1'
    // this.style.opacity = '1';
})

/////////////////////

const progressCounterDisplayer = ()=>{
    progressCounter.textContent = `${counterPage+1}/${sections.length}`;
    [...progressCircles].forEach(circle =>{
        // circle.style.backgroundColor = ""
        if(circle.classList.contains(`circle-${counterPage+1}`)){
            circle.style.backgroundColor = "#d30000"
        }
        else{
            circle.style.backgroundColor = "transparent"
            
        }
        
    })
};

function carousel(event){
     if(event){
        counterPage++
    }
    else{
       counterPage--
    }

    if(counterPage === 5){
        [...sections].forEach(section=>{
            section.style.left = "0"
        })
        counterPage = 0
        progressCounterDisplayer()
        wrapperLast.style.transform = 'scale(1.5)'
        wrapperFirst.style.transform = 'scale(1)'
        return
    }
    if(counterPage === -1){
        [...sections].forEach(section=>{
            if(section.classList.contains('section-5'))return
            section.style.left = "-100vw"
        })
        counterPage = 4
        progressCounterDisplayer()
        console.log(wrapperLast);
        wrapperLast.style.transform = 'scale(1)'
        return
    }
    
    progressCounterDisplayer();

     
    document.querySelector(`.section-${event ? counterPage : counterPage+1}`).style.left = `${event ? "-100vw": "0"}`

    document.querySelector(`.section-${event ? counterPage : counterPage+1}-wrapper`).style.transform = `scale(${event ? '1.5' : '1'})`
    
    document.querySelector(`.section-${event ? counterPage+1 : counterPage+2}-wrapper`).style.transform = `scale(${event ? '1' : '1.5'})`
    
    console.log(counterPage, counterPage+1);
    console.log(counterPage+1, counterPage+2);
    
}


*/




/*
let counter = 0
let counterPage = 1;

window.addEventListener('wheel', (e)=>{
    console.log(counterPage, counterPage+1);
    console.log(counter);
    const scrollDown = e.deltaY > 0
    if(scrollDown){
        setTimeout(()=> {
            counter = 2
        },1000) 
        counter == 2 ? counterPage++ : counterPage;
        counter > 2 ? counter = 0 : counter = 1
        counterPage > 4 ? counterPage = 4: counterPage
        
        
    }
    else{
        setTimeout(()=> {
            counter = 2
        },1000) 
        counter == 2 ? counterPage-- : counterPage;
        counter > -2 ? counter = 0 : counter = -1
        
         counterPage < 0 ? counterPage = 1: counterPage
        
       
    }   
})
*/