import { useState } from "react";

const Section = ({
  title,
  description,
  setVisibleConfig,
  visibleSection,
  name,
}) => {
  return (
    <div className="border border-black p-2 m-2">
      <div className="flex">
        <h3 className="font-bold text-xl">{title}</h3>
        <button
          className="text-sm ml-2 underline"
          onClick={() => setVisibleConfig(name)}
        >
          {visibleSection === name ? "Hide" : "Show"}
        </button>
      </div>

      {visibleSection === name ? <p>{description}</p> : null}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("about");
  return (
    <div>
      <h1>Instamart Page</h1>
      <Section
        visibleSection={visibleSection}
        name={"about"}
        title={"About Instamart"}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        setVisibleConfig={() => {
          setVisibleSection("about");
        }}
      />
      <Section
        visibleSection={visibleSection}
        name={"team"}
        title={"Team Instamart"}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        setVisibleConfig={() => {
          setVisibleSection("team");
        }}
      />
      <Section
        visibleSection={visibleSection}
        name={"careers"}
        title={"Careers Instamart"}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        setVisibleConfig={() => {
          setVisibleSection("careers");
        }}
      />
    </div>
  );
};

export default Instamart;
