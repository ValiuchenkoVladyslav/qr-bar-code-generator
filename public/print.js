window.addEventListener("DOMContentLoaded", () => {
   const img = document.getElementById("print-image");
   const dataUrl = decodeURIComponent(window.location.hash.substring(1));

   if (dataUrl) {
      img.src = dataUrl;

      img.onload = () => {
         setTimeout(() => {
            window.print();
         }, 250);
      };
   }
});
