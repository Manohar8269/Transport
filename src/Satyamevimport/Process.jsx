const ImportExportSteps = () => {
    const steps = [
      {
        number: "01",
        title: "Define",
        description:
          "Clearly define your import-export business objectives, target markets, and products/services to be traded. Conduct thorough market research and assess the demand, competition, and regulatory requirements.",
      },
      {
        number: "02",
        title: "Documentation",
        description:
          "Ensure compliance with all legal and regulatory documentation, including licenses, permits, customs declarations, and shipping documentation. Accurate and complete documentation is crucial for smooth operations and customs clearance.",
      },
      {
        number: "03",
        title: "Determine",
        description:
          "Determine the most suitable suppliers or manufacturers for sourcing goods and negotiate favorable terms. Evaluate shipping methods, transportation logistics, and insurance options to determine the best approach for exporting and importing goods.",
      },
      {
        number: "04",
        title: "Duties and Taxes",
        description:
          "Understand and comply with import/export duties, tariffs, taxes, and regulations imposed by the relevant countries. Familiarize yourself with the customs procedures and requirements to avoid delays and penalties.",
      },
      {
        number: "05",
        title: "Distribution",
        description:
          "Establish efficient distribution channels, including transportation, warehousing, and inventory management. Work with reliable partners and logistics providers to ensure timely delivery of goods to customers and optimize supply chain operations.",
      },
      {
        number: "06",
        title: "Develop Relationships",
        description:
          "Build strong relationships with suppliers, customers, freight forwarders, customs brokers, and other stakeholders in the import-export industry. Cultivate trust, communication, and collaboration to establish a solid network that supports your business growth.",
      },
    ];
  
    return (
        <>
        <div>
        <h2 className="text-5xl font-bold text-center mb-4">Our 6-D Process​</h2>
        <p className="max-w-3xl mx-auto text-center text-black-300">
        By following these 6 Ds – Define, Documentation, Determine, Duties and Taxes, Distribution, and Develop Relationships – you can navigate the complexities of
        import-export business successfully and maximize your chances of sustainable growth and profitability.
          </p>
        </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
        {steps.map((step, index) => (
          <div key={index} className="relative flex flex-col items-start text-left">
            <span className="text-7xl font-bold text-gray-200 mb-2">
              {step.number}
            </span>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-2">{step.title}</h2>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
      </>
    );
  };
  
  export default ImportExportSteps;
  