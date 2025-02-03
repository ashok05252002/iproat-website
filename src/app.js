module.exports={content:["./src/**/*.{html,js}"],theme:{extend:{},},plugins:[],};function showToast(type,title,message){const container=document.querySelector('.toast-container');if(!container){console.error('Toast container not found');return}
const toast=document.createElement('div');const colors={purple:'bg-purple-500',};toast.className=`toast ${colors[type] || 'bg-gray-500'} text-white p-4 rounded-lg shadow-lg flex items-center justify-between space-x-4 relative overflow-hidden`;toast.innerHTML=`
                      <div class="flex-1">
                        <h3 class="font-bold">${title}</h3>
                        <p class="text-sm opacity-90">${message}</p>
                      </div>
                      <button class="cancel-button text-white text-lg font-bold">&times;</button>
                      <div class="progress-bar"></div>
                    `;container.appendChild(toast);const cancelButton=toast.querySelector('.cancel-button');cancelButton.addEventListener('click',()=>{toast.classList.add('hide');setTimeout(()=>toast.remove(),500)});setTimeout(()=>{toast.classList.add('hide');setTimeout(()=>toast.remove(),500)},10000)}
document.addEventListener('DOMContentLoaded',()=>{const hamburger=document.getElementById('hamburger');const mobileMenu=document.getElementById('mobile-menu');if(!hamburger||!mobileMenu){console.error('Hamburger or mobile menu not found');return}
const productButton=document.querySelector('#mobile-menu button');if(!productButton){console.error('Product button not found');return}
const productDropdown=productButton.nextElementSibling;if(!productDropdown){console.error('Product dropdown not found');return}
hamburger.addEventListener('click',()=>{mobileMenu.classList.toggle('hidden')});productButton.addEventListener('click',()=>{productDropdown.classList.toggle('hidden')})});var toTopButton=document.getElementById("to-top-button");if(toTopButton){window.onscroll=function(){if(document.body.scrollTop>500||document.documentElement.scrollTop>500){toTopButton.classList.remove("hidden")}else{toTopButton.classList.add("hidden")}};window.goToTop=function(){window.scrollTo({top:0,behavior:'smooth'})}}
const swiper=new Swiper('.swiper-container',{loop:!0,autoplay:{delay:3000,disableOnInteraction:!1,},pagination:{el:'.swiper-pagination',clickable:!0,renderBullet:function(index,className){return'<span class="'+className+' w-4 h-4 bg-purple-700 rounded-full  mx-1 py-0 mb-5 px-10"></span>'},},});function togglePopup(show){document.getElementById('popupForm').classList.toggle('hidden',!show)}