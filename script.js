
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".share-btn").forEach((button) => {
    button.addEventListener("click", async () => {
      const title =
        button.dataset.shareProduct || document.title;

      const shareData = {
        title: title,
        text: `Check out ${title} at Arya Art!`,
        url: window.location.href
      };

      try {
        if (navigator.share) {
          await navigator.share(shareData);
        } else if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(shareData.url);
          alert("Product link copied! Share it with your friends.");
        } else {
          const field = document.createElement("textarea");
          field.value = shareData.url;
          field.style.position = "fixed";
          field.style.left = "-9999px";
          document.body.appendChild(field);
          field.select();

          const copied = document.execCommand("copy");
          field.remove();

          alert(
            copied
              ? "Product link copied!"
              : "Please copy this link: " + shareData.url
          );
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          alert("Sharing failed. Please try again.");
        }
      }
    });
  });
});
