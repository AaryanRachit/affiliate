let data = document.querySelector('.search')
let data2 = document.querySelector('.disclose')
let data3 = document.querySelector('.main-body').innerHTML
let data4 = document.getElementsByTagName('body')
let data6 = document.getElementsByTagName('nav')
let data5 = document.getElementsByTagName('a')
let data7 = document.getElementsByTagName('section')
// console.log(data2)
let data1 = `<h4>Ecommerce</h4>
<ul>
<a href="../make-money-ecommerce-site/index.htm" class="anc"><li>How to make an Ecommerce shop and make money online</li></a>
<li>Lorem ipsum dolor sit amet consectetur adipisicing el sadet. </li>
</ul>
<h4>Website</h4>
<ul>
<li>Lorem ipsum dolor sit amet consectet smador.</li>
<li>Lorem ipsum dolor sit amet consectetur adipisicing el.</li>
</ul>
<h4>Blogging</h4>
<ul>
<li>Lorem ipsum dolor sit amet consectetur adi prid. </li>
<li>Lorem ipsum dolor sit amet.</li>
</ul>
<h4>Marketing</h4>
<ul>
<li>Lorem ipsus kawnt sit oct consectetur adipisicing el.</li>
<li>Lorem ipsum dolor sit amet consectetur.</li>
</ul>
<h4>Products Reviews</h4>
<ul>
<li>Lorem ipsum dolor sit tamt contectetur adsidpres el.</li>
    <a href="../6-headphones-bass/index.htm" class="anc"><li>6 best headphones with powerful bass</li></a>
</ul>
<h4>Tech</h4>
<ul>
<a href="../7-vpn-providers/index.htm" class="anc"><li>7 most popular VPN providers in the world</li></a>
</ul>
<h4>Other</h4>
<ul>
<a href="#" class="anc"><li>lorem ipsum equador hallobna.</li></a>
</ul>
`
data6[0].innerHTML = `<a style="text-decoration: none;" href="../home.htm"><span class="homee">knowlak</span></a> <span class="sp" style="margin-right: 10%;">&#8801;</span>`
let el = document.querySelector('.sp')
if(data2 != null) {
    data2.innerHTML = 'Note: We want to let you know that we might earn a commission when you click on some of our links.'
}

data.innerHTML = ''
val = 1
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
// data6[0].innerHTML = 'knowlak <span class="sp" style="margin-right: 10%;">&#8801;</span>'
el.addEventListener('click', async function() {
    data.style = "margin-top: 6%; padding-top: 2%; padding-bottom: 1%;"
    if (val === 1) {
        data.innerHTML = data1
        val = 0
        data.style.opacity = 0
        for(let i = 0; i < 6; i++) {
            data.style.opacity = i*.20
            await sleep(105)
    }
} else {
    for (let i = 5; i >= 0; i--) {
        data.style.opacity = i*.20
        await sleep(60)
    }
    data.innerHTML = ''
    data.style = "margin-top: 0%; padding-top: 1%; padding-bottom: 1%;"
    val = 1
}
})

data4[0].style.opacity = 0
async function namee () {
    for(let i = 0; i < 11; i++) {
        data4[0].style.opacity = i*.10
        await sleep(40)
    }
}

namee()
// console.log(data5)
// data5.forEach(element => {
//     console.log(element.href)    
// data5[0].setAttribute('target', '_blank')
// });
// array = [100]
for(let i = 0; i < data5.length; i++) {
            if(!data5[i].href.includes('#step')) {
                data5[i].setAttribute('target', '_blank')
            }
}

data7[data7.length-1].insertAdjacentHTML('afterend', `<div class="copyright">COPYRIGHT &#169 2022-2025 &#x2022; KNOWLAK </div>`)
let data8 = document.querySelectorAll('.cate');

if(data8[0] != null) {
    data8.forEach(element => {
        let vall = 0;
        element.addEventListener('mouseover', async function() {
            if(vall == 0) {
            for(let i = 6; i >= 4; i--) {
                await sleep(45);
                element.style = `box-shadow: ${i}px ${i}px`
                vall = 1;
            }
            }
        })
        element.addEventListener('mouseleave', async function() {
            if(vall == 1) {
                for(let i = 4; i < 7; i++) {
                    await sleep(45);
                    element.style = `box-shadow: ${i}px ${i}px`
                    vall = 0;
                }
                }
        })
    });
}