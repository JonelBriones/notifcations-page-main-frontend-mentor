const markRead = document.getElementById("markAllAsRead");
const totalNewNotifications = document.querySelector(".new-notification-total");

markRead.addEventListener("click", () => {
  document
    .querySelectorAll(".dot.new-notification")
    .forEach((post) => post.classList.remove("new-notification"));
  totalNewNotifications.innerHTML = "0";
});
