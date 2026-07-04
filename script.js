document.addEventListener("DOMContentLoaded", () => {
    
    // 1. DYNAMIC CURRENCY SWITCHER LOGIC
    const btnUsd = document.getElementById("btn-usd");
    const btnInr = document.getElementById("btn-inr");
    const priceElements = document.querySelectorAll(".price");

    function switchCurrency(currency) {
        priceElements.forEach(el => {
            el.style.opacity = "0"; // Smooth fade out
            setTimeout(() => {
                if (currency === "inr") {
                    el.textContent = el.getAttribute("data-inr");
                    btnInr.classList.add("active");
                    btnUsd.classList.remove("active");
                } else {
                    el.textContent = el.getAttribute("data-usd");
                    btnUsd.classList.add("active");
                    btnInr.classList.remove("active");
                }
                el.style.opacity = "1"; // Smooth fade in
            }, 150);
        });
    }

    btnUsd.addEventListener("click", () => switchCurrency("usd"));
    btnInr.addEventListener("click", () => switchCurrency("inr"));

    // 2. TELEGRAM HANDLE ONE-CLICK CLIPBOARD COPIER
    const tgBadge = document.getElementById("copy-tg");
    const toast = document.getElementById("copy-toast");

    tgBadge.addEventListener("click", () => {
        const textToCopy = tgBadge.textContent;
        navigator.clipboard.writeText(textToCopy).then(() => {
            toast.style.opacity = "1";
            setTimeout(() => {
                toast.style.opacity = "0";
            }, 1800);
        }).catch(err => {
            console.error("Could not copy text: ", err);
        });
    });
});
