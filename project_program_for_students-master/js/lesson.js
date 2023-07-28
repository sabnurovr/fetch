// PhoneCheck

const phone_input = document.querySelector('#phone_input')
const phone_button = document.querySelector('#phone_button')
const phone_result = document.querySelector('#phone_result')

const regExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/

phone_input.value = '+996 '

phone_button.addEventListener('click',() => {
    if (regExp.test(phone_input.value)) {
        phone_result.innerHTML = 'Ok'
        phone_result.style.color = 'green'
    } else{
        phone_result.innerHTML = 'not'
        phone_result.style.color = 'red'
    }

})

// TAB

const tabContent = document.querySelectorAll('.tab_content_block')
const tabsParent = document.querySelector('.tab_content_items')
const tabs = document.querySelectorAll('.tab_content_item')
let currentTab = 0

const hideTabContent = () => {
    tabContent.forEach((element) => {
        element.style.display = 'none'
    })
    tabs.forEach((element) => {
            element.classList.remove('tab_content_item_active')
        }
    )
}

const  showTabContent = (index = 0) =>{
    tabContent[index].style.display = 'block'
    tabs[index].classList.add('tab_content_item_active')

}

const switchTab = () => {
    hideTabContent()
    currentTab = (currentTab)
}

hideTabContent()
showTabContent()


tabsParent.onclick = (event) => {
    const targetElement = event.target
    if(targetElement.classList.contains('tab_content_item')){
        tabs.forEach((tab, tabIndex) => {
            if (targetElement === tab){
                hideTabContent()
                showTabContent(tabIndex)
            }
        })
    }
}

let num = 0


const autoTabSlider = (i = 0) => {
    setInterval(() =>{
        i++
        if (i > tabContent.length -1){
            i = 0
        }
        hideTabContent()
        showTabContent(i)

    }, 3000)
}

autoTabSlider(num)

// CONVERTER


const som = document.querySelector('#som');
const usd = document.querySelector('#usd');
const eur = document.querySelector('#eur');
const convert = (element, targetInput1, targetInput2, isTrue, elementType) => {
    element.oninput = () => {
        const request = new XMLHttpRequest();
        request.open("GET", "../data/convert.json");
        request.setRequestHeader("Content-type", "application/json");
        request.send();
        request.onload = () => {
            const response = JSON.parse(request.response);
            if (isTrue && elementType === "usd") {
                targetInput1.value = (element.value / response.usd).toFixed(2);
                targetInput2.value = (element.value / response.eur).toFixed(2);
            } else if (isTrue && elementType === "eur") {
                targetInput1.value = (element.value * response.usd).toFixed(2);
                targetInput2.value = (element.value * response.eur).toFixed(2);
            } else if (!isTrue && elementType === "usd") {
                targetInput1.value = (element.value * response.usd).toFixed(2);
                targetInput2.value = (element.value / (response.eur / response.usd)).toFixed(2); // Corrected conversion to EUR
            } else if (!isTrue && elementType === "eur") {
                targetInput1.value = (element.value / (response.usd / response.eur)).toFixed(2); // Corrected conversion from USD to EUR
                targetInput2.value = (element.value * response.eur).toFixed(2);
            }
            element.value === '' && (targetInput1.value = '');
            element.value === '' && (targetInput2.value = '');
        };
    };
};


convert(som, usd, eur, true, "usd");
convert(usd, som, eur, false, "usd");
convert(eur, usd, som, false, "eur");





// som.addEventListener('input', () => {
//    const request = new XMLHttpRequest()
//    request.open('GET', "../data/convert.json")
//    request.setRequestHeader("Content-type", "application/json")
//    request.send()
//    request.addEventListener('load', () => {
//        const data = JSON.parse(request.response)
//        usd.value = (som.value / data.usd).toFixed(2)
//    })
// })


// CARD SWITCHER

const card = document.querySelector('.card')
const btnPrev = document.querySelector('#btn-prev')
const btnNext = document.querySelector('#btn-next')
let count = 1

btnNext.onclick = () => {
    count++
    if (count >= 201){
        count = 1
    }
    cardP()
}


btnPrev.onclick = () => {
    count--
    if (count <= 0){
        count = 200
    }
    cardP()
}


const cardP = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        .then(response => response.json())
        .then(data => {
            card.innerHTML = `
                <p>${data.title}</p>
                <p style="color: ${data.completed ? 'green' : 'red'}">${data.completed}</p>
                <span>${data.id}</span>
            `
        })
}

cardP()


const hh = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
}

hh()



