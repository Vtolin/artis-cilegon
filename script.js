      const toggleButton = document.querySelector(".darkmode");

      window.onload = function () {
        const isDarkmode = localStorage.getItem("darkMode") === "true";
        document.body.classList.toggle("dark-mode", isDarkmode);
        toggleButton.textContent = isDarkmode ? "light-mode" : "dark-mode";
      };

      toggleButton.addEventListener("click", function () {
        const isDarkmode = document.body.classList.toggle("dark-mode");
        localStorage.setItem("darkMode", isDarkmode);
        toggleButton.textContent = isDarkmode ? "light-mode" : "dark-mode";
      });

      const scrollElements = document.querySelectorAll(".scroll-animate");

      const scrollInView = () => {
        scrollElements.forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight - 100) {
            el.classList.add("visible");
          }
        });
      };

      window.addEventListener("scroll", scrollInView);
      window.addEventListener("load", scrollInView);