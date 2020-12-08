window.addEventListener('load', () => {
    let p = document.querySelector('.prg')
    const txt = p.innerText
    let str = 0
    function sub1() {
        let sub = setInterval(() => {
            let b = txt.substr(0, str)
            p.innerText = b
            str++
            if (str > txt.length) {
                clearInterval(sub)
            }
        }, 50);
    }
    sub1()
    })

   