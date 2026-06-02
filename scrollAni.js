document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    // 실시간 스크롤 감지 및 네비게이션 하이라이트 업데이트
    window.addEventListener("scroll", () => {
        let current = "";
        
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // 스크롤이 섹션 영역 내에 들어왔는지 확인 (헤더 높이 등 고려)
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute("id");
            }
        });

        // 현재 섹션에 맞는 네비게이션 링크 활성화
        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (current && link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });
});