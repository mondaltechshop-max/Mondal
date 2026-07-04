document.addEventListener("DOMContentLoaded", () => {
    
    // ONE-TAP SYSTEM CLIPBOARD COPIER FOR ACCOUNT GATEWAYS
    const copyButtons = document.querySelectorAll(".copy-action-btn");
    const globalToast = document.getElementById("global-toast");

    copyButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const targetId = btn.getAttribute("data-target");
            const textToCopy = document.getElementById(targetId).textContent;
            
            navigator.clipboard.writeText(textToCopy).then(() => {
                // Visual Toast Popup alert confirmation routing
                globalToast.classList.add("show");
                setTimeout(() => {
                    globalToast.classList.remove("show");
                }, 2000);
            }).catch(err => {
                console.error("Failed to copy clipboard parameter assets: ", err);
            });
        });
    });
});
