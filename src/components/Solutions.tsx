import Dropdown from "@/components/Dropdown";

const Solutions = () => {
  const solutions = [
    {
      title: "Unclear lecture explanations and late course materials",
      description: (
        <p>
          Starel addresses this by offering an{" "}
          <b className="text-black">AI-powered academic assistant</b> trained on
          FUTA-specific data. This tool provides detailed, easy-to-understand
          explanations for complex lecture topics, course PDFs, and past
          questions. Students no longer have to struggle with confusing concepts
          or wait for materials to be uploaded. They can get 24/7 access to
          clear, concise information, empowering them to study at their own pace
          and get ahead in their coursework
        </p>
      ),
    },
    {
      title: "No digital platform for student entrepreneurs",
      description: (
        <p>
          Our platform solves this by providing a dedicated{" "}
          <b className="text-black">Campus Marketplace</b>. This feature allows
          student entrepreneurs to showcase their products and services to the
          entire university community, bridging the gap between creators and
          customers. With Starel, students can create digital storefronts,
          manage orders, and grow their businesses without the challenges of
          traditional marketing, fostering financial independence and a vibrant
          entrepreneurial ecosystem on campus.
        </p>
      ),
    },
    {
      title: "Difficulty recovering lost items on campus",
      description: (
        <p>
          To tackle this common problem, Starel introduces a centralized{" "}
          <b className="text-black">Lost-and-Found system</b>. This feature
          allows students to easily post detailed information about lost items
          or report found ones, including photos and contact details. By
          creating a single, accessible hub for all lost items, Starel
          significantly increases the chances of reuniting students with their
          belongings and reduces the stress and frustration associated with
          losing valuable items.
        </p>
      ),
    },
    {
      title: "Struggles with final year projects",
      description: (
        <p>
          Starel provides comprehensive support for final year students through
          its <b className="text-black">AI-powered academic module</b>. The AI
          assistant can help with topic research, offer guidance on structuring
          project reports, and provide quick explanations of complex research
          methodologies. This dedicated support ensures that students have the
          resources they need to navigate the challenging final year project
          process with confidence, helping them produce high-quality work and
          graduate on time.
        </p>
      ),
    },
    {
      title: "Challenges securing IT placements",
      description: (
        <p>
          Our platform features a specialized{" "}
          <b className="text-black">IT Placement Board</b>. This centralized
          board connects 400-level students with relevant IT placement
          opportunities, including internships and industrial training. By
          curating opportunities specifically for students, Starel streamlines
          the search process, helping them find placements that align with their
          field of study and career goals. It also provides a direct channel for
          companies to find and recruit top student talent from FUTA."
        </p>
      ),
    },
    {
      title: "No centralized campus solution",
      description: (
        <p>
          Starel serves as the ultimate{" "}
          <b className="text-black">all-in-one centralized platform</b> for the
          campus community. It integrates academic tools, business
          opportunities, and essential student services into a single, intuitive
          application. This eliminates the need for students to navigate
          multiple websites or physical offices to find information. From
          academic support and entrepreneurial ventures to lost-and-found
          services and scholarship announcements, Starel brings the entire
          university experience into one cohesive and easily accessible digital
          space.
        </p>
      ),
    },
  ];

  return (
    <section className="lg:py-40 py-16 bg-purple-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-[40px] font-bold text-center mb-12 text-gray-900">
          Problems We Solve for{" "}
          <span className="text-purple-600">Nigerian Students</span>
        </h2>
        <div className="flex justify-center items-center gap-4 flex-wrap">
          {solutions.map((items) => (
            <>
              <Dropdown title={items.title} children={items.description} />
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
