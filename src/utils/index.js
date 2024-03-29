import placeholder from "../../public/images/placeholder.png";

export const departureSchedule = {
  months: [
    "August 2023",
    "September 2023",
    "October 2023",
    "November 2023",
    "December 2023",
  ],
  monthPlan: [
    {
      month: "August 2023",
      plans: [
        {
          trip: "Annapurna Base Camp Helicopter Tour",
          date: "On Aug 13, 2023",
          price: "$500",
          space: "5",
        },
        {
          trip: "Everest Base Camp Helicopter Tour",
          date: "On Aug 13, 2023",
          price: "$1500",
          space: "20",
        },
        {
          trip: "Kailash Yatra 13 Days",
          date: "Aug 17, 2023 - Aug 29, 2023",
          price: "$1600",
          space: "20",
        },
      ],
    },
  ],
};

export const featuredBlogPosts = [
  {
    image: placeholder,
    title: "Featured Blog Post 1 Title",
    introduction:
      "Short introduction about featured blog post 1.Short introduction about featured blog post 1.Short introduction about featured blog post 1.Short introduction about featured blog post 1.Short introduction about featured blog post 1.",
  },
  {
    image: placeholder,
    title: "Featured Blog Post 2 Title",
    introduction: "Short introduction about featured blog post 2.",
  },
];

export const blogPosts = [
  {
    id: 1,
    image: placeholder,
    title: "Blog Post 1 Title",
    introduction:
      "Short introduction about Blog Post 1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quia, harum tempore natus magni nobis veritatis vitae soluta laboriosam dicta, quaerat veniam! Corporis quibusdam quae eaque fugiat alias totam ullam. Short introduction about Blog Post 1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quia, harum tempore natus magni nobis veritatis vitae soluta laboriosam dicta, quaerat veniam! Corporis quibusdam quae eaque fugiat alias totam ullam",
    categories: ["Category 1", "Category 2"],
    date: "August 12, 2023",
    author: "John Doe",
    content: `
      <p>This is the content of the blog post. It can include paragraphs, images, and other HTML elements.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget bibendum libero...</p>
    `,
  },
  {
    id: 2,
    image: placeholder,
    title: "Blog Post 2 Title",
    introduction: "Short introduction about Blog Post 2.",
    categories: ["Category 3", "Category 4"],
    date: "August 10, 2023",
  },
];
