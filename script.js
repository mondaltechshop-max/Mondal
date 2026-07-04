document.addEventListener("DOMContentLoaded", () => {
    
    // 1. ADVANCED MULTI-BRAND PRICE SWITCHER ENGINE
    const btnUsd = document.getElementById("btn-usd");
    const btnInr = document.getElementById("btn-inr");
    const priceElements = document.querySelectorAll(".price");

    function switchCurrency(targetCurrency) {
        priceElements.forEach(el => {
            el.style.opacity = "0"; 
            setTimeout(() => {
                if (targetCurrency === "inr") {
                    el.textContent = el.getAttribute("data-inr");
                    btnInr.classList.add("active");
                    btnUsd.classList.remove("active");
                } else {
                    el.textContent = el.getAttribute("data-usd");
                    btnUsd.classList.add("active");
                    btnInr.classList.remove("active");
                }
                el.style.opacity = "1"; 
            }, 150);
        });
    }

    btnUsd.addEventListener("click", () => switchCurrency("usd"));
    btnInr.addEventListener("click", () => switchCurrency("inr"));

    // 2. VERIFIED GATEWAY ONE-TAP CLIPBOARD COPIER
    const copyButtons = document.querySelectorAll(".copy-action-btn");
    const globalToast = document.getElementById("global-toast");

    copyButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const targetId = btn.getAttribute("data-target");
            const textToCopy = document.getElementById(targetId).textContent;
            
            navigator.clipboard.writeText(textToCopy).then(() => {
                // Trigger Visual Toast Feedback popup
                globalToast.classList.add("show");
                setTimeout(() => {
                    globalToast.classList.remove("show");
                }, 2000);
            }).catch(err => {
                console.error("Failed to execute copy instructions: ", err);
            });
        });
    });
});
