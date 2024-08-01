"use client";

import { useEffect } from "react";

const StreamingEmbed = () => {
  useEffect(() => {
    const host = "https://labs.heygen.com";
    const url =
      host +
      "/guest/streaming-embed?share=eyJxdWFsaXR5IjoiaGlnaCIsImF2YXRhck5hbWUiOiJXYXluZV8yMDI0MDcxMSIsInZvaWNlIjp7%0D%0AInZvaWNlX2lkIjoiZTUxNWQ3NDY1MjZmNDQ4ZmE1MzNhZmRkYzk3ZTQ5MzMifSwicHJldmlld0lt%0D%0AZyI6Imh0dHBzOi8vZmlsZXMyLmhleWdlbi5haS9hdmF0YXIvdjMvYTNmZGIwYzY1MjAyNGY3OTk4%0D%0ANGFhZWMxMWViZjI2OTRfMzQzNTAvcHJldmlld190YXJnZXQud2VicCIsIm5lZWRSZW1vdmVCYWNr%0D%0AZ3JvdW5kIjpmYWxzZSwidXNlcm5hbWUiOiIxYWNhOGQxNGY2MGU0OGY2OTI1ZWEyOGI1NmU0Y2Ux%0D%0AZCJ9&inIFrame=1";
    const clientWidth = document.body.clientWidth;
    const wrapDiv = document.createElement("div");
    wrapDiv.id = "heygen-streaming-embed";

    const container = document.createElement("div");
    container.id = "heygen-streaming-container";

    const stylesheet = document.createElement("style");
    stylesheet.innerHTML = `
      #heygen-streaming-embed {
        z-index: 9999;
       
        width: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 200px;
        border-radius: 50%;
        border: 2px solid #fff;
        box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.12);
        transition: all linear 0.1s;
        margin-left: 50px;
        margin-top: 50px;
        overflow: hidden;
        opacity: 0;
        visibility: hidden;
      }
      #heygen-streaming-embed.show {
        opacity: 1;
        visibility: visible;
      }
      #heygen-streaming-embed.expand {
        ${
          clientWidth < 540
            ? "height: 266px; width: 96%; left: 50%; transform: translateX(-50%);"
            : "height: 366px; width: calc(366px * 16 / 9);"
        }
        border: 0;
        border-radius: 8px;
      }
      #heygen-streaming-container {
        width: 100%;
        height: 100%;
      }
      #heygen-streaming-container iframe {
        width: 100%;
        height: 100%;
        border: 0;
      }
    `;

    const iframe = document.createElement("iframe");
    iframe.allowFullscreen = false;
    iframe.title = "Streaming Embed";
    iframe.role = "dialog";
    iframe.allow = "microphone";
    iframe.src = url;

    let visible = false;
    let initial = false;

    window.addEventListener("message", (e) => {
      if (
        e.origin === host &&
        e.data &&
        e.data.type &&
        e.data.type === "streaming-embed"
      ) {
        if (e.data.action === "init") {
          initial = true;
          wrapDiv.classList.toggle("show", initial);
        } else if (e.data.action === "show") {
          visible = true;
          wrapDiv.classList.toggle("expand", visible);
        } else if (e.data.action === "hide") {
          visible = false;
          wrapDiv.classList.toggle("expand", visible);
        }
      }
    });

    container.appendChild(iframe);
    wrapDiv.appendChild(stylesheet);
    wrapDiv.appendChild(container);
    document.body.appendChild(wrapDiv);

    return () => {
      // Cleanup
      wrapDiv.remove();
    };
  }, []);

  return null; // This component does not render anything in the React tree
};

export default StreamingEmbed;
