import React from 'react'
const Descriptionchar = (nombre,description,gif) => (
<article class="s-shadow-bottom">

  <div class="ed-grid m-grid-5 s-gap-2 m-pxy-2 s-bg-white s-radius-tl s-radius-tr">

    <div class="m-cols-2 img-container s-ratio-16-9 s-radius-tl s-radius-tr m-radius">
        <img src={gif}/>
    </div>

    <div class="s-pxy-2 m-pxy-0 m-cols-3">
        <h3>{nombre}</h3>
<p class="s-mb-0">{description}</p>
    </div>
  </div>
  <footer class="s-bg-grey s-cross-center s-pxy-2 s-radius-br s-radius-bl">
      <div class="s-10 m-5 s-mr-1">
          <div class="circle ">
              <img  src="/assets/img/alexys.jpg" />
          </div>
      </div>
      <p class="s-mb-0">Prof. Alexys Lozada</p>
      <div class="button s-to-right">$40USD</div>
  </footer>
</article>

        
)

export default Descriptionchar