import React, { useState } from "react";

const FreeAnalysisForm = () => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<
    "software" | "augmentation" | null
  >(null);
  const [developmentStage, setDevelopmentStage] = useState<string | null>(null);
  const [industries, setIndustries] = useState<string[]>([]);
  const [services, setServices] = useState<string[]>([]);
  const [platforms, setPlatforms] = useState<string[]>([]);

  const toggleSelection = (
    selected: string,
    selections: string[],
    setSelections: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setSelections(
      selections.includes(selected)
        ? selections.filter((item) => item !== selected)
        : [...selections, selected]
    );
  };

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleSubmit = () => {
    console.log({
      selectedService,
      developmentStage,
      industries,
      services,
      platforms,
    });
    alert("Form submitted successfully!");
  };

  return (
    <div className="form-container">
      {step === 1 && (
        <div>
          <h2>What do you want to get a quote for?</h2>
          <label>
            <input
              type="radio"
              name="service"
              value="software"
              onChange={() => {
                setSelectedService("software");
                handleNext();
              }}
            />
            Software Development
          </label>
          <label>
            <input
              type="radio"
              name="service"
              value="augmentation"
              onChange={() => {
                setSelectedService("augmentation");
                handleNext();
              }}
            />
            Augmentation Services
          </label>
        </div>
      )}

      {step === 2 && selectedService === "software" && (
        <div>
          <h2>What is the stage of your software development?</h2>
          {[
            "An idea",
            "Functional specification",
            "MVP",
            "Active development",
            "Need of improvement/evolution",
          ].map((stage) => (
            <label key={stage}>
              <input
                type="radio"
                name="stage"
                value={stage}
                onChange={() => setDevelopmentStage(stage)}
              />
              {stage}
            </label>
          ))}
          <button onClick={handleNext}>Continue</button>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2>Select relevant industries</h2>
          {["Banking and finance", "Insurance", "Ecommerce"].map((industry) => (
            <label key={industry}>
              <input
                type="checkbox"
                value={industry}
                onChange={() =>
                  toggleSelection(industry, industries, setIndustries)
                }
              />
              {industry}
            </label>
          ))}
          <label>
            Other:
            <input
              type="text"
              placeholder="Enter other industry"
              onBlur={(e) =>
                e.target.value && setIndustries([...industries, e.target.value])
              }
            />
          </label>
          <button onClick={handleNext}>Continue</button>
        </div>
      )}

      {step === 4 && (
        <div>
          <h2>Which services do you need?</h2>
          {[
            "Product Planning",
            "UX Research",
            "UI Design",
            "Product Consulting",
            "Product Development",
            "API Development",
          ].map((service) => (
            <label key={service}>
              <input
                type="checkbox"
                value={service}
                onChange={() => toggleSelection(service, services, setServices)}
              />
              {service}
            </label>
          ))}
          <label>
            Other:
            <input
              type="text"
              placeholder="Enter other service"
              onBlur={(e) =>
                e.target.value && setServices([...services, e.target.value])
              }
            />
          </label>
          <button onClick={handleNext}>Continue</button>
        </div>
      )}

      {step === 5 && (
        <div>
          <h2>Which platforms does your app need to support?</h2>
          {["Web", "Mobile", "Desktop"].map((platform) => (
            <label key={platform}>
              <input
                type="checkbox"
                value={platform}
                onChange={() =>
                  toggleSelection(platform, platforms, setPlatforms)
                }
              />
              {platform}
            </label>
          ))}
          <label>
            Other:
            <input
              type="text"
              placeholder="Enter other platform"
              onBlur={(e) =>
                e.target.value && setPlatforms([...platforms, e.target.value])
              }
            />
          </label>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}

      {step > 1 && <button onClick={handleBack}>Back</button>}
    </div>
  );
};

export default FreeAnalysisForm;
