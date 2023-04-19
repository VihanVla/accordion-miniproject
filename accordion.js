let accordion = document.querySelector(".accordion")

Array.from(accordion.children).forEach(wrapper => {

  wrapper.querySelector("span").addEventListener("click", e => {
    let span = e.target
    let wrapper = span.parentElement
    wrapper.classList.toggle("show")

    Array.from(accordion.children).forEach(w => {
      if (w != wrapper){
        w.classList.remove("show")
      }
    } )
  })
})
