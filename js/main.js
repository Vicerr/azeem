const toggleNav = () => {
    document.querySelector(".nav-links").classList.toggle("open")
}

const observer = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate")
                observer.unobserve(entry.target)
            }
        })
    },
    { threshold: 0.1 }
)
document.querySelectorAll("section>*").forEach((element) => {
    observer.observe(element)
})
