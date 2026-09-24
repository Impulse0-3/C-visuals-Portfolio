(function () {
  "use strict";

  function svgWrap(inner, bg) {
    return '<svg viewBox="0 0 480 600" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">' +
      '<rect width="480" height="600" fill="' + bg + '"/>' + inner + '</svg>';
  }

  var projects = [
    {
      cat: "Branding", name: "Northpath Studio Identity",
      desc: "A full visual identity for a boutique architecture studio, built around a single geometric mark.",
      tools: ["Illustrator", "Photoshop", "Figma"],
      process: "Started from hand-sketched marks referencing structural drawing, then refined into a modular grid-based system that scales from a favicon to signage.",
      art: svgWrap('<circle cx="240" cy="240" r="130" fill="#FF3E6C"/><rect x="150" y="330" width="180" height="180" fill="#120F10"/><rect x="60" y="60" width="120" height="6" fill="#F3F0EA"/><rect x="60" y="80" width="80" height="6" fill="#F3F0EA"/>', "#1C1516")
    },
    {
      cat: "Logo Design", name: "Falcon & Fig Wordmark",
      desc: "A custom wordmark and monogram pairing for a specialty coffee roaster.",
      tools: ["Illustrator"],
      process: "Fifteen rounds of letterform sketches narrowed to a single confident script, then a reduced monogram derived directly from its terminal strokes.",
      art: svgWrap('<circle cx="240" cy="300" r="170" fill="#D8FF5E"/><path d="M140 300 Q240 180 340 300 Q240 420 140 300Z" fill="#120F10"/>', "#221C1D")
    },
    {
      cat: "Social Media", name: "Lumen Goods Launch Set",
      desc: "A 12-piece social template system built for a skincare brand's launch week.",
      tools: ["Photoshop", "Canva"],
      process: "Designed one master grid, then produced modular templates the client's team could fill weekly without breaking the system.",
      art: svgWrap('<rect x="60" y="60" width="360" height="480" fill="none" stroke="#F3F0EA" stroke-width="2"/><rect x="100" y="380" width="280" height="120" fill="#FF3E6C"/><circle cx="240" cy="220" r="90" fill="#F3F0EA"/>', "#181415")
    },
    {
      cat: "Posters & Flyers", name: "Afterglow Festival Poster",
      desc: "Event poster series for an independent music festival across three city stops.",
      tools: ["Illustrator", "Photoshop"],
      process: "Built a bold type-led layout that stays legible on a lamppost at a glance, then produced localized variants per city.",
      art: svgWrap('<rect x="0" y="0" width="480" height="600" fill="#7A1F35"/><polygon points="0,600 480,600 480,420 0,540" fill="#120F10"/><rect x="60" y="80" width="360" height="14" fill="#D8FF5E"/><rect x="60" y="120" width="220" height="14" fill="#F3F0EA"/>', "#7A1F35")
    },
    {
      cat: "Advertisements", name: "Orbit App Campaign",
      desc: "Paid social ad set introducing a productivity app's redesigned onboarding.",
      tools: ["Photoshop", "Figma"],
      process: "Tested three visual directions with the client's ad team before landing on a high-contrast device mock paired with a single-line benefit statement.",
      art: svgWrap('<rect x="150" y="70" width="180" height="380" rx="18" fill="#120F10" stroke="#F3F0EA" stroke-width="3"/><rect x="170" y="110" width="140" height="90" fill="#FF3E6C"/><rect x="170" y="220" width="140" height="16" fill="#F3F0EA"/><rect x="170" y="250" width="90" height="16" fill="#9C948C"/>', "#221C1D")
    },
    {
      cat: "UI/UX", name: "Orbit App Dashboard",
      desc: "End-to-end UI design for a task management app's core dashboard experience.",
      tools: ["Figma"],
      process: "Ran quick usability tests on early wireframes, then refined spacing, hierarchy, and a restrained color system before final handoff.",
      art: svgWrap('<rect x="40" y="60" width="400" height="480" rx="10" fill="#181415" stroke="#333" stroke-width="1"/><rect x="70" y="100" width="150" height="80" fill="#D8FF5E"/><rect x="240" y="100" width="130" height="80" fill="#FF3E6C"/><rect x="70" y="210" width="300" height="16" fill="#F3F0EA"/><rect x="70" y="240" width="220" height="16" fill="#9C948C"/>', "#120F10")
    },
    {
      cat: "Illustration", name: "Field Notes Editorial Set",
      desc: "A set of spot illustrations for a print magazine's travel column.",
      tools: ["Illustrator", "Photoshop"],
      process: "Developed a consistent linework style and limited palette so each spot illustration reads as one continuous series across issues.",
      art: svgWrap('<circle cx="180" cy="220" r="70" fill="#D8FF5E"/><rect x="260" y="260" width="140" height="200" fill="#FF3E6C"/><path d="M60 500 Q240 380 420 500" stroke="#F3F0EA" stroke-width="4" fill="none"/>', "#1C1516")
    },
    {
      cat: "Branding", name: "Studio Falcon Stationery",
      desc: "Print collateral suite — business cards, letterhead, and packaging tags.",
      tools: ["Illustrator", "Photoshop"],
      process: "Extended the studio's primary mark into a tactile print system, choosing stock and foil treatments to match its material-first brand values.",
      art: svgWrap('<rect x="80" y="220" width="320" height="180" fill="#F3F0EA"/><rect x="80" y="220" width="320" height="8" fill="#FF3E6C"/><circle cx="140" cy="310" r="20" fill="#120F10"/><rect x="180" y="300" width="160" height="8" fill="#120F10"/><rect x="180" y="320" width="100" height="8" fill="#9C948C"/>', "#221C1D")
    }
  ];

  var grid = document.getElementById("workGrid");
  var modalEl = document.getElementById("projectModal");
  var bsModal = new bootstrap.Modal(modalEl);
  var modalArt = document.getElementById("modalArt");
  var modalCat = document.getElementById("modalCat");
  var modalTitle = document.getElementById("modalTitle");
  var modalDesc = document.getElementById("modalDesc");
  var modalTools = document.getElementById("modalTools");
  var modalProcess = document.getElementById("modalProcess");

  projects.forEach(function (p) {
    var col = document.createElement("div");
    col.className = "col-md-6 col-lg-4 work-item";
    col.setAttribute("data-cat", p.cat);
    col.innerHTML =
      '<div class="work-card">' +
      '<div class="work-art">' + p.art + "</div>" +
      '<div class="p-3">' +
      '<p class="work-cat mb-0">' + p.cat + "</p>" +
      '<h3 class="work-name">' + p.name + "</h3>" +
      '<p class="work-desc">' + p.desc + "</p>" +
      '<span class="work-view">View Project →</span>' +
      "</div></div>";
    col.querySelector(".work-card").addEventListener("click", function () {
      modalArt.innerHTML = p.art;
      modalCat.textContent = p.cat;
      modalTitle.textContent = p.name;
      modalDesc.textContent = p.desc;
      modalProcess.textContent = p.process;
      modalTools.innerHTML = p.tools.map(function (t) { return "<span>" + t + "</span>"; }).join("");
      bsModal.show();
    });
    grid.appendChild(col);
  });

  var filterRow = document.getElementById("filterRow");
  filterRow.addEventListener("click", function (e) {
    var btn = e.target.closest(".filter-btn");
    if (!btn) return;
    filterRow.querySelectorAll(".filter-btn").forEach(function (b) { b.classList.remove("active"); });
    btn.classList.add("active");
    var f = btn.getAttribute("data-filter");
    grid.querySelectorAll(".work-item").forEach(function (item) {
      var show = (f === "all") || (item.getAttribute("data-cat") === f);
      item.classList.toggle("d-none-filter", !show);
    });
  });

  var form = document.getElementById("contactForm");
  var toast = document.getElementById("toastMsg");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    toast.classList.add("show-toast");
    setTimeout(function () { toast.classList.remove("show-toast"); }, 3200);
    form.reset();
  });
})();