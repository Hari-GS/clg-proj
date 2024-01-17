document
        .querySelector('nav a[data-type="introduction"]')
        .classList.add("active");

      function showContent(contentType) {
        // Hide all content sections
        document.getElementById("introduction-content").style.display = "none";
        document.getElementById("program-details-content").style.display =
          "none";
        document.getElementById("contact-details-content").style.display =
          "none";

        // Reset background color for all links
        var navLinks = document.querySelectorAll("nav a");
        navLinks.forEach(function (link) {
          link.classList.remove("active");
        });

        // Show the selected content section
        document.getElementById(contentType + "-content").style.display =
          "block";

        // Set 'active' class for the clicked link
        document.getElementById(contentType).classList.add("active");
      }