import { Cloudinary } from "@cloudinary/url-gen";
import { source } from "@cloudinary/url-gen/actions/overlay";
import { text } from "@cloudinary/url-gen/qualifiers/source";
import { TextStyle } from "@cloudinary/url-gen/qualifiers/textStyle";
import type { string } from "astro/zod";

const cloudinary = new Cloudinary({
  //   cloud: { cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME },
  cloud: { cloudName: import.meta.env.CLOUDINARY_CLOUD_NAME },
  url: {
    secure: true,
  },
});

const getThumbnail = (title: string) => {
  const thumbnail = cloudinary
    .image("astro-course-ogbg")
    // .overlay(source(text(title, new TextStyle("Cabin", 64, "white"))));
    .overlay(
      source(text(title, new TextStyle("Cabin", 64).fontWeight("bold")))
    );

  return thumbnail.toURL();
};

export { cloudinary, getThumbnail };
