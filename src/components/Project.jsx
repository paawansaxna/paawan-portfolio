import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  category,
  time,
  tags,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);
  
  return (
    <>
      <div
        /* ADJUSTED SPACE: Changed py-10 to py-14 (mobile) and py-20 (desktop).
           This provides a noticeable increase in breathing room while 
           remaining tighter than the previous version.
        */
        className="flex-wrap items-center justify-between py-14 md:py-20 space-y-14 sm:flex sm:space-y-0"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div>
          <p className="text-2xl">{title}</p>
          <div className="flex gap-5 mt-2 text-sand">
            {tags.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
        </div>
        <button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-1 cursor-pointer hover-animation"
        >
          Read More
          <img src="assets/arrow-right.svg" className="w-5" />
        </button>
      </div>

      {/* Kept the divider logic identical to your original design */}
      <div className="bg-gradient-to-r from-transparent via-[#613bcf]/40 to-transparent h-[1px] w-full" />
      
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          category={category}
          time={time}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;