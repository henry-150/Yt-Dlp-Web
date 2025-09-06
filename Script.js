async function fetchPreview() {
    const previewBox = document.getElementById("sec2");
    const title = document.getElementById("title");
    const thumbnail = document.getElementById("videoThumbnail");
    
    async function fetchPreview(url) {
       const url = document.getElementById("url-input").value;

  if (!url.includes("youtube.com") && !url.includes("youtu.be")) {
    alert("Please enter a valid YouTube URL");
    return;
  }

  try {
    // YouTube oEmbed API
    const response = await fetch(
      `https://www.youtube.com/oembed?url=${encodeURIComponent(
        url
      )}&format=json`
    );
    const data = await response.json();

    title.textContent = data.title;
    thumbnail.src = data.thumbnail_url;
    previewBox.style.display = "block";
  } catch (err) {
    alert("Could not fetch video data. Try another URL.");
  }
}

}
const url = document.getElementById("url-input").value

url.addEventListener("paste", () => {

    setTimeout(() => {  // wait for pasted text to appear
     if (url.includes("youtube.com") || url.includes("youtu.be")) {
       fetchPreview(url);
     }
   }, 100);
 });
