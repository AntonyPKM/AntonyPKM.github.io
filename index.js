const testimonials = [
  {
    name: "Emma Thompson",
    title: "CEO at TechSprint Innovations",
    quote:
      "IntelliGrow has transformed the way we manage finances at TechSprint. The AI-driven insights and collaboration features have made a significant impact on our decision-making process.",
    imgUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Alex Rodriguez",
    title: "CFO of SwiftCraft Solutions",
    quote:
      "As a CFO, I highly recommend IntelliGrow for its robust financial analytics and seamless integration capabilities. It has streamlined our financial management processes and improved overall efficiency.",
    imgUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Sophia Chen",
    title: "Founder of SparkTech Studios",
    quote:
      "IntelliGrow is a game-changer for SMEs! The expense tracking and real-time financial reporting features have given us unparalleled control over our finances. It's a must-have for any growing business.",
    imgUrl:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Michael Davis",
    title: "Operations Manager at Quantum Innovations",
    quote:
      "The collaboration and team management features in IntelliGrow have made communication smoother than ever. It's not just accounting software; it's a comprehensive financial ecosystem.",
    imgUrl:
      "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=1923&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Aisha Patel",
    title: "Small Business Owner",
    quote:
      "IntelliGrow has made bookkeeping a breeze for my small business. The user-friendly interface and automation features have saved me valuable time, allowing me to focus on growing my business.",
    imgUrl:
      "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Raj Gupta",
    title: "Financial Analyst at VentureSphere",
    quote:
      "The AI-driven financial insights provided by IntelliGrow have been invaluable in predicting trends and making proactive financial decisions. It's a powerful tool for any financial analyst.",
    imgUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Laura Adams",
    title: "Operations Coordinator at Skyline Ventures",
    quote:
      "Invoicing and billing were never this easy! IntelliGrow has simplified our billing process, and the integration features ensure that everything is in sync. It has truly made a positive impact on our operations.",
    imgUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Daniel Kim",
    title: "IT Manager at Innovate Dynamics",
    quote:
      "The integration capabilities of IntelliGrow have seamlessly connected our financial data with other systems. This has improved overall data accuracy and eliminated manual errors in our financial processes.",
    imgUrl:
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Elena Rodriguez",
    title: "Project Manager at Quantum Solutions",
    quote:
      "The collaborative features of IntelliGrow have enhanced our team's efficiency in managing projects and budgets. It's a comprehensive solution that every project manager should consider.",
    imgUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Chris Turner",
    title: "Business Consultant",
    quote:
      "IntelliGrow is a versatile financial management tool. Its comprehensive suite of features, from cash flow management to financial analytics, makes it an essential asset for any business consultant.",
    imgUrl:
      "https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Priya Sharma",
    title: "Marketing Director at Nexus Innovations",
    quote:
      "The financial reporting features in IntelliGrow are unmatched. It has provided our marketing team with real-time insights, enabling us to make data-driven decisions to optimize our marketing budget.",
    imgUrl:
      "https://images.unsplash.com/photo-1536766768598-e09213fdcf22?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Robert Lewis",
    title: "Entrepreneur and Investor",
    quote:
      "IntelliGrow is the go-to solution for entrepreneurs and investors alike. The AI-driven financial insights add a layer of intelligence that is crucial for making informed investment decisions.",
    imgUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Sophie Bennett",
    title: "HR Manager at Precision Solutions",
    quote:
      "The collaboration and team management features in IntelliGrow have not only streamlined our financial processes but also improved cross-departmental communication. It's a holistic solution for business management.",
    imgUrl:
      "https://images.unsplash.com/photo-1614204424926-196a80bf0be8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Carlos Mendez",
    title: "Supply Chain Manager at Stellar Products",
    quote:
      "IntelliGrow's integration and automation features have significantly improved our supply chain management. It ensures that our financial data is always up-to-date, leading to better decision-making.",
    imgUrl:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Linda Foster",
    title: "Operations Director at DynamicTech Solutions",
    quote:
      "Managing cash flow has never been this efficient! IntelliGrow's cash flow management tools have given us a clear picture of our financial health, allowing us to make strategic decisions for growth.",
    imgUrl:
      "https://images.unsplash.com/photo-1568038479111-87bf80659645?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Ryan Carter",
    title: "Sales Manager at Horizon Technologies",
    quote:
      "As a sales manager, the financial analytics in IntelliGrow have been instrumental in understanding sales trends and forecasting. It's a powerful tool that aligns sales efforts with overall financial goals.",
    imgUrl:
      "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Grace Thompson",
    title: "CEO at Infinite Designs",
    quote:
      "IntelliGrow has become an integral part of our business strategy. The financial insights and automation features have allowed us to focus on innovation and growth, knowing that our finances are in capable hands.",
    imgUrl:
      "https://images.unsplash.com/photo-1491349174775-aaafddd81942?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Adrian Wong",
    title: "IT Director at GlobalTech Solutions",
    quote:
      "The integration capabilities of IntelliGrow seamlessly connect our IT and financial systems. It has simplified our processes and improved overall data accuracy, making it a valuable asset for IT departments.",
    imgUrl:
      "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Monica Patel",
    title: "Small Business Owner",
    quote:
      "IntelliGrow has been a lifesaver for my small business. From bookkeeping to financial reporting, it's a comprehensive solution that has made managing finances much easier, even for someone without a finance background.",
    imgUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "David Anderson",
    title: "Financial Controller at Summit Dynamics",
    quote:
      "IntelliGrow is not just accounting software; it's a strategic financial partner. The AI-driven insights and collaboration features have elevated our financial control, making it an indispensable tool for financial controllers.",
    imgUrl:
      "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function splitAndLoop(testimonials) {
  const arrayLength = testimonials.length;
  const chunkSize = Math.ceil(arrayLength / 3);
  for (let i = 0; i < arrayLength; i += chunkSize) {
    const chunk = testimonials.slice(i, i + chunkSize);
    console.log(`Processing Chunk ${i / chunkSize + 1}:`);
    document.getElementById("upper-container").innerHTML += `
      <div class="testimonial-container" id="testimonial-container-${
        i / chunkSize
      }">`;
    for (let j = 0; j < chunk.length; j++) {
      console.log("testimonial-container-" + i / chunkSize);
      document.getElementById(
        "testimonial-container-" + i / chunkSize
      ).innerHTML += `
        <div class="testimonial-card primary loop">
        <div class="from">
            <div class="from-img">
                <img
                src="${chunk[j].imgUrl}"
                alt="">
            </div>
            <div class="from-text">
                <div class="name">${chunk[j].name}</div>
                <div class="designation">${chunk[j].title}</div>
            </div>
        </div>
        <div class="from-content">
            <p>
            " ${chunk[j].quote} "
            </p>
        </div>
    </div>
        `;
    }
    document.getElementById("upper-container").innerHTML += `
      </div>
      `;
    console.log("\n");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  splitAndLoop(testimonials);
});
