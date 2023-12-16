const featureBlogs = [
  {
    imgUrl:"https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Effortless Bookkeeping",
    overview:
      "Explore how our advanced bookkeeping solutions streamline processes, ensuring accuracy and efficiency for small and medium-sized enterprises.",
  },
  {
    imgUrl:"https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title:
      "Simplified Invoicing",
    overview:
      "Discover how IntelliGrow revolutionizes invoicing, empowering businesses with precision and flexibility to enhance the client experience and drive revenue.",
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1494200483035-db7bc6aa5739?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "AI-Driven Insights",
    overview:
      "Unlock the power of AI-driven financial insights as we explore how IntelliGrow equips SMEs with tools for data-driven decisions and sustainable growth.",
  },
];


const blogs = [
  {
    imgUrl:"https://plus.unsplash.com/premium_photo-1678025061436-436ed2b08193?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Expense Mastery",
    overview: "Embark on a journey to optimize your financial health as IntelliGrow transforms expense tracking into a seamless and insightful process for small and medium-sized enterprises."
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1600461186623-d5551c00fc85?q=80&w=1866&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Financial Clarity",
    overview: "Dive into the world of financial reporting with IntelliGrow, where clarity meets excellence, providing SMEs with the tools they need to make informed and strategic decisions."
  },
  {
    imgUrl: "https://plus.unsplash.com/premium_photo-1683141154082-324d296f3c66?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Analytics Unleashed",
    overview: "Explore how IntelliGrow empowers small and medium-sized enterprises with robust financial analytics, turning raw data into actionable insights for unparalleled business triumph."
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1593672755342-741a7f868732?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Cash Flow Command",
    overview: "Discover the art of cash flow management as IntelliGrow becomes your ally in achieving financial stability for your small or medium-sized enterprise."
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1678500877314-dd34b0b0fc33?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Seamless Integration",
    overview: "Unlock the potential of integration and automation as IntelliGrow seamlessly connects your financial processes, paving the way for a new era of SME financial excellence."
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1622675273018-0d0bbb4a7d99?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Collaboration Redefined",
    overview: "Join us in exploring how IntelliGrow transforms collaboration and team management, fostering a culture of teamwork for elevated financial success among SMEs."
  }
];



function loopFeatureBlog(blogs) {
  const arrayLength = blogs.length;
  for (let i = 0; i < arrayLength; i++) {
    console.log(blogs[i]);
    document.getElementById("feature-blog").innerHTML += `
    <div class="blog-card">
    <img src="${blogs[i].imgUrl}" class="blog-image" alt="">
    <h1 class="blog-title">${blogs[i].title}</h1>
    <p class="blog-overview">${blogs[i].overview}</p>
    <a href="blog-page.html?title=${blogs[i].title}" class="btn-common blog-btn">read</a>
</div>
    `;
  }
}

function loopBlog(blogs) {
  const arrayLength = blogs.length;
  for (let i = 0; i < arrayLength; i++) {
    console.log(blogs[i]);
    document.getElementById("other-blog").innerHTML += `
    <div class="blog-card">
    <img src="${blogs[i].imgUrl}" class="blog-image" alt="">
    <h1 class="blog-title">${blogs[i].title}</h1>
    <p class="blog-overview">${blogs[i].overview}</p>
    <a href="blog-page.html?title=${blogs[i].title}" class="btn-common blog-btn">read</a>
</div>
    `;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  loopFeatureBlog(featureBlogs);
  loopBlog(blogs);
});
