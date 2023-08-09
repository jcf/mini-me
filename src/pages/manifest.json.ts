import { name } from "../stores/site.ts";
import icon192 from "../assets/icons/android-chrome-192x192.png";
import icon512 from "../assets/icons/android-chrome-512x512.png";

export async function get() {
  return {
    body: JSON.stringify({
      name,
      short_name: name,
      icons: [
        {
          src: icon192.src,
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: icon512.src,
          sizes: "512x512",
          type: "image/png",
        },
      ],
      theme_color: "#ffffff",
      background_color: "#ffffff",
      display: "standalone",
    }),
  };
}
