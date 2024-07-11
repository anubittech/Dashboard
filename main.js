const sidebar = document.querySelector(".sidebar");
const Toggelopen = document.querySelector(".toggel-open");
const toogle = document.querySelector(".sidebar_toggle");
const SidebarItem = document.querySelector(".sidebar_item");
const MainContent = document.querySelector(".content");
const Link = document.querySelectorAll(".link");
const canvasBar = document.getElementById("canvas-bar");
const canvasLine = document.getElementById("canvas-line");


function toggleSidebar() {
  if (sidebar.style.width === "260px") {
    sidebar.style.width = "0px";
    SidebarItem.style.opacity = "0";
    console.log("click for close");
  } else {
    sidebar.style.width = "260px";
    SidebarItem.style.opacity = "1";
    console.log("click for open");
  }
}
console.log("ki");
// function toggleSidebarClass() {
//   sidebar.classList.toggle('.toggel-close')
// }
function CloseSidebar() {
  const MobileWidth = window.innerWidth;
  // close sidebar on this media width ↓
  if (MobileWidth === 425 || MobileWidth === 375) {
    sidebar.style.width = "0px";
    SidebarItem.style.opacity = "0";
  }
}

toogle.addEventListener("click", toggleSidebar);
MainContent.addEventListener("click", CloseSidebar);
// Chart here
new Chart(canvasBar, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

new Chart(canvasLine, {
  type: "line",
  data: {
    labels: ["jan", "feb", "mar", "apr", "may", "jun", "jul"],
    datasets: [
      {
        label: "Month",
        fill: false,
        data: [1, 5, 3, 2, 5, 6, 7],
        borderColor: "rgb(138, 205, 253)",
        // bacbackgroundColor:"white",
        tension: 0.1,
      },
    ],
  },
});
