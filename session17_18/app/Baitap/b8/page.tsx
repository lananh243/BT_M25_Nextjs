import React from "react";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Book",
    title: "Mật mã Da Vinci",
    description: "Tiểu thuyết của nhà văn người Mỹ Dan Brown",
    author: "Doubleday Fiction",

    datePublished: "2003-03-06",
  };

  return (
    <div>
      <section>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        ></script>
      </section>
    </div>
  );
}
